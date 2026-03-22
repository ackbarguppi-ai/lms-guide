# LMS Guide Report Generation System

## Overview

Automated system that generates personalized LMS recommendation reports and emails them to leads who submit the form on lms-guide.com.

## Architecture

```
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│  lms-guide.com  │────▶│  Cloudflare Worker   │────▶│  Report Gen     │
│  (lead form)    │     │  (capture + trigger) │     │  (Node.js)      │
└─────────────────┘     └──────────────────────┘     └─────────────────┘
                               │                              │
                               ▼                              ▼
                         ┌────────────┐               ┌─────────────────┐
                         │  KV Store  │               │  Gmail (SMTP)   │
                         └────────────┘               └─────────────────┘
```

## Files Created

### Worker (Modified)
- `worker/index.js` - Updated to trigger report generation via webhook
- `worker/wrangler.toml` - Added REPORT_GENERATOR_URL and REPORT_GENERATOR_API_KEY env vars

### Report Generator (New)
- `report-generator/server.js` - Express server with /generate-report endpoint
- `report-generator/recommendations.js` - LMS database and recommendation engine
- `report-generator/templates/report-template.js` - HTML email template
- `report-generator/package.json` - Dependencies
- `report-generator/README.md` - Usage docs
- `report-generator/DEPLOYMENT.md` - Deployment options
- `report-generator/.env.example` - Environment variable template
- `report-generator/test-report.js` - Test script
- `report-generator/start.sh` - Startup script

## Setup Instructions

### 1. Deploy Report Generator

Option A: Run as OpenClaw sub-agent (simplest):
```bash
cd /Users/gregsmith/.openclaw/workspace-main/projects/lms-site/report-generator
npm install
export GMAIL_USER=your-email@gmail.com
export GMAIL_APP_PASSWORD=your-app-password
export REPORT_GENERATOR_API_KEY=some-secret-key
./start.sh
```

Option B: Use PM2 for production:
```bash
cd report-generator
npm install
pm2 start server.js --name "lms-report-gen"
pm2 save
```

### 2. Configure Cloudflare Worker

```bash
cd worker/

# Set the report generator URL
wrangler secret put REPORT_GENERATOR_URL
# Enter: http://localhost:3001/generate-report (or your deployed URL)

# Set API key for authentication
wrangler secret put REPORT_GENERATOR_API_KEY
# Enter: same key used above
```

### 3. Get Gmail App Password

1. Enable 2-Factor Authentication on Gmail account
2. Go to Google Account → Security → App passwords
3. Generate new app password for "Mail"
4. Use that (not your regular password) for GMAIL_APP_PASSWORD

### 4. Test

```bash
# Test the report generator directly
cd report-generator
node test-report.js your-test-email@example.com

# Or submit the form on lms-guide.com
```

## Report Content

Reports include:
- Summary of the lead's requirements (use case, priorities, company size)
- 2-3 personalized LMS recommendations with:
  - Platform overview and tagline
  - Why it fits their specific needs
  - Pricing information
  - Pros and considerations
  - Direct link to platform
- Next steps for evaluation

## Recommendation Logic

The system considers:
- **Use case**: Courses/selling vs compliance/training vs enterprise
- **Company size**: Solo/small vs medium vs large/enterprise
- **Criteria**: Price, ease of use, features, scalability

Platforms in database:
- Thinkific (courses/academies)
- Docebo (enterprise/compliance)
- Teachable (simple courses)
- LearnWorlds (interactive features)
- TalentLMS (affordable training)
- Absorb (enterprise design)

## Design Decisions

1. **HTML emails with inlined CSS** - Better compatibility than PDFs, faster to generate
2. **Node.js service vs Worker** - Allows richer templates, better email libraries
3. **Thinkific included but not forced** - Genuine recommendations based on fit
4. **Editorial tone** - Independent, helpful recommendations

## Questions for Greg

1. Should Thinkific always be one of the recommendations, or genuinely unbiased?
2. Tone check: Is the current template too promotional or appropriately editorial?
3. Should we add a delay (e.g., 5-10 minutes) before sending so it doesn't feel too automated?
4. Do you want to review/edit reports before they send (queue for approval)?
