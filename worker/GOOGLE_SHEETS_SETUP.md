# Google Sheets Integration Setup for LMS Guide Worker

## Service Account Creation (One-time Setup)

### Step 1: Create Service Account in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select or create a project (e.g., "lms-guide")
3. Navigate to **IAM & Admin** → **Service Accounts**
4. Click **+ CREATE SERVICE ACCOUNT**
5. Name: `lms-guide-sheets`
6. Description: `Service account for LMS Guide lead submissions to Google Sheets`
7. Click **CREATE AND CONTINUE**
8. Grant roles: **Editor** (or create a custom role with Sheets API access)
9. Click **DONE**

### Step 2: Create and Download JSON Key

1. Click on the service account you just created
2. Go to **KEYS** tab
3. Click **ADD KEY** → **Create new key**
4. Select **JSON** format
5. Click **CREATE** - this downloads the key file

### Step 3: Enable Google Sheets API

1. Go to **APIs & Services** → **Enabled APIs & services**
2. Click **+ ENABLE APIS AND SERVICES**
3. Search for "Google Sheets API"
4. Click **ENABLE**

### Step 4: Share the Sheet with Service Account

1. Open the Google Sheet: `LMS Guide Lead Submissions`
2. Click **Share** button
3. Add the service account email (looks like: `lms-guide-sheets@your-project.iam.gserviceaccount.com`)
4. Grant **Editor** access
5. Click **Send**

### Step 5: Add Secret to Cloudflare Worker

```bash
cd /Users/gregsmith/.openclaw/workspace-main/projects/lms-site/worker

# Copy the entire contents of the downloaded JSON key file
cat ~/Downloads/lms-guide-sheets-*.json | pbcopy

# Add as secret to the worker
wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON
# Paste the JSON when prompted
```

## Verification

Test the integration by submitting a lead form. Check:
1. Worker logs: `wrangler tail`
2. Google Sheet for new row
3. KV storage for the lead record

## Sheet Structure

The sheet should have these columns in order:
1. Timestamp
2. Email
3. Name
4. Company
5. Phone
6. Company Size
7. Use Case
8. Criteria
9. Status

## Troubleshooting

- **403 Error**: Service account doesn't have Sheet access - verify sharing
- **401 Error**: Invalid credentials - check JSON key format
- **API not enabled**: Enable Sheets API in Google Cloud Console
- **Missing rows**: Check worker logs with `wrangler tail`
