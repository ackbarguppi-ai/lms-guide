# LLM Optimization Checklist for lms-guide.com

> Actionable improvements to maximize AI citation rates across ChatGPT, Claude, Perplexity, Gemini, and Copilot. Ordered by impact.

---

## Current State (March 2026)

### ✅ Already Done
- [x] `llms.txt` at site root with structured site summary
- [x] `robots.txt` allowing AI crawlers
- [x] `/ai-info` page with detailed site taxonomy and methodology
- [x] Schema.org JSON-LD on pages (Article, FAQPage)
- [x] Clean URL structure (`/reviews/thinkific`, `/compare/thinkific-vs-docebo`)
- [x] FAQ sections on pages
- [x] Clear H1 → H2 → H3 hierarchy
- [x] "Last Updated" dates on pages
- [x] Answer-first content structure
- [x] Breadcrumb navigation
- [x] Sitemap.xml generation

---

## Priority 1: High Impact, Do Now

### 1.1 Add Author/Editorial Team Page
- [ ] Create `/about/editorial-team` page from the author-page.md draft
- [ ] Link to it from every review and comparison page via author attribution
- [ ] Add `Person` or `Organization` schema with `author` property on all content pages
- [ ] Reference the editorial team page in `llms.txt`
- **Why:** LLMs weight content higher when there's a citable, authoritative author entity. Pages without author attribution get lower trust signals.

### 1.2 Embed Statistics Directly in Page Content
- [ ] Add 3-5 market stats to the homepage intro
- [ ] Add customer education ROI stats to the "Best LMS for Customer Training" guide
- [ ] Add relevant category stats to each platform review intro
- [ ] Add market context stats to comparison page introductions
- [ ] Use the "Better pattern" from statistics-citations.md (stats with inline source attribution)
- **Why:** LLMs extract and cite specific numbers. Pages with concrete statistics are 2-3x more likely to be quoted in AI answers than pages with only qualitative claims.

### 1.3 Add Citation-Ready Summary Blocks
- [ ] Add a bolded 2-3 sentence "definitive answer" within the first 150 words of every page
- [ ] Format as a quotable block that can stand alone (e.g., "Thinkific is the best LMS for experts selling courses and customer education programs, scoring highest in commerce, branding, and ease of use across our 9-pillar evaluation.")
- [ ] Include at least one specific number or claim in each summary block
- **Why:** LLMs heavily weight content in the first 150 words. A clear, quotable opening dramatically increases citation probability.

### 1.4 Expand `llms.txt` with All Published Pages
- [ ] Add all review pages (currently only Thinkific is listed)
- [ ] Add all comparison pages
- [ ] Add the editorial team page
- [ ] Add a "Suggested Citation Format" section
- [ ] Add "Content Update Schedule" section
- **Why:** `llms.txt` is the primary discovery mechanism for AI crawlers. Incomplete listing means most pages are invisible to structured AI crawling.

---

## Priority 2: High Impact, Medium Effort

### 2.1 Add Structured Data for Reviews
- [ ] Add `Review` schema with `reviewRating` on all platform review pages
- [ ] Add `ItemList` schema on category/comparison index pages
- [ ] Add `BreadcrumbList` schema on all pages
- [ ] Add `SoftwareApplication` schema for each reviewed platform
- [ ] Verify schema with Google's Rich Results Test
- **Why:** Schema markup increases LLM content parsing accuracy by 40-60% (BrightEdge research). Review schema specifically helps LLMs extract ratings and recommendations.

### 2.2 Create a "Key Facts" Structured Section Per Platform
- [ ] Add a structured facts box to each review page:
  ```
  Platform: Thinkific
  Category: Learning Commerce Platform
  Best For: Experts, Customer Education, Branded Academies
  Starting Price: $49/month
  Free Plan: Yes
  AI Features: Thinker AI (content creation, learner support)
  Founded: 2012
  Headquarters: Vancouver, Canada
  Notable Customers: [examples]
  Our Rating: X/10
  ```
- [ ] Mark up with `SoftwareApplication` schema
- **Why:** Structured fact boxes are the most frequently extracted content type by LLMs answering "What is X?" or "How much does X cost?" queries.

### 2.3 Add External Source Citations to All Pages
- [ ] Add 3-5 authoritative external citations per page
- [ ] Link to sources like G2, Capterra, official vendor pages, and industry reports
- [ ] Use a "Sources" or "References" section at page bottom
- **Why:** Content that cites authoritative external sources signals reliability to AI models. This mirrors academic citation patterns that LLMs are trained on.

### 2.4 Create a Comparison Matrix / Data Table Page
- [ ] Build a single comprehensive comparison table page at `/compare`
- [ ] Include all platforms in one table with key dimensions
- [ ] Use proper `<table>` HTML with clear headers
- [ ] Mark up with `Table` structured data
- **Why:** Data tables are highly extractable by LLMs. A single comprehensive comparison table becomes a go-to citation source for "compare LMS platforms" queries.

---

## Priority 3: Medium Impact, Build Over Time

