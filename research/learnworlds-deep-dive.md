# LearnWorlds Deep Dive — Competitor Research

**Last updated:** 2026-03-21
**Research sources:** learnworlds.com (homepage, features, pricing, AI, security, integrations, customer training, blog)

---

## 1. What LearnWorlds Is & How It Positions Itself

LearnWorlds is a cloud-based LMS and learning commerce platform founded in Greece. It positions itself as **"The #1 AI-powered LMS built for course creators"** — emphasizing the intersection of course creation, website building, and commerce in a single platform.

**Key positioning claims:**
- All-in-one platform: create, market, sell, and deliver online courses
- AI-native — AI tools available across all plans
- "Think of LearnWorlds as a Shopify [for courses] with approachable customer support" (customer testimonial prominently featured)
- 12,000+ customers worldwide
- Strong emphasis on **interactive video** as a differentiator
- Dual audience: course creators AND businesses (customer training, employee training, enterprise LMS)

**Target segments (from their navigation/solutions pages):**
- Course Creators / Educators / Coaches
- Customer Training (B2B SaaS companies)
- Enterprise LMS / Employee Training
- Non-profits (NGOs)
- Industry verticals: Fitness, Finance, Health, Coaching

**Source:** [Homepage](https://www.learnworlds.com/), [Solutions](https://www.learnworlds.com/solutions/customer-training-lms/)

---

## 2. Core Capabilities

### Course Creation & Content
- **Content types:** Video lessons, interactive ebooks, SCORM packages, live sessions (1:1 and group), assessments, surveys, downloadable resources
- **Interactive video (iVideo):** Flagship differentiator — auto-extracted transcripts, in-video quizzes, tables of contents, buttons, pointers, watermarks. AI can generate interactive elements from uploaded video
- **Course structures:** Free, paid, private, drip-fed, curated pathways, learning programs
- **Assessment builder:** Multiple choice, text, video, file assignments; question banks; graded exams and self-assessments; AI-generated assessments
- **Certificates:** Custom certificate builder; integrations with Accredible and Credly for digital credentials
- **SCORM support:** Import SCORM/HTML5 packages with persistence and grade tracking (20 on Pro Trainer, unlimited on Learning Center+)
- **LTI 1.3 support:** Available on Learning Center plan and above
- **Content sync:** Sync content across multiple courses (Learning Center+)

### Commerce & Monetization
- **Products:** Individual courses, bundles, subscriptions, memberships
- **Payment gateways:** Stripe, PayPal, Apple Pay, Google Pay, Klarna, Afterpay, Sofort, iDEAL, Bancontact, Giropay, PagSeguro, Przelewy24
- **Sales tools:** Upsell/cross-sell, 1-click funnels, customizable checkout, promotions/coupons, installments
- **Affiliate management:** Built-in affiliate program (Pro Trainer+), advanced affiliate marketing (Learning Center+)
- **Shopify integration** for selling through existing stores
- **Bulk licenses & gifts** (Learning Center+)
- **Custom orders** (Learning Center+)

### Website & Branding
- **Website builder:** Drag-and-drop, no-code; 50+ industry-specific designer templates
- **White-label:** Full white-label capability — custom domain, remove LearnWorlds branding (Learning Center+), branded course player, emails, certificates
- **Pages:** 3 pages on Starter, unlimited on Pro Trainer+; page funnels (15 on Pro, unlimited on Learning Center)
- **Pop-up builder** (Pro Trainer+)
- **Multi-language site** via Weglot integration
- **Custom CSS/JS** capabilities

### Mobile App
- **White-label mobile app builder** — iOS & Android native apps
- No coding required, visual editor
- In-app purchases, push notifications
- 100% white-label branding

### Community & Social
- **Built-in communities** — unlimited across all plans
- Social-first training school concept
- Community posts and discussions
- AI-assisted interactions in video comments

### Analytics & Reporting
- Basic: Google Analytics tracking (all plans)
- **User progress reports** (Pro Trainer+)
- **Training matrix** (Pro Trainer+)
- **Course insights** — detailed content consumption analytics (Learning Center+)
- **Scheduled reports** and **report templates** (Learning Center+)
- **AI Insights** — natural language analytics Q&A (ask questions about your data)

**Source:** [Features](https://www.learnworlds.com/features/), [Homepage](https://www.learnworlds.com/), [Pricing](https://www.learnworlds.com/pricing/)

---

## 3. AI Features

LearnWorlds has made AI a central part of its positioning (branding itself as "#1 AI-powered LMS"). AI is included across all plans with monthly prompt allocations.

### AI Capabilities (Specific):

| Feature | Description | Maturity |
|---------|-------------|----------|
| **AI Course Planner** | Generate full course outlines from a topic prompt — modules, lessons, suggested activities | Shipping, core feature |
| **AI Ebook Writer & Editor** | Generate and refine ebooks from raw ideas; specify style and tone | Shipping |
| **AI Assessment Designer** | Import learning content → auto-generate quizzes, exams, certification assessments; choose topic, type, number of questions | Shipping |
| **AI Feedback Generator** | Evaluate learner responses with AI; interactive AI chat for guidance, resource suggestions | Shipping |
| **AI Insights (Analytics Q&A)** | Natural language queries against all school data; conversational follow-ups | Shipping |
| **AI for Interactive Video** | Auto-generate subtitles, translations, video summaries, MCQs, open-ended questions from uploaded video | Shipping |
| **AI Copy Assistant** | Rewrite, shorten, expand, summarize, change tone for emails, community posts, website pages, marketing content | Shipping |
| **AI Translations** | Translate course content (Pro Trainer+) | Shipping |
| **AI-Generated Subtitles** | Auto-generate subtitles for video content (Learning Center+) | Shipping |

### AI Prompt Allocations by Plan:
- **Starter:** 300 prompts/month
- **Pro Trainer:** 500 prompts/month
- **Learning Center:** 1,000 prompts/month
- **BYO Key option:** Connect your own OpenAI API key for unlimited prompts

### Assessment:
LearnWorlds' AI is **broadly applied but relatively shallow** — it's primarily GPT-wrapper functionality for content generation, copy editing, and assessment creation. The AI Insights feature (analytics Q&A) is more novel. There's no adaptive learning AI, no AI-driven personalized learning paths, and no AI tutoring/chatbot for learners (beyond feedback on assessments). The AI does NOT generate video footage — only interactive overlays on existing video.

**Content ownership:** Users retain 100% copyright on AI-generated content.

**Source:** [AI Features](https://www.learnworlds.com/product/features/ai/)

---

## 4. Security & Compliance

### Infrastructure:
- **Hosting:** Google Cloud Platform (GCP) — Google Cloud partner
- **Data centers:** East USA (South Carolina & Virginia), Central EU (Frankfurt, Germany), South America (São Paulo), Southeast Asia (Singapore)
- **Isolation:** Each school gets its own isolated database
- **Backups:** Mirrored and backed up offsite across multiple facilities; daily database backups
- **Uptime:** 99.95% SLA available on High Volume & Corporate plan

### Application Security:
- **Encryption:** HTTPS everywhere, TLS 1.2 exclusively, free SSL certificate for all schools
- **Password security:** Salted and hashed, never stored as plain text; employees cannot view/change passwords
- **XSS protection:** All user inputs sanitized
- **Vulnerability scanning:** Automated monitoring, regular security patching, in-house security expert, regular penetration testing

### Compliance:
- **GDPR compliant** — Data Processing Agreements available
- **PCI DSS compliant** (via Stripe/PayPal — LearnWorlds does not store credit card data)
- **SOC 2/3 and ISO 27001** — via Google Cloud Platform infrastructure
- **No explicit SOC 2 certification for LearnWorlds itself** — they inherit GCP's certifications
- **No mention of HIPAA, FedRAMP, or CCPA** specifically

### Notable gaps:
- No LearnWorlds-specific SOC 2 Type II audit mentioned
- No explicit HIPAA compliance (relevant for health education use case)
- Security page is relatively light compared to enterprise-grade competitors
- Custom SLA and DPA only available on High Volume & Corporate (enterprise) plan

**Source:** [Data Security](https://www.learnworlds.com/data-security/)

---

## 5. API & Integrations

### API:
- **REST API** available on **Learning Center plan and above** ($249-299/mo)
- **Webhooks** available on Learning Center+
- Not available on Starter or Pro Trainer plans
- API described as "Extended API" — enables custom workflows, automation, data flow

### SSO:
- **3 SSO connections** on Learning Center
- **8 SSO connections** on High Volume & Corporate
- Supports **SAML 2.0**, **SSO**, and **OpenID Connect**
- Compatible with Azure AD, Okta, Google identity providers

### Native Integrations (50+):

**Payment:** Stripe, PayPal, Apple Pay, Google Pay, Klarna, Afterpay, Shopify, and many regional gateways

**Email Marketing:** Mailchimp, MailerLite, GetResponse, Kit (ConvertKit), Moosend, Constant Contact, ActiveCampaign, AWeber

**CRM:** HubSpot (native integration on Learning Center+), Salesforce (via Zapier/API only)

**Automation:** Zapier (advanced on Pro Trainer+), Make, Pabbly, Integrately

**Live Sessions:** Zoom, MS Teams, WebEx (native integrations)

**Video:** Vimeo, Wistia

**Customer Service:** Freshchat, Olark, Tawk.to

**Analytics:** Google Analytics, Google Tag Manager, Facebook Pixel

**Digital Credentials:** Accredible, Credly

**Affiliates:** ReferralCandy, Refersion

**Tax/Accounting:** Quaderno

### Integration Assessment:
- Good breadth of marketing/email integrations
- HubSpot is the only native CRM — Salesforce requires Zapier
- **API gated behind $249+/mo plan** is a significant limitation for developers
- No native Slack integration mentioned
- Zapier fills many gaps but adds cost and complexity

**Source:** [Integrations](https://www.learnworlds.com/product/features/integrations/), [Pricing](https://www.learnworlds.com/pricing/)

---

## 6. Pricing

All prices in USD. Annual billing saves ~20%. No transaction fees on Pro Trainer and above. 30-day free trial on all plans.

| Plan | Monthly | Annual (per mo) | Transaction Fee | Key Limits |
|------|---------|-----------------|-----------------|------------|
| **Starter** | $29/mo | $24/mo | **$5 per course enrollment** | 1 admin, 3-page website, paid courses only (no free courses), no SCORM, basic integrations, 300 AI prompts |
| **Pro Trainer** | $99/mo | $79/mo | None | 5 admins, unlimited pages, 20 SCORMs, 15 page funnels, subscriptions/memberships, affiliate mgmt, 500 AI prompts |
| **Learning Center** ⭐ | $299/mo | $249/mo | None | 25 admins, unlimited SCORM, API & webhooks, 3 SSO, automations, custom user roles, AI subtitles, interactive video with AI, remove branding, 1,000 AI prompts |
| **High Volume & Corporate** | Custom | Custom | None | Custom admins, 8 SSO, 99.95% uptime SLA, premium cloud servers, multiple daily backups, dedicated success manager, custom DPA, phone support |

### Add-on: LearnWorlds Scale
Premium support package with extra CSM sessions, annual website review, free sandbox account, exclusive discounts, more collaborators.

### Notable Pricing Observations:
- **Starter plan charges $5 per enrollment** — effectively a per-student fee that makes it expensive at scale
- **No free courses allowed on Starter** — unusual restriction
- **API access requires Learning Center ($249-299/mo)** — high barrier for developer-led buyers
- **White-label (remove branding) requires Learning Center** — $249-299/mo minimum
- **SSO requires Learning Center** — enterprise buyers forced to $249+/mo
- The gap between Pro Trainer ($79-99) and Learning Center ($249-299) is large — many features are gated behind this jump

**Source:** [Pricing](https://www.learnworlds.com/pricing/)

---

## 7. Key Strengths & Weaknesses

### Strengths:
1. **Interactive video is genuinely differentiated** — auto-generated transcripts, in-video quizzes, AI overlays. Most competitors don't match this depth
2. **All-in-one platform depth** — website builder, mobile app builder, course creator, commerce, community all under one roof
3. **White-label mobile app** — few competitors offer native branded iOS/Android apps
4. **AI breadth across all plans** — even Starter gets AI, and you can BYO OpenAI key
5. **Strong customer training / B2B positioning** — case studies with Lokalise, Blip, Workable, Wagamama demonstrate enterprise use
6. **50+ website templates** — industry-specific, designer-quality
7. **Broad payment gateway support** — especially strong in European/global payment methods
8. **30-day free trial** (vs. typical 14-day)
9. **Active product development** — "Evolution 4x" event promising a year's worth of releases in 8 weeks (March-April 2026)
10. **Google Cloud infrastructure** with regional data centers

### Weaknesses:
1. **Pricing jumps are steep** — the $99→$299 gap gates many essential features (API, SSO, white-label, automations)
2. **$5 per enrollment on Starter** is a hidden cost trap
3. **No free courses on Starter** — artificially restricts lead generation strategies
4. **API only on $249+/mo plans** — locks out developer-first buyers and many SMBs
5. **No native Salesforce integration** — requires Zapier, which is a dealbreaker for many B2B companies
6. **Security posture is mid-tier** — no proprietary SOC 2 certification, no HIPAA, no FedRAMP
7. **AI is broad but shallow** — mostly content generation wrappers, no adaptive learning or AI tutoring
8. **Smaller ecosystem** than Thinkific or Teachable — fewer third-party apps, developers, themes
9. **Based in Greece** — may cause hesitation for North American enterprise buyers (though GCP infrastructure is global)
10. **Community features are basic** compared to dedicated community platforms
11. **No native course marketplace/discovery** — unlike Udemy or Skillshare, there's no built-in audience

---

## 8. Best-Fit Buyer Profiles

### Ideal for:
- **Solo course creators and coaches** who want beautiful, branded sites without hiring developers (Pro Trainer sweet spot)
- **B2B SaaS companies** building customer education academies (Blip reduced support tickets 15%, doubled onboarding capacity)
- **Fitness, health, coaching professionals** who rely heavily on video content and want interactive video features
- **European businesses** that need GDPR compliance, EU data centers, and European payment gateways
- **Organizations wanting branded mobile apps** without developer resources
- **Creators who want AI-assisted course development** but don't need adaptive/personalized learning AI

### Not ideal for:
- **Developer-heavy teams** who need API access but can't justify $249+/mo
- **Large enterprises requiring SOC 2, HIPAA, or FedRAMP** compliance
- **Businesses deeply embedded in Salesforce** ecosystems
- **Pure marketplace sellers** looking for built-in audience/discovery
- **Budget-conscious creators** at high volume (Starter's $5/enrollment adds up fast)
- **Organizations that need advanced adaptive learning or AI tutoring** capabilities

---

## 9. Comparison: LearnWorlds vs. Thinkific

| Dimension | LearnWorlds | Thinkific |
|-----------|-------------|-----------|
| **Positioning** | "#1 AI-powered LMS" — course creator + B2B training | "Platform to create, market, sell, and deliver courses" — creator-first, expanding to B2B |
| **Pricing entry** | $29/mo (with $5/enrollment fee) | Free plan available; Basic at $49/mo (no transaction fees) |
| **Mid-tier** | Pro Trainer $99/mo | Start at $99/mo |
| **Premium** | Learning Center $299/mo | Grow at $199/mo |
| **Enterprise** | Custom pricing | Thinkific Plus (custom) |
| **Interactive video** | ⭐ Major differentiator — in-video quizzes, AI overlays, auto-transcripts | Basic video hosting, no native interactive video |
| **AI features** | Broad — course planner, ebook writer, assessment generator, AI insights, copy assistant | AI site builder, AI content assistant (narrower scope) |
| **Mobile app** | White-label native iOS/Android app builder | Branded mobile app via Thinkific app (less customizable) |
| **Website builder** | 50+ templates, full drag-and-drop | Site builder with themes, drag-and-drop |
| **Community** | Built-in communities (all plans) | Thinkific Communities (add-on / higher plans) |
| **SCORM** | Supported (Pro Trainer: 20, Learning Center: unlimited) | Supported on Plus only |
| **API** | Learning Center ($249+/mo) and above | Available on lower tiers |
| **SSO** | Learning Center and above (3-8 connections) | Thinkific Plus only |
| **White-label** | Full white-label on Learning Center+ | White-label on Plus only |
| **Payment gateways** | Stripe, PayPal + many European/global gateways | Stripe, PayPal (fewer options) |
| **Marketplace** | No built-in marketplace | No built-in marketplace (though historically had one) |
| **Customer training / B2B** | Strong positioning with case studies | Growing via Thinkific Plus but less established |
| **Data centers** | GCP — US, EU, South America, Southeast Asia | AWS — primarily North America |
| **Security certifications** | GDPR, PCI (via partners), GCP's SOC2/ISO27001 | SOC 2 Type II (proprietary), GDPR |
| **Company HQ** | Greece (Heraklion, Crete) | Vancouver, BC, Canada |

### Where LearnWorlds Wins:
1. **Interactive video** — genuinely unique; auto-generated transcripts, in-video quizzes, AI overlays
2. **AI feature breadth** — more AI tools across more surfaces (assessment generation, analytics Q&A, feedback)
3. **White-label mobile app** — more customizable than Thinkific's mobile offering
4. **European/global payment gateways** — Klarna, Afterpay, iDEAL, Bancontact, etc.
5. **Built-in community on all plans** — Thinkific gates this higher
6. **SCORM on lower tiers** — Thinkific restricts to Plus
7. **Customer training positioning** — more mature B2B case studies and marketing

### Where Thinkific Wins:
1. **Free plan** — lower barrier to entry; no per-enrollment fees
2. **API on lower tiers** — more accessible for developers
3. **SOC 2 Type II certification** (proprietary) — stronger security story for enterprise
4. **North American brand recognition** — HQ in Vancouver, larger ecosystem
5. **Simpler pricing** — no hidden per-enrollment fees, clearer tier progression
6. **Larger creator community and ecosystem** — more third-party integrations, apps, developers
7. **Thinkific Plus** for enterprise — more established in North American enterprise market
8. **Branded checkout / commerce** — generally considered more polished for creator-focused commerce
9. **App store / extensibility** — Thinkific App Store for third-party extensions

### Where They're Similar:
- Both offer drag-and-drop course builders
- Both support subscriptions, bundles, memberships
- Both have affiliate management
- Both offer certificates
- Both support Zapier/Make for automation
- Both have email marketing integrations
- Both offer custom domains and branding
- Both provide analytics and reporting dashboards
- Both are investing in AI (though LearnWorlds is further along)
- Neither has a native marketplace for course discovery

---

## Appendix: Source URLs

| Page | URL |
|------|-----|
| Homepage | https://www.learnworlds.com/ |
| Features | https://www.learnworlds.com/features/ |
| Pricing | https://www.learnworlds.com/pricing/ |
| AI Features | https://www.learnworlds.com/product/features/ai/ |
| Data Security | https://www.learnworlds.com/data-security/ |
| Integrations | https://www.learnworlds.com/product/features/integrations/ |
| Customer Training LMS | https://www.learnworlds.com/solutions/customer-training-lms/ |
| Blog | https://www.learnworlds.com/blog/ |
| Plans Comparison | https://www.learnworlds.com/plans/ |
| Product Updates | https://www.learnworlds.com/product/updates/ |
