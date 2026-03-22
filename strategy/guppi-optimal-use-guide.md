# Guppi Optimal Use Guide

*How to get maximum leverage from your AI Chief of Staff*

---

## 1. What Guppi Excels At

### Parallel Research at Scale
**Example from today:** In a single session, Guppi simultaneously scraped 7 Thinkific pages (about, features, pricing, solutions, plus, blog, investors), ran 3 web searches (roadmap, gaps, feature requests), and pulled competitor comparison data — all in under 60 seconds. A human researcher would need hours for the same coverage.

**Pattern:** When Greg says "I need to understand X," Guppi can fan out across dozens of sources simultaneously, extract structured data, and synthesize findings into actionable documents. This is Guppi's single most powerful capability.

### Website Building and Deployment
**Example from today:** Built lms-guide.com as an Astro static site — from research to architecture to content to deployment on Cloudflare Pages. Includes buyer guides, platform reviews, comparison pages, and a lead capture Cloudflare Worker with KV storage.

**Pattern:** Guppi handles the full stack: design decisions, code, content production, deployment, DNS configuration. Greg provides strategic direction; Guppi handles execution.

### Competitive Intelligence
**Example from today:** Produced deep-dive research on Thinkific vs. LearnWorlds, Thinkific vs. LearDash, Docebo, Absorb, and the broader competitive landscape. Mapped buyer criteria across three personas (Experts, Academies, Companies).

**Pattern:** Guppi can maintain a continuously-updated competitive intelligence system — monitoring pricing changes, feature launches, messaging shifts, review sentiment, and social mentions across all competitors.

### Document Production
**Example from today:** Produced 25+ research documents, strategy specs, buyer persona analyses, build briefs, deployment guides, and this document itself. Each document is structured, cross-referenced, and actionable.

**Pattern:** Tell Guppi the audience, purpose, and key questions. Get a well-researched, well-structured document back. Iteration is cheap — drafts can be refined in minutes.

### Workflow Automation
**Example from today:** Built a Cloudflare Worker for lead capture with KV storage, automated research pipelines with save-research.sh, and configured deployment workflows.

**Pattern:** Guppi identifies repetitive processes and builds automation — scripts, workers, cron jobs, monitoring. Once built, these run continuously without attention.

### Multi-Project Management
**Example from today:** Simultaneously managed: (1) lms-guide.com site build, (2) competitive research corpus, (3) quiz app requirements, (4) lead capture infrastructure, (5) strategy documents — all within a single work session.

**Pattern:** Guppi can maintain context across multiple active projects, keeping each moving forward and identifying dependencies between them.

---

## 2. What Guppi Is Less Suited For

### Brand & Taste Decisions
Guppi can produce options, but decisions about visual design, brand voice, and creative direction need Greg's eye. Guppi doesn't have the intuitive feel for what "looks right" or "sounds like us."

**Workaround:** Guppi produces 2-3 options with rationale. Greg picks and refines. Fast iteration beats perfect first drafts.

### High-Stakes External Communications
Investor letters, board communications, major customer emails, press statements — anything where the wrong word has real consequences.

**Workaround:** Guppi drafts, Greg reviews and approves before anything goes out. Never auto-send on sensitive channels.

### Internal Thinkific Systems Access
Guppi can't access Thinkific's internal tools — product analytics, customer databases, financial systems, Slack, internal docs. Intelligence is limited to public information.

**Workaround:** Greg shares relevant data snapshots. Guppi analyzes and produces insights from what's provided. Over time, integrations could bridge some gaps.

### Relationship-Dependent Work
Building rapport with investors, negotiating partnerships, managing team dynamics, reading a room. These require human presence and emotional intelligence.

**Workaround:** Guppi prepares Greg for relationship interactions — research on people, talking points, context briefs, follow-up drafts.

### Real-Time Judgment in Ambiguous Situations
When the answer isn't in the data and requires gut instinct, pattern matching from years of industry experience, or reading between the lines of what someone *didn't* say.

**Workaround:** Guppi provides the facts and analysis. Greg provides the judgment. The combination is powerful.

---

## 3. Optimal Workflow Patterns

### Research → Strategy → Build → Deploy
The full-cycle pattern demonstrated today with lms-guide.com:
1. **Research:** Scrape sources, search broadly, collect raw data
2. **Strategy:** Synthesize research into a plan (architecture, content roadmap, positioning)
3. **Build:** Execute the plan (code the site, write the content, configure infrastructure)
4. **Deploy:** Ship it (DNS, hosting, monitoring, lead capture)

**Key insight:** The entire cycle can happen in a single day. The bottleneck is Greg's review at decision points, not Guppi's execution speed.

### Scout → Deep Dive (Two-Phase Research)
From TOOLS.md — the research protocol that prevents agents from getting lost:
1. **Phase 1 (Scout):** Broad search → collect best URLs → save source list
2. **Phase 2 (Deep Dive):** Scrape each source one by one → extract insights → synthesize

**Key insight:** Never ask for search + read + synthesize in one pass. The scout phase identifies *what's worth reading*; the deep dive extracts *what matters*.

