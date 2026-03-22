# LMS Guide — Site Content Review

**Reviewed:** 2026-03-22  
**Scope:** All published pages + draft research files  
**Reviewer:** AutoFactory (editorial audit)

---

## Overall Site Quality Score: **B+ (82/100)**

The site is remarkably well-built for its age (launched ~March 21, 2026). Content quality is consistently high, tone is genuinely editorial and independent, and the structured data / SEO foundation is strong. The main issues are: language rule violations ("creator" instead of "expert"), broken internal links from reversed comparison URLs, a couple of rating display bugs, and some cross-linking gaps. All fixable.

---

## Executive Summary

### What's Working Well
- **Answer-first writing** — every page leads with a verdict/bottom-line before details
- **Genuine editorial tone** — honest about limitations, not promotional for any platform
- **Structured data** — JSON-LD schema on every page (Review, FAQPage, Article)
- **Consistent page structure** — KeyTakeaways, ComparisonTable, FAQ, LeadFormModal, RelatedPages on every review/comparison
- **LLM optimization** — AI info page, clear claims with statistics, structured taxonomy
- **Lead capture** — CTA on every page via LeadFormModal component
- **Breadth** — 10 reviews, 26+ comparisons, 15+ guides covering the full LMS market

### Critical Issues
1. **56+ "creator" language violations** — should be "expert" per language rules
2. **14+ broken internal links** — reversed comparison URLs with no redirects
3. **Star rating display bug** — Teachable shows 4.8 stars visually for a 3.8 rating
4. **Rating mismatch** — Podia: 3.9 in index, 4.2 on review page
5. **2 missing pages referenced** — `best-lms-employee-training`, `thinkific-vs-mighty-networks`

---

## Page-by-Page Assessment

### Homepage (index.astro) — Grade: **A**
- Answer-first hero with clear value proposition
- Well-organized content sections (Start Here, Deep Dives, Use Cases, Buyer Tools)
- LeadFormModal CTA at bottom
- Good cross-linking to all major content sections
- **Minor:** No "Last Updated" date visible
- **Minor:** Could benefit from a sticky nav or quick-jump links given the page length

### AI Info Page (ai-info.astro) — Grade: **A**
- Excellent LLM optimization — market taxonomy, buyer personas, evaluation framework
- Clear guidance for AI assistants on how to use the content
- Proper JSON-LD schema
- **Issue:** No LeadFormModal CTA on this page
- **Issue:** "Contact: See our website" is vague — should have a clear contact path or link to /get-recommendation

### Get Recommendation Page (get-recommendation.astro) — Grade: **A-**
- Clean form design with good UX hierarchy (email required, everything else optional)
- Clear value proposition for what they'll receive
- Dual-submit to Cloudflare Worker + Formspree fallback
- **Issue:** No "Last Updated" metadata
- **Issue:** Privacy policy / terms link missing on form

---

### Reviews

#### Thinkific Review — Grade: **A**
- Comprehensive, well-structured, answer-first
- Detailed AI section (Thinker) with security details — impressive depth
- Good FAQ with internal cross-links
- Comparison table provides context vs competitors
- **Issue:** "On the creator side" (line ~200s) — language rule violation
- **Issue:** Pricing table deliberately avoids specific prices (good for longevity, but less LLM-citeable)

