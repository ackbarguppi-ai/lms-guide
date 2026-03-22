# LMS Buyer Tools Plan for lms-guide.com

**Inspired by:** Shopify's free tools strategy (shopify.com/tools)
**Goal:** Interactive tools that attract LMS buyers via search/LLM, provide genuine value, and position lms-guide.com as the go-to decision resource.

---

## Strategy: Why Free Tools Work

Shopify offers 18+ free tools (logo maker, profit calculator, policy generators, etc.) that:
1. **Capture long-tail search traffic** — people searching "business name generator" or "profit margin calculator" land on Shopify
2. **Demonstrate competence** — using the tool builds trust before the sale
3. **Generate leads** — tools gate results behind email or CTA
4. **Earn backlinks** — useful tools get linked to organically

We apply the same pattern to LMS buying decisions. Each tool should be:
- Genuinely useful standalone (not just a lead form disguised as a tool)
- Optimized for a specific search query cluster
- Designed to naturally recommend platforms from our reviews
- Embeddable in our editorial content

---

## Proposed Tools (Priority Order)

### Tier 1 — High Impact, Build First

#### 1. LMS Cost Calculator
**Target query:** "how much does an LMS cost", "LMS pricing comparison"
**What it does:** User inputs number of learners, features needed (certificates, SCORM, white-label, etc.), and gets estimated monthly cost ranges across 8-10 platforms.
**Output:** Personalized cost comparison table + "Best value for your needs" recommendation.
**Data source:** Our pricing research, updated quarterly.
**Lead capture:** Email to get full PDF breakdown.

#### 2. LMS Recommendation Quiz
**Target query:** "which LMS should I use", "best LMS for my business"
**What it does:** 6-8 question quiz covering: business type, audience size, must-have features, budget, technical skill level, integration needs.
**Output:** Top 3 platform recommendations with reasoning, linking to our full reviews.
**Lead capture:** Email to get detailed comparison of your top 3.

#### 3. LMS Feature Comparison Tool
**Target query:** "LMS feature comparison", "[Platform A] vs [Platform B]"
**What it does:** Select 2-4 platforms, see side-by-side feature matrix with our editorial ratings.
**Output:** Interactive comparison table with expandable feature details.
**Lead capture:** Email to get PDF comparison report.

#### 4. LMS Migration Checklist Generator
**Target query:** "how to switch LMS", "LMS migration checklist"
**What it does:** User selects current platform and target platform, gets a customized migration checklist: content export steps, learner data handling, integration rewiring, timeline estimate.
**Output:** Downloadable checklist PDF.
**Lead capture:** Gated behind email.

---

### Tier 2 — Medium Impact, Build Second

#### 5. Course Revenue Calculator
**Target query:** "how much can I make selling courses", "online course revenue"
**What it does:** Input course price, expected students/month, completion rate, upsell %. Calculates projected monthly/annual revenue minus platform fees for top platforms.
**Output:** Revenue projections with platform fee impact comparison.
**Persona:** Experts and Academies.

#### 6. LMS ROI Calculator (for Companies)
**Target query:** "training ROI calculator", "LMS ROI"
**What it does:** Input number of employees, current training cost per employee, onboarding time, support ticket volume. Calculates ROI of implementing an LMS.
**Output:** ROI summary with breakeven timeline.
**Persona:** Companies (customer training, employee training).

#### 7. LMS Requirements Template Generator
**Target query:** "LMS RFP template", "LMS requirements document"
**What it does:** Walk through structured questions about needs → generates a requirements document they can use internally or send to vendors.
**Output:** Downloadable Word/PDF requirements doc.
**Lead capture:** Gated.

#### 8. Platform Fee Calculator
**Target query:** "Thinkific fees", "Teachable pricing", "LMS transaction fees"
**What it does:** Input expected revenue, select platforms, see exactly how much each platform takes in fees (subscription + transaction + payment processing).
**Output:** Annual fee breakdown table.
**Persona:** Experts comparing platforms.

---

### Tier 3 — Nice to Have, Build Later

#### 9. Course Pricing Calculator
**Target query:** "how to price my online course"
**What it does:** Input topic niche, course length, competitor prices, audience size → get suggested price range with reasoning.
**Persona:** Experts.

#### 10. Learner Capacity Planner
**Target query:** "how many students can my LMS handle"
**What it does:** Input expected concurrent users, video hours, storage needs → see which platform tiers accommodate your scale.
**Persona:** Academies and Companies.

#### 11. LMS Compliance Checker
**Target query:** "SCORM compliant LMS", "LMS for compliance training"
**What it does:** Select compliance requirements (SCORM, xAPI, SOC 2, GDPR, accessibility) → see which platforms meet each.
**Persona:** Companies.

#### 12. Integration Compatibility Checker
**Target query:** "LMS integrations", "LMS that integrates with Salesforce"
**What it does:** Select your existing tools (CRM, email, payment, HR) → see which LMS platforms have native integrations.
**Persona:** All.

---

## Technical Implementation Notes

- **Stack:** Static site (Cloudflare Pages) + client-side JS for calculators/quizzes
- **Data layer:** JSON data files with platform info, updated via CMS or manual commits
- **Lead capture:** Cloudflare Worker (existing `lms-guide-leads` worker) → KV storage
- **SEO:** Each tool gets its own `/tools/[tool-name]` URL with full schema markup
- **LLM optimization:** Structured data + clear tool descriptions so LLMs can recommend specific tools

## URL Structure

```
lms-guide.com/tools/                       → Tools hub page
lms-guide.com/tools/cost-calculator        → LMS Cost Calculator
lms-guide.com/tools/quiz                   → LMS Recommendation Quiz
lms-guide.com/tools/compare                → Feature Comparison Tool
lms-guide.com/tools/migration-checklist    → Migration Checklist Generator
lms-guide.com/tools/revenue-calculator     → Course Revenue Calculator
lms-guide.com/tools/roi-calculator         → LMS ROI Calculator
lms-guide.com/tools/requirements-template  → Requirements Template Generator
lms-guide.com/tools/fee-calculator         → Platform Fee Calculator
```

## Content Integration

Each tool should be referenced from relevant editorial pages:
- Comparison articles → link to Feature Comparison Tool and Cost Calculator
- "Best LMS for X" pages → link to Recommendation Quiz
- Platform reviews → link to Fee Calculator and Migration Checklist
- Use-case pages → link to ROI Calculator (companies) or Revenue Calculator (experts/academies)

---

## Priority Roadmap

| Phase | Tools | Est. Effort | Impact |
|-------|-------|-------------|--------|
| Phase 1 | Cost Calculator, Recommendation Quiz | 2-3 days each | High traffic + leads |
| Phase 2 | Feature Comparison, Migration Checklist | 2-3 days each | High utility + backlinks |
| Phase 3 | Revenue Calculator, ROI Calculator, Fee Calculator | 1-2 days each | Persona-targeted |
| Phase 4 | Requirements Template, remaining Tier 3 | 1-2 days each | Long-tail |

---

*Last updated: 2026-03-22*