### Parallel Agent Deployment
When multiple independent workstreams exist, spawn sub-agents for each:
- Agent 1: Research competitor A
- Agent 2: Research competitor B  
- Agent 3: Build site infrastructure
- Agent 4: Write content

**Key insight:** Guppi's parallel capacity means 4 hours of sequential human work compresses to ~15 minutes of parallel agent work. Use this aggressively.

### Human Review at Decision Points
Not everything needs review. The pattern:
- **Auto-proceed:** Research, data collection, drafting, infrastructure setup
- **Checkpoint:** Strategic positioning, public-facing content, pricing decisions, external communications
- **Hard stop:** Anything that goes to investors, press, or major customers

**Key insight:** Greg should review strategy and output, not process. "Here are the three options and my recommendation" is better than "what should I do?"

---

## 4. Recommended Daily/Weekly Rhythm

### Daily (delegate to Guppi)
- **Morning email triage** — Categorize inbox, draft routine responses, flag urgent items
- **Calendar prep** — Briefing docs for the day's key meetings
- **Competitive scan** — Quick check for competitor news, pricing changes, notable social mentions
- **Project progress** — Status check on active workstreams, commit code, deploy updates

### Weekly (Guppi produces, Greg reviews)
- **Monday:** Weekly competitive intelligence digest (competitor changes, market news, review trends)
- **Wednesday:** Content production checkpoint (new articles for lms-guide.com, social content drafts)
- **Friday:** Progress report on active projects + recommendations for next week's priorities

### Monthly (collaborative)
- **Board prep materials** — Guppi compiles, Greg reviews and finalizes
- **Market position assessment** — Pricing, feature gaps, competitive movement
- **Content calendar** — Plan next month's thought leadership and editorial output

### Quarterly (strategic)
- **Deep competitive landscape review** — Full refresh of competitor analysis
- **Strategic project prioritization** — Review opportunity backlog, reprioritize
- **Performance review** — What's working, what's not, what to adjust

### How to Give Effective Instructions
**Good:** "Research the top 5 customer training LMS platforms. For each, extract pricing, key features, target market, and notable customers. Produce a comparison table and a 1-paragraph positioning analysis. Write to projects/lms-site/research/customer-training-comparison.md"

**Less good:** "Look into some competitors"

**What makes instructions effective:**
1. **Specific deliverable** — what file or output to produce
2. **Clear scope** — how broad/deep to go
3. **Named sources** if you have preferences
4. **Output format** — table, narrative, bullet points, presentation
5. **Context** — what decision this feeds into

---

## 5. Force Multiplier Opportunities

These are areas where Guppi + Greg together produce 10x what either could alone:

### CEO as Content Engine
Greg has deep industry knowledge and a public platform. Guppi has research speed and production capacity.
- **10x play:** Greg records 10-minute voice memos with thoughts on industry trends. Guppi transforms them into polished LinkedIn posts, blog articles, conference talks, and newsletter content. One hour of Greg's time produces a month of thought leadership content.

### Investor Relations Advantage
Greg understands what investors care about. Guppi can compile the data.
- **10x play:** Before investor meetings, Guppi produces a briefing with peer company performance, analyst sentiment, and market data. Greg walks in better prepared than companies with full IR teams.

### Product Strategy with Market Context
Greg knows the product deeply. Guppi knows what the market is saying.
- **10x play:** Guppi produces monthly "Voice of the Market" reports — aggregating customer feedback, competitor moves, and market trends. Greg synthesizes these with internal data to make better product decisions, faster.

### Speed-to-Market for Growth Experiments
Greg identifies a growth hypothesis. Guppi builds and ships the experiment.
- **10x play:** "What if we built a free quiz tool that generates leads?" → Guppi researches, designs, builds, deploys, and sets up tracking in days, not quarters. If it works, invest more. If not, kill it fast.

### Hiring Intelligence
Greg decides what roles to hire. Guppi provides the context.
- **10x play:** Before opening a role, Guppi researches comparable roles at competitors (titles, responsibilities, comp ranges), identifies strong candidates from public profiles, and produces hiring briefs. Greg makes faster, better-informed decisions.

### Strategic Optionality
Greg needs to evaluate opportunities (M&A, partnerships, markets). Guppi does the legwork.
- **10x play:** "Should we pursue the customer training segment more aggressively?" Guppi produces a market sizing analysis, competitive landscape, customer acquisition cost estimates, and case studies — in 48 hours. Greg gets to make decisions with data, not intuition alone.

---

## Meta-Principle: Guppi Compresses Time

The fundamental value proposition: **Guppi converts weeks into hours.**

Not because the work is better (Greg's judgment is irreplaceable), but because the *time to information* collapses. Research that takes a team a sprint takes Guppi an afternoon. Content that takes a writer a week takes Guppi a day. Monitoring that requires a dedicated analyst runs continuously in the background.

The CEO's most scarce resource is time. Guppi's job is to give it back.

---

*Document produced by Guppi 🦑 — March 21, 2026*
*Based on patterns observed during lms-guide.com build, competitive research, quiz app design, and infrastructure deployment.*