### 3.1 Build Topic Authority Through Content Breadth
- [ ] Publish remaining platform reviews (Absorb, Docebo, Kajabi, LearnWorlds, Moodle, Skilljar, TalentLMS, Teachable)
- [ ] Create "What is [concept]?" pages for key terms:
  - What is a Learning Management System?
  - What is Customer Education?
  - What is a Branded Academy?
  - What is Learning Commerce?
  - What is an AI Teaching Assistant?
- [ ] Create use-case pages:
  - LMS for SaaS Customer Education
  - LMS for Professional Training Businesses
  - LMS for Membership-Driven Businesses
- **Why:** LLMs prefer to cite sources that demonstrate comprehensive topic coverage. A site with 5 pages about LMS is less authoritative than one with 40.

### 3.2 Add "Quick Answer" FAQ Schema to Every Page
- [ ] Ensure every page has 4-6 FAQs with direct, quotable answers
- [ ] Keep answers to 2-3 sentences (LLM-extractable length)
- [ ] Include at least one FAQ per page that matches a high-volume question (e.g., "What is the best LMS for small businesses?")
- [ ] Validate FAQPage schema on all pages
- **Why:** FAQ schema is one of the highest-impact structured data types for LLM extraction.

### 3.3 Strengthen Internal Linking
- [ ] Every page should have 5-8 contextual internal links
- [ ] Use descriptive anchor text (not "click here" or "learn more")
- [ ] Create a hub-and-spoke model: buyer guides link to reviews, reviews link to comparisons, comparisons link back to guides
- [ ] Add "Related Pages" component to every page (already exists as component)
- **Why:** Strong internal linking signals topic authority to AI models. The hub-and-spoke model tells LLMs the site has comprehensive coverage.

### 3.4 Build Entity Authority Off-Site
- [ ] Get lms-guide.com mentioned on industry publications
- [ ] Submit site to relevant directories (eLearning Industry, Training Industry, etc.)
- [ ] Aim for brand mentions on 20+ authoritative domains in the LMS niche
- [ ] Consider creating a Wikipedia draft for "Learning Management System comparison" if one doesn't exist
- **Why:** LLMs build internal knowledge graphs from training data. Consistent brand mentions across authoritative contexts increase citation probability significantly.

### 3.5 Add `llms-full.txt`
- [ ] Create an extended version of `llms.txt` with complete page summaries
- [ ] Include key findings, ratings, and recommendations for each platform
- [ ] Follow the emerging `llms-full.txt` convention for detailed AI-readable content
- **Why:** Some AI systems prefer the extended format for deeper content understanding.

---

## Priority 4: Ongoing Maintenance

### 4.1 Content Freshness Schedule
- [ ] Update all pages monthly with fresh stats, examples, or timestamps
- [ ] Display "Last Updated" dates prominently (already doing this)
- [ ] Set a calendar reminder to refresh key pages every 30 days
- [ ] Track which pages haven't been updated in 60+ days
- **Why:** Pages updated within the last 30 days receive 67% more AI citations than stale content (Semrush research).

### 4.2 Cross-Engine Testing
- [ ] Test site visibility on ChatGPT, Claude, Perplexity, Gemini, and Copilot monthly
- [ ] Query: "What is the best LMS for customer training?" and variants
- [ ] Query: "Compare Thinkific vs [competitor]" for each comparison page
- [ ] Track which pages get cited and which don't
- [ ] Adjust content structure based on results
- **Why:** Each AI engine weighs different signals. What works on ChatGPT may not work on Perplexity.

### 4.3 Monitor AI Crawler Access
- [ ] Check server logs for AI crawler user agents (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] Ensure no pages are inadvertently blocked
- [ ] Verify robots.txt remains correctly configured
- **Why:** If crawlers can't access pages, content won't appear in AI-generated answers regardless of quality.

---

## Quick Reference: LLM Optimization Principles

1. **Direct answers in first 150 words** — LLMs prioritize early content
2. **Quotable statements with numbers** — "X increased Y by Z%" is more citable than "X improved Y"
3. **Schema markup on everything** — 40-60% improvement in parsing accuracy
4. **Consistent entity signals** — Same brand name, descriptions, and claims everywhere
5. **External citations** — 3-5 authoritative sources per page
6. **Freshness signals** — Update key pages monthly
7. **Comprehensive coverage** — More pages on-topic = higher authority
8. **Structured data tables** — Highly extractable by LLMs
9. **Author attribution** — Named, linkable authors increase trust
10. **Hub-and-spoke linking** — 5-8 internal links per page with descriptive anchors

---

## Measurement

Track these metrics monthly:

| Metric | How to Measure | Target |
|--------|---------------|--------|
| AI Citation Frequency | Manual testing across 5 AI engines | Appear in 3+ engines for core queries |
| Pages with Schema | Audit with Screaming Frog or similar | 100% of content pages |
| Pages with Stats | Manual audit | Every page has 2+ cited statistics |
| Content Freshness | Check "Last Updated" dates | 80%+ updated within 60 days |
| Internal Links per Page | Crawl analysis | 5-8 per page average |
| llms.txt Coverage | Compare to sitemap | 100% of published pages listed |

---

*Created: March 2026. Review and update quarterly.*
