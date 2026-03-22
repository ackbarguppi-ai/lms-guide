// LMS Guide Lead Capture Worker
// Stores submissions in KV, appends to Google Sheet, and triggers report generation

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders() });
    }

    try {
      const data = await request.json();

      // Validate email (required)
      if (!data.email || !data.email.includes('@')) {
        return jsonResponse({ error: 'Valid email required' }, 400);
      }

      const timestamp = new Date().toISOString();
      const submission = {
        timestamp,
        email: data.email || '',
        name: data.name || '',
        company: data.company || '',
        phone: data.phone || '',
        company_size: data.company_size || '',
        use_case: data.use_case || '',
        criteria: data.criteria || '',
        status: 'New'
      };

      // Store in KV (primary storage)
      const key = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      await env.LEADS.put(key, JSON.stringify(submission));

      // Also store a running count
      const countStr = await env.LEADS.get('_count') || '0';
      await env.LEADS.put('_count', String(parseInt(countStr) + 1));

      // Send Telegram notification (non-blocking)
      if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
        ctx.waitUntil(sendTelegramNotification(env, submission));
      }

      // Try Google Sheets append if configured (non-blocking)
      if (env.GOOGLE_SERVICE_ACCOUNT_JSON) {
        ctx.waitUntil(appendToSheet(env, submission));
      }

      // Trigger report generation if webhook URL is configured (non-blocking)
      if (env.REPORT_GENERATOR_URL) {
        ctx.waitUntil(triggerReportGeneration(env, submission, key));
      }

      return jsonResponse({ success: true });

    } catch (err) {
      console.error('Worker error:', err);
      return jsonResponse({ success: true }); // Don't fail visibly
    }
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  });
}

async function sendTelegramNotification(env, submission) {
  try {
    const lines = [
      '🔔 *New LMS Guide Lead*',
      '',
      `*Email:* ${submission.email}`,
      submission.name ? `*Name:* ${submission.name}` : null,
      submission.company ? `*Company:* ${submission.company}` : null,
      submission.company_size ? `*Size:* ${submission.company_size}` : null,
      submission.use_case ? `*Use case:* ${submission.use_case}` : null,
      '',
      `_${submission.timestamp}_`,
    ].filter(Boolean).join('\n');

    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: lines,
        parse_mode: 'Markdown',
      }),
    });
  } catch (err) {
    console.error('Telegram error:', err.message);
  }
}

async function triggerReportGeneration(env, submission, leadId) {
  try {
    console.log(`Triggering report generation for ${submission.email}`);
    
    const response = await fetch(env.REPORT_GENERATOR_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-API-Key': env.REPORT_GENERATOR_API_KEY || '',
      },
      body: JSON.stringify({
        email: submission.email,
        name: submission.name,
        company: submission.company,
        company_size: submission.company_size,
        use_case: submission.use_case,
        criteria: submission.criteria,
        lead_id: leadId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Report generation failed: ${response.status} ${errorText}`);
    } else {
      console.log(`Report generation triggered successfully for ${submission.email}`);
    }
  } catch (err) {
    console.error('Report generation trigger error:', err.message);
  }
}

async function appendToSheet(env, submission) {
  try {
    const sa = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const now = Math.floor(Date.now() / 1000);

    // Build JWT
    const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }));

    const signInput = `${header}.${payload}`;
    const pemContents = sa.private_key
      .replace(/-----BEGIN PRIVATE KEY-----/, '')
      .replace(/-----END PRIVATE KEY-----/, '')
      .replace(/\n/g, '');

    const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8', binaryKey,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false, ['sign']
    );

    const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(signInput));
    const jwt = `${signInput}.${btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')}`;

    const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });
    const { access_token } = await tokenResp.json();

    const sheetId = env.GOOGLE_SHEET_ID || '1OjoWG_KuhnlP9EIb-tVzPNPw3tIf8dXTS_-OcH4kJLQ';
    const row = [submission.timestamp, submission.email, submission.name, submission.company,
                 submission.phone, submission.company_size, submission.use_case, submission.criteria, submission.status];

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${access_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] }),
      }
    );
  } catch (err) {
    console.error('Sheet append error:', err.message);
  }
}
