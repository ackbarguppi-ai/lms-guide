# Deploy lms-guide.com — Step by Step

Total time: ~5 minutes

---

## Step 1: Connect Cloudflare Pages to GitHub

1. Go to **https://dash.cloudflare.com**
2. In the left sidebar, click **"Workers & Pages"**
3. Click **"Create"** (blue button, top right)
4. Select the **"Pages"** tab
5. Click **"Connect to Git"**
6. If not already authorized, click **"Connect GitHub"** and grant Cloudflare access to the `ackbarguppi-ai` GitHub account
7. Select the **`lms-guide`** repository
8. Click **"Begin setup"**

## Step 2: Configure Build Settings

On the setup page, fill in:

| Setting | Value |
|---|---|
| **Project name** | `lms-guide` |
| **Production branch** | `main` |
| **Framework preset** | Select **Astro** from dropdown |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory (important!)** | `site` |

> ⚠️ **Don't miss "Root directory"** — click "Advanced" if it's hidden. Must be set to `site` because the Astro project lives in the `site/` subfolder.

Click **"Save and Deploy"**

Wait ~1-2 minutes for the first build. You'll see a green checkmark when done.

## Step 3: Add Custom Domain

1. After the first deploy succeeds, go to the project's **"Custom domains"** tab
2. Click **"Set up a custom domain"**
3. Type: **`lms-guide.com`**
4. Click **"Continue"**
5. Cloudflare will auto-add the DNS records (since the domain is already on Cloudflare)
6. Click **"Activate domain"**
7. Also add **`www.lms-guide.com`** → same steps

SSL certificate provisions automatically (may take a few minutes).

## Step 4: Verify It Works

- Visit **https://lms-guide.com** — should show the site
- Visit **https://www.lms-guide.com** — should redirect or show site
- Check a content page: **https://lms-guide.com/reviews/thinkific**

---

## Later: Google Search Console (optional, for SEO)

1. Go to **https://search.google.com/search-console**
2. Add property → **URL prefix** → `https://lms-guide.com`
3. Verify via DNS: Cloudflare dashboard → DNS → add the TXT record Google gives you
4. Once verified, go to **Sitemaps** → submit `https://lms-guide.com/sitemap.xml`

---

## That's it!

After this, every `git push` to `main` auto-deploys. I'll handle all code/content changes — you just review the live site.
