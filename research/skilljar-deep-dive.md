# Skilljar — Deep Dive Research

> **Last updated:** 2026-03-22
> **Purpose:** Competitive intelligence for lms-guide.com content strategy

---

## 1. What Skilljar Is & How It Positions Itself

### Company Overview
Skilljar is a **customer education platform** purpose-built for external training—specifically designed to help companies educate their customers, partners, and prospects. Founded in 2013 and headquartered in Seattle, WA, Skilljar has established itself as a leader in the "extended enterprise" LMS category.

**Major Milestone:** In April 2025, **Gainsight acquired Skilljar**, combining it with their existing customer education capabilities (formerly Northpass) to create a unified platform under "Skilljar by Gainsight." This acquisition positions Skilljar as part of a broader Customer Success ecosystem, emphasizing AI-powered, agentic learning experiences.

### Market Positioning
Skilljar positions itself as **"The External LMS"**—explicitly differentiating from internal/employee-focused LMS platforms like Cornerstone, SAP Litmos, or Workday Learning. Their core value proposition centers on:

- **Customer retention through education:** "A trained customer is a retained customer"
- **Product adoption at scale:** Reducing time-to-value for SaaS products
- **Revenue impact:** Connecting training metrics to business outcomes (retention, expansion, support deflection)

### Key Customers
Skilljar serves **400+ customers** including notable enterprise brands:
- **Zendesk** — 58% YoY learner growth after switching to Skilljar
- **Paycor** — Reduced onboarding time by 75%
- **Shopify** — Scaled partner education globally
- **LinkedIn, Verizon, Cisco, Okta, Automox, Zywave, Procore**

### Target Market Segment
- **Primary:** Mid-market to Enterprise (51-1000+ employees)
- **Secondary:** Growth-stage SaaS companies building their first customer academy
- **Industries:** Computer Software (45.7%), IT Services (19%), with strong presence in cybersecurity, HR tech, and customer service software

**Source:** https://www.skilljar.com/, https://gainsight.com/press/gainsight-acquires-skilljar-enabling-learning-everywhere

---

## 2. Core Capabilities

### Customer Education & Onboarding
- **Academy Sites:** Branded, customizable learning portals with custom themes, low-code page builder, and domain customization
- **On-Demand Learning:** Self-paced courses with video, PDF, audio, SCORM, and embedded content support
- **Instructor-Led Training (ILT):** Native Zoom and Webex integration for virtual training with automated registration and calendar sync
- **Learning Paths:** Structured progression through courses (though reviewers note these are more like "blocks of courses" than dynamic paths)
- **Mobile-Ready:** Fully responsive design with offline content download and sync capabilities

### Certifications & Credentials
- **Certificate Generation:** Auto-populated certificates with QR codes for verification
- **Certification Programs:** Multi-level certifications with expiration/renewal capabilities
- **Badging:** LinkedIn-shareable badges via Credly integration
- **Proctored Exams:** Integration with Examity and Caveon for secure testing

### Analytics & Reporting
- **Native Analytics:** Pre-built dashboards for enrollments, completions, engagement by course/learner
- **Strategic Insights:** Benchmarking against similar Skilljar customers (completion rates, engagement)
- **Custom Reports:** Scheduled and ad-hoc reporting with CSV export
- **Data Connector Add-on:** Real-time PostgreSQL database access for BI tools ($25k starting price)

### Integrations Ecosystem
Skilljar emphasizes deep CRM and CS platform integration—**80+ integrations** including:

| Category | Key Integrations |
|----------|------------------|
| CRM | Salesforce, HubSpot |
| Customer Success | Gainsight, Totango |
| Marketing | Marketo, Eloqua, Intercom |
| Video | Zoom, Vimeo, Wistia, Brightcove |
| SSO/OAuth | Okta, OneLogin, Azure AD, Google |
| Payments | Stripe, PayPal, CyberSource |
| Analytics | Google Analytics, Tableau, Hotjar |
| Automation | Zapier, Workato |

**Salesforce Integration:** Particularly deep—training data flows into account records, enabling training-influenced pipeline and health scoring.

