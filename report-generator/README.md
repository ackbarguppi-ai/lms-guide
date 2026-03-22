# LMS Guide Report Generator

Automated report generation service for LMS Guide leads. Generates personalized LMS recommendation reports and emails them to prospects.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set environment variables:
```bash
export GMAIL_USER=your-email@gmail.com
export GMAIL_APP_PASSWORD=your-app-password
export PORT=3001  # optional, defaults to 3001
```

3. Start the server:
```bash
npm start
```

## API

### POST /generate-report

Generates and emails a personalized LMS report.

Request body:
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Acme Inc",
  "company_size": "10-50",
  "use_case": "Customer training",
  "criteria": "Ease of use",
  "lead_id": "optional-lead-id"
}
```

Response:
```json
{
  "success": true,
  "message": "Report generated and sent",
  "lead_id": "optional-lead-id",
  "email": "user@example.com"
}
```

## Gmail App Password

To use Gmail SMTP, you need an App Password:
1. Go to Google Account settings
2. Security → 2-Step Verification (must be enabled)
3. Security → App passwords
4. Generate new app password for "Mail"
5. Use that password as GMAIL_APP_PASSWORD

## Integration with Cloudflare Worker

The Cloudflare Worker should call this service when a new lead is submitted:

```javascript
await fetch(REPORT_GENERATOR_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(leadData),
});
```