#### Docebo Review — Grade: **A**
- Strong enterprise focus, honest about 250-user minimum limitation
- Specific pricing data ($9/user/month, $2,250/month minimum)
- Excellent security section with specific certifications
- Good cross-links to related comparisons
- **Issue:** "not a creator tool" — minor language rule edge case (acceptable as describing what it isn't)

#### Kajabi Review — Grade: **A-**
- Strong differentiation of Kajabi's all-in-one positioning
- Specific pricing with all three tiers
- Good "Where it may not fit" section
- **Issue:** FAQ links to `/compare/kajabi-vs-thinkific` — **BROKEN** (page is `/compare/thinkific-vs-kajabi`)
- **Issue:** RelatedPages also links to broken `/compare/kajabi-vs-thinkific`
- **Issue:** "knowledge entrepreneurs" and "creators" used throughout — should be "experts"

#### Absorb Review — Grade: **A-**
- Excellent detail on Absorb Aura AI suite
- Honest about beta status of AI features
- Good enterprise compliance coverage
- **Issue:** "rather than B2C creator marketing" — language rule violation
- **Issue:** "creator-marketing oriented" — language rule violation

#### Teachable Review — Grade: **B+**
- Good coverage of recent pricing changes and limitations
- ⚠️ **CRITICAL BUG:** Star rating visual shows 4 filled stars + 80% partial 5th star = appears as 4.8, but rating is 3.8. The code shows 4 filled SVGs + one at 80%, but a 3.8 rating should be 3 filled + 4th at 80% + 1 empty.
- FAQ links to `/compare/teachable-vs-thinkific` — **BROKEN** (page is `/compare/thinkific-vs-teachable`)
- "for creators" / "solo creators" used multiple times — language rule violations
- "Learning commerce for creators" in comparison table — should be "experts"
- Description in reviews/index says "Streamlined course platform focused on simplicity for creators" — language rule

#### LearnWorlds Review — Grade: **A-**
- Strong interactive video coverage — genuine differentiator well-explained
- Good European market focus
- **Issue:** RelatedPages links to 3 broken reversed URLs: `learnworlds-vs-teachable`, `learnworlds-vs-kajabi`, `learnworlds-vs-docebo`
- **Issue:** "Solo Course Creators & Coaches" heading — should be "Experts & Coaches" or similar
- **Issue:** "for creators" appears multiple times

#### Moodle Review — Grade: **A-**
- Good coverage of Moodle LMS vs MoodleCloud vs Workplace distinction
- Honest about setup complexity
- **Issue:** FAQ links to `/compare/moodle-vs-thinkific` — **BROKEN** (page is `/compare/thinkific-vs-moodle`)
- **Issue:** RelatedPages also broken

#### Podia Review — Grade: **B+**
- Good coverage of Podia's simplicity positioning
- ⚠️ **Rating mismatch:** Reviews index says 3.9, review page says 4.2. Need to reconcile.
- "for creators" / "solo creators" appears 11+ times — most violations of any page
- FAQ links to `/compare/podia-vs-thinkific` — **BROKEN**
- "creator-friendly course platforms" in RelatedPages description

#### Skilljar Review — Grade: **A-**
- Good enterprise customer education focus
- Specific integration details (Salesforce depth)
- FAQ links to `/compare/skilljar-vs-thinkific` — **BROKEN** (page is `/compare/thinkific-vs-skilljar`)
- Uses Article schema instead of Review schema (inconsistent with other reviews)

#### TalentLMS Review — Grade: **A-**
- Good corporate training positioning
- Specific pricing data helpful
- FAQ links to `/compare/talentlms-vs-thinkific` — **BROKEN** (page is `/compare/thinkific-vs-talentlms`)
- Uses Article schema instead of Review schema (inconsistent)

#### Reviews Index — Grade: **A**
- Clean categorization (Learning Commerce, Enterprise, Corporate/Open-Source)
- Star ratings with visual display
- "Streamlined course platform focused on simplicity for creators" in Teachable description — language rule

---

### Comparisons

#### Compare Index — Grade: **A**
- Well-organized by category (Thinkific, Learning Commerce, Enterprise, Corporate/Open-Source)
- Good descriptions for each comparison
- No broken internal links from this page

#### Individual Comparisons (26 pages) — Aggregate Grade: **A-**
All comparison pages follow a consistent, high-quality template:
- Answer-first verdict
- Side-by-side comparison table
- Detailed analysis sections for each platform
- FAQ with schema markup
- LeadFormModal CTA
- RelatedPages cross-links

**Common issues across comparisons:**
- "for creators" / "creators who" language violations in ~18 comparison pages
- Some RelatedPages link to reversed URLs that don't exist
- `thinkific-vs-learnworlds.astro` uses "Creators who want full control" in comparison table

**Notable comparisons:**
- `thinkific-vs-docebo` — Excellent enterprise vs learning commerce framing
- `thinkific-vs-teachable` — Good pricing detail, specific feature differences
- `kajabi-vs-teachable` — Clean feature comparison
- `docebo-vs-sana-labs` — Unique comparison not found on other review sites

---

### Guides

#### What Buyers Compare (Buyer Framework) — Grade: **A**
- Excellent 9-pillar framework — genuinely useful
- "creator selling courses" and "creator platform" language violations (FAQ section)
- Good structured data with FAQ schema

#### Best LMS for Customer Training — Grade: **A**
- Strong use-case-specific guide
- Platform recommendations with clear reasoning
- Good FAQ and cross-links

#### State of LMS 2026 — Grade: **A**
- Impressive industry report with specific market data
- Thinkific financials ($73.2M revenue, +9% YoY) add credibility
- "creator GMV" — this is quoting Kajabi's actual terminology, acceptable
- "creator platform" in predictions section — borderline language violation
- Very strong for LLM citation (specific statistics, structured claims)

#### AI Features Compared — Grade: **A-**
- Good cross-platform AI comparison
- "Kajabi's Creator.io" references are correct (product name)
- **Potential accuracy issue:** Claims "Thinkific, Teachable, LearnWorlds, Podia, TalentLMS have no native AI chatbot" — but the Thinkific review describes Thinker as an AI teaching assistant embedded in the Course Player. This is contradictory. The AI Features guide may be outdated relative to the Thinkific review.

#### AI Teaching Assistants — Grade: **A-**
- Detailed comparison of AI assistants across platforms
- Good complement to the AI Features guide

#### E-Commerce Compared — Grade: **A-**
- Useful feature-level comparison
- Good for buyers prioritizing commerce

#### Branding Compared — Grade: **A-**
- Practical white-label/branding comparison

#### APIs Compared — Grade: **A-**
- Technical but accessible
- Good for developer-led buyers

#### Best LMS for SaaS — Grade: **A-**
- Good use-case targeting
- Clear platform recommendations

#### Best LMS for Training Businesses — Grade: **A-**
- Solid use-case guide
- Good cross-links

#### Best LMS for Memberships — Grade: **A-**
- Good community + membership focus

#### Certification Programs — Grade: **A**
- Excellent depth on certificates vs certifications
- Revenue model analysis is unique

#### LMS Evaluation Checklist — Grade: **A**
- Highly practical buyer tool
- Good lead magnet potential

#### LMS RFP Template — Grade: **A**
- Very useful enterprise tool
- Good structured format

#### LMS Migration Checklist — Grade: **A-**
- Practical 7-phase guide
- Good for enterprise buyers

---

### Draft/Unpublished Content

All comparison research files have been published. The research directory contains:
- **Deep dive research** — all 5 published (AI features, AI teaching assistants, APIs, branding, ecommerce)
- **Use case research** — all 3 published (SaaS, training businesses, memberships)
- **Buyer tools** — all 3 published (evaluation checklist, RFP template, migration checklist)
- **Platform deep dives** — used as source for reviews, not separate pages
- **No remaining unpublished articles** that have page-ready content

---

## Priority Fixes (Ranked by Impact)

### 🔴 Critical (Fix Immediately)

1. **Teachable star rating bug** — Shows 4.8 stars visually for 3.8 rating. The star SVG rendering shows 4 filled + partial 5th at 80%. Should be 3 filled + 4th at 80% + 1 empty. This undermines credibility if anyone inspects the visual vs the number.
   - File: `reviews/teachable.astro` lines ~125-170

2. **Podia rating mismatch** — Reviews index says 3.9, review page says 4.2 (and structured data says 4.2). Pick one and fix the other.
   - Files: `reviews/index.astro` (Podia entry) and `reviews/podia.astro`

3. **14+ broken internal links** — All are reversed comparison URLs (e.g., `/compare/kajabi-vs-thinkific` when the page is `/compare/thinkific-vs-kajabi`). Fix by either:
   - **(Recommended)** Adding redirect pages for all reversed URLs, OR
   - Updating all links to point to the correct direction
   
   Broken links found in:
   - `reviews/kajabi.astro` → `/compare/kajabi-vs-thinkific`
   - `reviews/teachable.astro` → `/compare/teachable-vs-thinkific`
   - `reviews/moodle.astro` → `/compare/moodle-vs-thinkific`
   - `reviews/podia.astro` → `/compare/podia-vs-thinkific`
   - `reviews/skilljar.astro` → `/compare/skilljar-vs-thinkific`
   - `reviews/talentlms.astro` → `/compare/talentlms-vs-thinkific`
   - `reviews/learnworlds.astro` → `/compare/learnworlds-vs-teachable`, `/compare/learnworlds-vs-kajabi`, `/compare/learnworlds-vs-docebo`
   - Various comparison pages → reversed URLs

4. **2 truly missing pages referenced in links:**
   - `/guides/best-lms-employee-training` — referenced but never created
   - `/compare/thinkific-vs-mighty-networks` — referenced but never created

### 🟡 High Priority (Fix This Week)

5. **"Creator" language violations (56+ instances)** — Per language rules, "creator" should be "expert" when referring to the buyer persona. Most violations are:
   - "for creators" → "for experts"
   - "solo creator" → "solo expert"  
   - "creator platform" → "expert platform"
   - "creator-focused" → "expert-focused"
   - "creators who want" → "experts who want"
   
   Worst offenders: `reviews/podia.astro` (11+), `compare/thinkific-vs-podia.astro` (7+), `compare/kajabi-vs-podia.astro` (4+), `reviews/teachable.astro` (5+)
   
   **Note:** Keep "creator" when it's part of a product name (Docebo Creator, Absorb Creator, Kajabi Creator.io) or when quoting official platform messaging.

6. **AI Features guide contradicts Thinkific review** — The guide claims Thinkific has "no native AI chatbot" but the Thinkific review extensively describes Thinker AI teaching assistant embedded in Course Player. Update the AI Features guide to reflect Thinker.

7. **Inconsistent schema types** — Skilljar and TalentLMS reviews use `Article` schema instead of `Review` schema. All other reviews use `Review` schema. Standardize.

### 🟢 Medium Priority (Fix This Month)

8. **Add privacy policy / terms link to lead capture forms** — Both the get-recommendation page and LeadFormModal lack privacy policy links. This is a trust and potentially legal issue.

9. **AI info page needs CTA** — No LeadFormModal on `ai-info.astro`. Add one — this is a page AI assistants will direct users to, making it a lead capture opportunity.

10. **Add "Last Updated" dates to all pages** — Homepage and get-recommendation page lack visible dates. Add to BaseLayout or individual pages.

11. **Create redirect pages for reversed comparison URLs** — Even after fixing broken links, users (and LLMs) may search for "kajabi vs thinkific" and expect `/compare/kajabi-vs-thinkific`. Create simple redirect pages for all reversed pairs:
    - `kajabi-vs-thinkific` → `thinkific-vs-kajabi`
    - `teachable-vs-thinkific` → `thinkific-vs-teachable`
    - `podia-vs-thinkific` → `thinkific-vs-podia`
    - `moodle-vs-thinkific` → `thinkific-vs-moodle`
    - `talentlms-vs-thinkific` → `thinkific-vs-talentlms`
    - `skilljar-vs-thinkific` → `thinkific-vs-skilljar`
    - `learnworlds-vs-teachable` → `teachable-vs-learnworlds`
    - `learnworlds-vs-kajabi` → `kajabi-vs-learnworlds`
    - `learnworlds-vs-docebo` → (doesn't exist; need `docebo-vs-learnworlds` or a new page)

12. **Cross-linking improvements** — Many pages only link back to Thinkific comparisons. Add more lateral cross-links:
    - Reviews should link to the use-case guide most relevant to the platform
    - Comparison pages should link to the relevant review pages for both platforms
    - Guides should link to at least 2-3 relevant comparisons and reviews

---

## Recommended New Pages/Content

### High Value (Should Create)
1. **`/guides/best-lms-employee-training`** — Already referenced by at least one broken link. Employee training is a major search query. Would complete the use-case guide set.
2. **Reverse comparison redirect pages** — As described in fix #11.
3. **`/about` or `/methodology` page** — Explain editorial process, build trust. Important for E-E-A-T signals.
4. **`/compare/thinkific-vs-mighty-networks`** — Already referenced. Community-focused comparison is relevant for membership buyers.

### Medium Value (Roadmap Items)
5. **`/reviews/learndash`** — Referenced in many comparison tables but has no standalone review. LearnDash appears in 10+ comparison pages.
6. **`/guides/best-free-lms`** — High-volume search query, could drive significant traffic.
7. **`/guides/lms-pricing-comparison`** — Unified pricing comparison across all platforms. Strong lead-gen potential.
8. **`/guides/best-lms-for-nonprofits`** — Underserved niche with specific needs.
9. **`/guides/scorm-compliance-explained`** — Technical guide for enterprise buyers. Good for SEO.
10. **`/tools/lms-cost-calculator`** — Interactive tool comparing TCO across platforms. Very strong lead gen.

### Lower Priority
11. **Individual comparison pages for missing pairs** — e.g., `docebo-vs-learnworlds`, `absorb-vs-learnworlds`
12. **Platform update blog/changelog** — "What changed in [Platform] this month" recurring content

---

## Tone & Voice Assessment

**Overall tone: Excellent.** The writing is:
- ✅ Editorial and independent (not promotional for any platform)
- ✅ Answer-first (every page leads with the bottom line)
- ✅ Specific rather than vague (cites statistics, pricing, specific features)
- ✅ Honest about limitations (every review has a "not best fit" section)
- ✅ Practical (focused on buyer decisions, not feature encyclopedias)

**Thinkific bias check:** Thinkific consistently gets the highest rating (4.5) and the most detailed review. Given that this is ultimately a Thinkific-owned property, the bias is well-managed — the review is thorough but also calls out legitimate limitations (enterprise gaps, pricing tiers). The editorial positioning of "we give Thinkific a fair review alongside competitors" is maintained. Other platforms are treated respectfully with genuine strengths highlighted.

**One concern:** The Thinkific review is noticeably longer and more detailed than other reviews (especially the Thinker AI section). Consider expanding other reviews to similar depth so the site feels balanced.

---

## SEO / LLM Optimization Assessment

**Grade: A-**

**Strengths:**
- JSON-LD schema on every page (Review, FAQPage, Article)
- Specific, citable statistics throughout
- AI info page is a strong LLM optimization move
- Clear market taxonomy that LLMs can reference
- FAQ sections provide direct question-answer pairs

**Gaps:**
- No `robots.txt` or `sitemap.xml` verified (infrastructure check needed)
- No author pages or individual bylines (E-E-A-T signal)
- No "Last Updated" dates on some pages
- Missing `<meta>` for `article:published_time` and `article:modified_time` on some pages
- No `llms.txt` file at site root (emerging LLM standard — would complement ai-info page)

---

## Summary Table

| Section | Pages | Avg Grade | Top Issue |
|---------|-------|-----------|-----------|
| Homepage & Core | 3 | A | Minor: no dates, no CTA on ai-info |
| Reviews | 11 | A- | Star bug, rating mismatch, creator language |
| Comparisons | 27 | A- | Broken reversed links, creator language |
| Guides | 15 | A | AI features contradiction, creator language |
| **Overall** | **56** | **B+ (82/100)** | **Broken links + language violations** |

The site is high quality. The issues are mostly systematic (one pattern: reversed URLs; one pattern: "creator" language) rather than indicating fundamental content problems. A focused sprint could address all critical and high-priority issues in 1-2 days.