### Multi-Tenancy & Content Syndication
- **Multiple Academy Sites:** 1-3 branded academy sites depending on plan (Essentials/Professional/Enterprise)
- **Content Syndication Add-on ($10k):** Embed Skilljar courses into other LMS platforms—allows customers to consume training in their existing learning environment
- **External Management:** Allow partners/resellers to manage learners without dashboard access

### Monetization Features
- **Flexible Pricing Models:** Subscriptions, training credits, one-time purchases
- **Plans (Bundles):** Package multiple courses/paths into tiered offerings (e.g., Gold Plan, Platinum Plan)
- **Group Purchases:** Enterprise buyers can bulk-purchase seats and distribute to team members
- **Multi-Currency:** Support for global transactions

### AI Capabilities (Post-Gainsight)
- **AI Content Assist:** Generate course descriptions, learning objectives, and quizzes from existing content
- **Agentic Learning Vision:** AI that delivers contextual training in the flow of work (in-app guidance, personalized lessons)

**Source:** https://www.skilljar.com/product/, https://www.skilljar.com/pricing/, https://support.gainsight.com/Skilljar/Integrate

---

## 3. Pricing & Plans

Skilljar uses **custom, quote-based pricing**—no public price lists. Pricing has two components:

### Plan Tiers

| Plan | Target | Academy Sites | Key Differentiators |
|------|--------|---------------|---------------------|
| **Essentials** | Starting academies | 1 | Unlimited seats/courses, basic integrations, SSO for learners, certifications, automations |
| **Professional** | Multi-audience training | 2 | Premium integrations (3), admin SSO, content syndication, external management, multiple currencies |
| **Enterprise** | Global scale | 3 | All Professional features plus maximum premium integrations (7) |

### Active User Fees
- Pricing includes an **annual active user fee** based on the number of unique learners taking lessons in a year
- Active user = anyone who takes a lesson (not just logs in)
- Customers can add active users at any time

### Add-Ons (Priced Separately)

| Add-On | Starting Price | Purpose |
|--------|---------------|---------|
| Content Syndication | $10,000/year | Embed courses in external LMS |
| Data Connector | $25,000/year | Real-time PostgreSQL database access |
| Language Packs | $10,000/year (5 languages) | Platform localization |
| LearnExperts AI | Custom | AI-powered course creation |

### Pricing Transparency Issues
- **No free trial** available
- **No self-serve pricing**—requires sales contact
- Quote-based model makes budgeting difficult for prospects
- Add-ons significantly increase total cost of ownership

**Source:** https://www.skilljar.com/pricing/, https://www.fool.com/the-ascent/small-business/learning-management/skilljar-review/

---

## 4. Strengths

### 1. Purpose-Built for Customer Education
Unlike generalist LMS platforms retrofitted for external use, Skilljar was designed from the ground up for customer training. This shows in:
- External-first user management and group controls
- E-commerce and monetization features native to the platform
- Focus on product adoption metrics vs. compliance tracking

### 2. Enterprise-Grade CRM Integration
The **Salesforce integration** is particularly strong—training data flows into account records, opportunity influence tracking, and customer health scores. This enables CS and Sales teams to see training engagement in their existing workflows.

### 3. Scalable Virtual Training
Native Zoom/Webex integration with automated registration, calendar invites, and attendance tracking makes ILT programs scalable. Companies like Paycor pivoted from in-person to virtual-first training successfully using Skilljar.

### 4. Robust Certification Engine
Certification programs with proctored exams, badging, and LinkedIn integration help drive customer retention. Paycor's data showed certified customers retained at higher rates than non-certified.

### 5. Content Syndication
The ability to embed courses in customers' own LMS platforms reduces friction for enterprise buyers who want training but don't want another platform to manage.

### 6. Quality of Support
G2 reviews consistently rate Skilljar's **Quality of Support at 9.4/10**. Every customer gets an Implementation Manager and ongoing Customer Success Manager. The company also runs Skilljar Academy (their own platform) and an annual user conference (Skilljar Connect).

### 7. Mobile & Offline Access
Full mobile responsiveness with offline content download/sync—important for field workers or travelers.

**Source:** https://www.g2.com/compare/skilljar-customer-education-platform-vs-talentlms, customer case studies

---

## 5. Weaknesses & Gaps

