# LMS Guide Report Generator - Deployment Guide

## Architecture

```
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│  lms-guide.com  │────▶│  Cloudflare Worker   │────▶│  Report Gen     │
│  (lead form)    │     │  (capture + notify)  │     │  (Node.js)      │
└─────────────────┘     └──────────────────────┘     └─────────────────┘
                               │                              │
                               ▼                              ▼
                         ┌────────────┐               ┌─────────────────┐
                         │  KV Store  │               │  Gmail (SMTP)   │
                         └────────────┘               └─────────────────┘
```

## Deployment Options

### Option 1: Deploy on Same Server as OpenClaw

If OpenClaw is running on a persistent server, deploy the report generator there:

```bash
cd /path/to/lms-site/report-generator
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

Use PM2 to keep it running:
```bash
npm install -g pm2
pm2 start server.js --name "lms-report-gen"
pm2 save
pm2 startup
```

### Option 2: Deploy on Render/Railway/Fly.io

1. Push code to GitHub
2. Connect to Render/Railway/Fly.io
3. Set environment variables in dashboard
4. Deploy

### Option 3: Run as OpenClaw Sub-Agent (Recommended)

Create a long-running OpenClaw agent:

```json
{
  "name": "lms-report-generator",
  "command": "cd /Users/gregsmith/.openclaw/workspace-main/projects/lms-site/report-generator && npm install && npm start",
  "env": {
    "GMAIL_USER": "your-email@gmail.com",
    "GMAIL_APP_PASSWORD": "your-app-password",
    "PORT": "3001"
  }
}
```

## Environment Variables

### Required
- `GMAIL_USER` - Gmail address to send from
- `GMAIL_APP_PASSWORD` - Gmail app password (not your regular password)

### Optional
- `PORT` - Server port (default: 3001)

## Worker Configuration

Add these secrets to the Cloudflare Worker:

```bash
cd worker/
wrangler secret put REPORT_GENERATOR_URL
# Enter: https://your-server:3001/generate-report

wrangler secret put REPORT_GENERATOR_API_KEY
# Enter: a-secret-key-for-authentication (optional)
```

## Testing

1. Start the report generator:
```bash
cd report-generator
npm install
GMAIL_USER=your@gmail.com GMAIL_APP_PASSWORD=xxx npm start
```

2. Test the endpoint:
```bash
curl -X POST http://localhost:3001/generate-report \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "company_size": "10-50",
    "use_case": "Customer training",
    "criteria": "Ease of use"
  }'
```

3. Submit a test lead via the website form

## Security Considerations

1. **API Key**: Set `REPORT_GENERATOR_API_KEY` in both Worker and report generator
2. **Rate Limiting**: Consider adding rate limiting for the `/generate-report` endpoint
3. **Email Validation**: The worker already validates email format
4. **Gmail Security**: Use App Passwords, not your main Gmail password

## Monitoring

- Check Worker logs: `wrangler tail`
- Check report generator logs: `pm2 logs lms-report-gen`
- Monitor email delivery in Gmail sent folder

## Troubleshooting

### Emails not sending
- Verify Gmail App Password is correct
- Check "Less secure app access" is enabled (if not using 2FA)
- Check spam folders

### Worker not triggering reports
- Verify `REPORT_GENERATOR_URL` is set correctly
- Check Worker logs with `wrangler tail`
- Test the endpoint directly with curl

### Reports look wrong
- Check the template in `templates/report-template.js`
- Test with different use_case/criteria combinations
