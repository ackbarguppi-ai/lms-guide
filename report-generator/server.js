const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const juice = require('juice');
const { generateReportHTML } = require('./templates/report-template');
const { generateRecommendations } = require('./recommendations');

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.REPORT_GENERATOR_API_KEY;

app.use(cors());
app.use(express.json());

// API Key authentication middleware (if key is configured)
const requireAuth = (req, res, next) => {
  if (!API_KEY) return next();
  
  const providedKey = req.headers['x-api-key'];
  if (providedKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Gmail transporter setup
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Generate and email report
app.post('/generate-report', requireAuth, async (req, res) => {
  try {
    const { email, name, company, company_size, use_case, criteria, lead_id } = req.body;

    if (!email || !use_case) {
      return res.status(400).json({ error: 'Email and use_case are required' });
    }

    console.log(`[${new Date().toISOString()}] Generating report for ${email}`);

    // Generate recommendations based on inputs
    const recommendations = generateRecommendations({
      use_case,
      criteria,
      company_size,
    });

    // Generate HTML report
    const reportData = {
      name: name || 'there',
      company,
      company_size,
      use_case,
      criteria,
      recommendations,
      generated_at: new Date().toISOString(),
    };

    const htmlContent = generateReportHTML(reportData);
    
    // Inline CSS for email compatibility
    const inlinedHTML = juice(htmlContent);

    // Send email
    const transporter = createTransporter();
    const mailOptions = {
      from: `"LMS Guide" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Personalized LMS Recommendations',
      html: inlinedHTML,
      text: generatePlainText(reportData),
    };

    await transporter.sendMail(mailOptions);

    console.log(`[${new Date().toISOString()}] Report sent successfully to ${email}`);

    res.json({
      success: true,
      message: 'Report generated and sent',
      lead_id,
      email,
    });

  } catch (error) {
    console.error('Report generation error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Plain text fallback
function generatePlainText(data) {
  const lines = [
    `Hi ${data.name},`,
    '',
    'Thanks for using LMS Guide to research learning management systems.',
    '',
    `Based on your use case (${data.use_case}) and priorities, here are your recommendations:`,
    '',
    ...data.recommendations.flatMap(r => [
      `${r.name}`,
      r.tagline,
      `Best for: ${r.best_for}`,
      `Starting price: ${r.pricing}`,
      `Why it fits: ${r.reasoning}`,
      '',
    ]),
    'Next Steps:',
    '1. Review the recommendations above',
    '2. Visit the platforms to explore their free trials',
    '3. Book a call if you need help deciding',
    '',
    'Thanks,',
    'The LMS Guide Team',
  ];

  return lines.join('\n');
}

app.listen(PORT, () => {
  console.log(`Report generator running on port ${PORT}`);
});

module.exports = { app };