### 1. Limited Course Authoring Capabilities
- **Basic quiz builder:** Only supports multiple-choice, fill-in-the-blank, and open-text. No advanced assessment types (matching, drag-and-drop, simulations).
- **No native content authoring:** Requires external tools (Articulate, Camtasia, Adobe Captivate) for interactive content.
- **AI features nascent:** AI Content Assist is newer and less mature than competitors.

### 2. Learning Path Limitations
Multiple G2 reviewers note that learning paths are **"not really paths as much as they are blocks of courses"**—lacks dynamic branching, adaptive learning, or complex conditional logic.

### 3. Reporting Complexity
While native analytics cover basics, **advanced reporting requires the $25k Data Connector add-on** or manual CSV exports. Some reviewers find the reporting interface unintuitive compared to dedicated analytics platforms.

### 4. No Free Trial or Self-Serve Onboarding
The **demo-required, quote-based sales process** creates friction for smaller teams or those wanting to evaluate quickly. No free trial means prospects must commit to sales conversations before experiencing the product.

### 5. Interface Learning Curve
G2 reviews cite **Ease of Use at 8.7/10** (solid but not exceptional). Some users find:
- Publishing workflows confusing
- Domain setup non-intuitive
- Admin interface less polished than learner interface

### 6. Gamification Gaps
Compared to platforms like TalentLMS or Docebo, Skilljar has **limited gamification**—no points, leaderboards, or extensive reward systems beyond certificates/badges.

### 7. Pricing Opacity
The lack of transparent pricing and reliance on add-ons for core enterprise features (data connector, content syndication) makes total cost of ownership unpredictable.

### 8. Internal Training Limitations
While Skilljar can be used for employees, it's **not optimized for internal use cases** like compliance training, HR onboarding, or skills gap analysis—areas where dedicated internal LMS platforms excel.

**Source:** https://www.g2.com/compare/skilljar-customer-education-platform-vs-talentlms, https://www.fool.com/the-ascent/small-business/learning-management/skilljar-review/

---

## 6. Ideal Buyer Profile

### Best Fit For:

**1. B2B SaaS Companies (Mid-Market to Enterprise)**
- Companies with complex products requiring structured onboarding
- Organizations with existing Salesforce/Gainsight investments
- Teams measuring training impact on retention/expansion

**2. Companies with Certification Programs**
- Need proctored exams and credential verification
- Selling or offering certifications as retention tool
- Want LinkedIn-integrated badging

**3. Partner/Channel Training Programs**
- Training reseller networks or implementation partners
- Need external management features
- Require content syndication to partner systems

**4. Customer Success-Driven Organizations**
- CS teams wanting training data in their workflow
- Companies viewing education as retention strategy
- Organizations with CSMs who influence training adoption

**5. Monetized Training Programs**
- Selling training as a revenue stream
- Need flexible pricing models (subscriptions, credits, bundles)
- Serving enterprise buyers with group purchase needs

### Poor Fit For:

