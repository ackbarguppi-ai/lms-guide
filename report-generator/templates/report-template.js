function generateReportHTML(data) {
  const { name, company, company_size, use_case, criteria, recommendations, generated_at } = data;
  
  const dateFormatted = new Date(generated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const useCaseDisplay = use_case || 'Not specified';
  const criteriaDisplay = criteria || 'Not specified';
  const companySizeDisplay = company_size || 'Not specified';

  const recommendationsHTML = recommendations.map((rec, index) => `
    <div class="recommendation ${index === 0 ? 'primary' : 'secondary'}">
      <div class="rec-header">
        <span class="rec-number">${index + 1}</span>
        <div class="rec-title">
          <h3>${rec.name}</h3>
          <p class="tagline">${rec.tagline}</p>
        </div>
      </div>
      
      <div class="rec-section">
        <h4>Why it fits your needs</h4>
        <ul>
          ${rec.reasoning.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div class="rec-section">
        <h4>Pricing</h4>
        <p class="pricing-main">${rec.pricing}</p>
        ${rec.pricing_details ? `
          <div class="pricing-details">
            ${Object.entries(rec.pricing_details).map(([tier, price]) => `
              <span class="price-tier"><strong>${tier}:</strong> ${price}</span>
            `).join(' • ')}
          </div>
        ` : ''}
      </div>

      <div class="rec-section two-col">
        <div class="pros">
          <h4>✓ Pros</h4>
          <ul>
            ${rec.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="cons">
          <h4>○ Considerations</h4>
          <ul>
            ${rec.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <a href="${rec.website}" class="cta-button" target="_blank">Visit ${rec.name} →</a>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your LMS Recommendations</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
    
    .container {
      max-width: 680px;
      margin: 0 auto;
      background: #ffffff;
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    
    .header h1 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .header p {
      opacity: 0.9;
      font-size: 16px;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .intro {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #e5e5e5;
    }
    
    .intro h2 {
      font-size: 20px;
      color: #444;
      margin-bottom: 15px;
    }
    
    .intro p {
      color: #666;
      margin-bottom: 10px;
    }
    
    .summary-box {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .summary-box h3 {
      font-size: 14px;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 15px;
      letter-spacing: 0.5px;
    }
    
    .summary-item {
      display: flex;
      margin-bottom: 10px;
    }
    
    .summary-label {
      font-weight: 600;
      color: #555;
      width: 120px;
      flex-shrink: 0;
    }
    
    .summary-value {
      color: #333;
    }
    
    .recommendation {
      margin-bottom: 40px;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      overflow: hidden;
    }
    
    .recommendation.primary {
      border-color: #667eea;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
    }
    
    .rec-header {
      background: #f8f9fa;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .recommendation.primary .rec-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .rec-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #667eea;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
    
    .recommendation.primary .rec-number {
      background: white;
      color: #667eea;
    }
    
    .rec-title h3 {
      font-size: 22px;
      margin-bottom: 5px;
    }
    
    .tagline {
      font-size: 14px;
      opacity: 0.8;
      margin: 0;
    }
    
    .rec-section {
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
    
    .rec-section:last-child {
      border-bottom: none;
    }
    
    .rec-section h4 {
      font-size: 14px;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    
    .rec-section ul {
      list-style: none;
      padding: 0;
    }
    
    .rec-section li {
      padding: 6px 0;
      padding-left: 20px;
      position: relative;
    }
    
    .rec-section li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
    }
    
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    @media (max-width: 600px) {
      .two-col {
        grid-template-columns: 1fr;
      }
    }
    
    .pros h4 {
      color: #22c55e;
    }
    
    .cons h4 {
      color: #f59e0b;
    }
    
    .pricing-main {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    
    .pricing-details {
      margin-top: 10px;
      font-size: 13px;
      color: #666;
    }
    
    .price-tier {
      display: inline-block;
      margin-right: 10px;
    }
    
    .cta-button {
      display: block;
      background: #667eea;
      color: white;
      text-align: center;
      padding: 15px 20px;
      text-decoration: none;
      font-weight: 600;
      margin: 20px;
      border-radius: 6px;
      transition: background 0.2s;
    }
    
    .cta-button:hover {
      background: #5a67d8;
    }
    
    .next-steps {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 25px;
      margin-top: 30px;
    }
    
    .next-steps h3 {
      color: #166534;
      margin-bottom: 15px;
    }
    
    .next-steps ol {
      padding-left: 20px;
    }
    
    .next-steps li {
      margin-bottom: 10px;
      color: #333;
    }
    
    .footer {
      text-align: center;
      padding: 30px;
      background: #f8f9fa;
      color: #888;
      font-size: 13px;
    }
    
    .footer a {
      color: #667eea;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Personalized LMS Recommendations</h1>
      <p>Generated on ${dateFormatted}</p>
    </div>
    
    <div class="content">
      <div class="intro">
        <h2>Hi ${name},</h2>
        <p>Thanks for using LMS Guide to research learning management systems. Based on what you shared with us, we've analyzed the market and selected the platforms that best match your specific needs.</p>
        
        <div class="summary-box">
          <h3>Your Requirements</h3>
          <div class="summary-item">
            <span class="summary-label">Use Case:</span>
            <span class="summary-value">${useCaseDisplay}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Priorities:</span>
            <span class="summary-value">${criteriaDisplay}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Company Size:</span>
            <span class="summary-value">${companySizeDisplay}</span>
          </div>
        </div>
      </div>

      <h2 style="margin-bottom: 20px; color: #444;">Recommended Platforms</h2>
      ${recommendationsHTML}

      <div class="next-steps">
        <h3>Recommended Next Steps</h3>
        <ol>
          <li><strong>Review the recommendations</strong> above and visit the platform websites to explore their features.</li>
          <li><strong>Start free trials</strong> — most platforms offer free trials or free plans to test.</li>
          <li><strong>Book a demo</strong> if you're considering an enterprise option — this helps you evaluate properly.</li>
          <li><strong>Need help?</strong> Reply to this email with questions and we'll do our best to assist.</li>
        </ol>
      </div>
    </div>

    <div class="footer">
      <p>This report was generated by <a href="https://lms-guide.com">LMS Guide</a></p>
      <p style="margin-top: 10px;">You're receiving this because you requested LMS recommendations on our website.</p>
    </div>
  </div>
</body>
</html>
  `;
}

module.exports = {
  generateReportHTML,
};
