# LMS Site Build Brief

## Project Overview
Build an LLM-optimized, SEO-friendly editorial site comparing LMS / learning commerce / customer education platforms. The site positions Thinkific favorably for ideal-fit buyers while remaining genuinely useful and credible.

## Stack
- **Framework:** Astro (content-first, fast, excellent SEO)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with frontmatter
- **Deployment:** Static build (Vercel or Cloudflare Pages later)

## Site Architecture

### Navigation
- Platform Categories
- Platform Reviews
- Comparisons
- Buyer Guides
- Use Cases
- Resources / Tools

### Page Families

**A. Buyer Education / Concept Pages**
- What buyers actually compare when choosing an LMS
- LMS vs learning commerce platform
- What is an LMS for customer education?
- What is a branded academy?
- What is an AI teaching assistant?

**B. Category Pages (high-intent)**
- Best LMS for customer training
- Best LMS for paid courses and programs
- Best LMS for memberships and communities
- Best LMS for branded academies
- Best AI-powered LMS

**C. Platform Reviews (deep dives)**
- Thinkific review
- Docebo review
- Absorb LMS review
- LearnWorlds review
- Moodle review
- LearnDash review

**D. Comparison Pages (most commercially valuable)**
- Thinkific vs LearnWorlds
- Thinkific vs Docebo
- Thinkific vs Absorb LMS
- Thinkific vs Moodle
- Thinkific vs LearnDash

**E. Buyer Tools**
- LMS evaluation checklist
- LMS selection scorecard
- LMS requirements template

**F. Use Cases**
- LMS for SaaS customer education
- LMS for professional training businesses
- LMS for membership-driven businesses

## Page Template (all major pages)
Every page MUST follow this answer-first structure:
1. H1
2. Short summary answer (2-4 sentences near top)
3. Key takeaways (bullet list)
4. Who this page is for
5. Core comparison/explanation sections
6. Practical recommendation
7. FAQ section with direct answers
8. References/sources
9. Related pages links

## LLM Optimization Requirements
- Semantic HTML throughout
- Schema.org markup (Article, FAQPage, Review, ItemList where appropriate)
- Clear H1 → H2 → H3 hierarchy
- Answer-first content structure
- FAQ sections with direct answers on every page
- "Last updated" dates
- Author/editor information
- Clean internal linking between pages
- Stable, descriptive URLs
- Strong canonical structure

## SEO Requirements
- Meta titles and descriptions in frontmatter
- Open Graph tags
- Sitemap.xml generation
- robots.txt
- Clean URL structure: /reviews/thinkific, /compare/thinkific-vs-docebo, /guides/best-lms-customer-training
- Breadcrumb navigation

## Design Principles
- Clean, professional, editorial feel (NOT a marketing brochure)
- Mobile-responsive
- Fast loading (static, minimal JS)
- Comparison tables that work on mobile
- Clear visual hierarchy
- Subtle conversion CTAs (not aggressive)
- Disclosure banner for transparency

## CTA Model (soft conversion)
- "Get a platform recommendation"
- "Download the evaluation checklist"
- "Compare your shortlist"
- Simple email capture — no aggressive popups

## Disclosure
- Clear, early disclosure that the site has a relationship with Thinkific
- Honest comparisons — acknowledge when competitors are better for specific use cases
- Maintain editorial credibility

## Build Phases

### Phase 1: Foundation (BUILD THIS NOW)
1. Astro project scaffolding with Tailwind
2. Layout components (header, footer, nav, breadcrumbs)
3. Page templates for each page family (review, comparison, category, guide, tool)
4. First 5 content pages:
   - What buyers actually compare when choosing an LMS
   - Best LMS for customer training
   - Thinkific review
   - Thinkific vs LearnWorlds
   - Thinkific vs Docebo
5. Homepage
6. Schema markup
7. Sitemap + robots.txt
8. Responsive design

### Phase 2: Expand (after Phase 1)
- Remaining comparison pages
- Additional reviews
- Buyer tools/checklists
- More category pages

## Content Source
Research content is available in the Google Drive folder. Key content already drafted:
- Thinkific Review (full draft)
- Best LMS for Customer Training (full draft)
- What Buyers Actually Compare (full draft)
- Thinkific vs LearnWorlds (structured draft)
- Thinkific vs Docebo (structured draft)
- Thinkific vs Absorb LMS (structured draft)
- Thinkific vs LearnDash (structured draft)

## Brand (temporary until Greg decides)
- Site name: TBD (use "LMS Guide" as placeholder)
- Colors: Professional, clean — navy/slate primary, teal accents
- Tone: Practical, buyer-side, lightly opinionated, no vendor-speak