- **B2C course creators** or individual experts (Thinkific's sweet spot)
- Companies needing primarily **internal/compliance training**
- Organizations wanting **self-serve setup** without sales process
- Teams requiring **advanced gamification** or social learning
- Budget-conscious startups needing **transparent, predictable pricing**

---

## 7. How It Compares to Thinkific

| Dimension | **Skilljar** | **Thinkific** |
|-----------|-------------|---------------|
| **Primary Use Case** | Customer & partner education (B2B) | Expert-led courses, B2C, academies, internal training |
| **Target Buyer** | Customer Education teams, CS leaders, Enterprise L&D | Experts, creators, training companies, SMBs |
| **Pricing Model** | Quote-based (annual + per active user) | Transparent tiered plans (Free → $199+/mo) |
| **Free Trial** | ❌ No | ✅ Yes (Free plan available) |
| **Ease of Setup** | Requires implementation support | Self-serve, quick launch (as fast as 30 days for Plus) |
| **Course Authoring** | Basic (upload content, simple quizzes) | Advanced drag-and-drop builder, AI tools, apps ecosystem |
| **E-Commerce** | Enterprise B2B (group purchases, credits, subscriptions) | B2C optimized (coupons, affiliates, payment plans) |
| **CRM Integration** | ⭐⭐⭐⭐⭐ Deep Salesforce/Gainsight native integration | ⭐⭐⭐ Via integrations (HubSpot, Salesforce via third-party) |
| **Mobile** | Responsive web + offline download | ⭐⭐⭐⭐⭐ Branded mobile app (Thinkific Plus) |
| **Certifications** | ⭐⭐⭐⭐⭐ Proctored exams, Credly badging, QR verification | ⭐⭐⭐⭐ Completion certificates, basic credentials |
| **Content Syndication** | ⭐⭐⭐⭐⭐ Native feature ($10k add-on) | ❌ Not available |
| **AI Features** | Content Assist (emerging) | ⭐⭐⭐⭐⭐ AI course builder, name generator, quiz creator |
| **Gamification** | ⭐⭐⭐ Limited (certificates/badges) | ⭐⭐⭐⭐⭐ Apps ecosystem (Nitro, game-based learning) |
| **Customization** | ⭐⭐⭐⭐ Custom domains, themes, API access | ⭐⭐⭐⭐⭐ Full white-label, extensive theming |
| **Support Model** | Dedicated CSM + Implementation Manager (all plans) | Varies by tier; Plus gets dedicated Customer Success |
| **Community** | Annual conference, Skilljar Academy | Thinkific Community, Thinkific Academy |

### Strategic Positioning Difference

**Skilljar** is an **enterprise customer education platform** that happens to have course delivery capabilities. It excels when:
- Training is part of a broader customer success strategy
- Integration with Salesforce/Gainsight is critical
- Selling training to enterprise buyers with procurement processes
- Measuring training's impact on product adoption and retention

**Thinkific** is a **flexible learning platform** that serves a broader market. It excels when:
- Individual experts or creators are building businesses
- Speed to launch and ease of use are priorities
- Diverse monetization models (memberships, digital downloads) are needed
- B2C marketing features (affiliates, coupons, landing pages) matter

### Head-to-Head Scenarios

| Scenario | Winner | Why |
|----------|--------|-----|
| Enterprise SaaS customer onboarding | **Skilljar** | Deeper CRM integration, content syndication, enterprise sales features |
| Individual expert selling courses | **Thinkific** | Self-serve, better authoring, B2C marketing tools, transparent pricing |
| Certification program with proctored exams | **Skilljar** | Native proctoring integration, enterprise-grade verification |
| Quick academy launch (30 days) | **Thinkific Plus** | Faster setup, AI tools, less implementation overhead |
| Partner/reseller training at scale | **Skilljar** | External management, content syndication, group controls |
| Creator economy / membership site | **Thinkific** | Better monetization flexibility, community features, apps ecosystem |

**Source:** https://www.cuspera.com/compare/skilljar-vs-thinkific/921/12406, https://www.thinkific.com/blog/customer-training-platform/, https://elearningindustry.com/directory/compare/learning-management-systems/skilljar-vs-thinkific

---

## Key Sources

1. Skilljar Official Website: https://www.skilljar.com/
2. Skilljar Pricing: https://www.skilljar.com/pricing/
3. Gainsight Acquisition Press Release: https://gainsight.com/press/gainsight-acquires-skilljar-enabling-learning-everywhere
4. G2 Comparison (Skilljar vs TalentLMS): https://www.g2.com/compare/skilljar-customer-education-platform-vs-talentlms
5. The Ascent/Motley Fool Review: https://www.fool.com/the-ascent/small-business/learning-management/skilljar-review/
6. Thinkific Customer Training Platform Blog: https://www.thinkific.com/blog/customer-training-platform/
7. Cuspera Comparison: https://www.cuspera.com/compare/skilljar-vs-thinkific/921/12406
8. TrustRadius Comparison: https://www.trustradius.com/compare-products/skilljar-vs-thinkific
9. Zendesk Case Study: https://www.skilljar.com/case-studies/zendesk/
10. Paycor Case Study: https://www.skilljar.com/case-studies/paycor/
11. FeaturedCustomers Case Studies: https://www.featuredcustomers.com/vendor/skilljar/case-studies
12. Skilljar Plans Feature Launch: https://www.skilljar.com/blog/skilljar-launches-plans-for-ultimate-flexibility
