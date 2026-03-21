Website Build Requirements and Access Plan
Purpose
This document defines what Greg needs to provide so Guppi can take a website project from research and planning into actual build and launch.

It is designed to answer a practical question:

What do I need to get for Guppi so the website project can be executed efficiently?

This includes:

accounts
access
infrastructure
brand/content inputs
preferred technical stack
recommended hosting path


1) Minimum viable setup
If the goal is to let Guppi start building a serious website with minimal friction, the minimum viable setup is:
A. Domain
Need:

a domain name selected
registrar access or DNS edit access

Examples:

GoDaddy
Namecheap
Porkbun
Cloudflare Registrar

Best practice:

ideally manage DNS through Cloudflare even if the domain is registered elsewhere
B. Hosting / deployment target
Need:

a chosen hosting platform
account access for deployment and environment setup

Recommended default for a content-heavy, SEO-friendly site:

Vercel (best if using Next.js)
Cloudflare Pages (best if using a static/Astro-style setup)
C. Source control
Need:

GitHub repo access
preferably admin or write access to the repo where the site will live

Why:

version control
structured collaboration
easier deployment
easier rollback
D. Content inputs
Need:

current research docs
positioning direction
disclosure requirements
any existing copy or notes

For this project specifically:

Thinkific / LMS research docs become the raw content source
E. Brand inputs
Need at minimum:

site name / brand name
logo if one exists
preferred colors or visual direction
tone of voice
F. Analytics / forms decision
Need:

analytics preference
form destination / CRM destination

Examples:

Plausible
GA4
HubSpot form
simple email capture
custom form endpoint


2) Recommended stack for this project
For the Thinkific/LMS research site, my default recommendation would be:
Option A: Best balanced build
Framework: Next.js
Hosting: Vercel
DNS: Cloudflare
Repo: GitHub
Content source: markdown or structured JSON/content files at first
Forms: simple form endpoint or HubSpot later
Analytics: Plausible or GA4

Why:

strong SEO
flexible content architecture
easy comparison pages and structured templates
good performance
easier future expansion into richer app behavior if needed
Option B: Simpler content-first stack
Framework: Astro
Hosting: Cloudflare Pages or Netlify
DNS: Cloudflare
Repo: GitHub
Content source: markdown-first

Why:

very fast
excellent for content sites
simpler for static publishing
lower complexity
My recommendation
For this specific project, I would lean:

Astro if the site is mostly editorial/content/comparison driven
Next.js if you expect richer interactive tools, dynamic comparison tables, or account/app-like behaviors later


3) Ideal access package for Guppi
If you want Guppi to move quickly, the ideal access package is:
Domain / DNS
domain chosen
DNS managed in Cloudflare
Guppi has access to Cloudflare or instructions for how changes will be applied quickly
Hosting
Vercel or Cloudflare Pages account available
project created or permission granted
environment variables manageable
GitHub
repo created
Guppi has write access
deployment connected to repo
Content / docs
Thinkific folder in Drive remains accessible
research docs and future drafts are stored there
a clear source-of-truth doc or folder for content decisions
Optional but very useful
a staging domain/subdomain
e.g. staging.example.com
a design inspiration file / examples list
analytics account access
Search Console access
if using forms: email or CRM destination already decided


4) What Greg needs to decide before build starts
A. What the site is
Need clear decision on:

standalone editorial site?
microsite?
Thinkific-adjacent lead-gen site?
branded neutral-seeming buyer guide with disclosure?
B. Disclosure model
Because this site is intended to generate leads toward Thinkific while remaining genuinely useful and fair, disclosure should be defined early.

Questions:

Will the site disclose affiliation / relationship explicitly?
Where will disclosure live?
Will recommendations be editorial, affiliate, strategic partner-driven, or some blend?
C. CTA model
Need clarity on what a successful conversion is:

lead form
book a consult
request a recommendation
get a platform shortlist
download a buyer guide
contact sales / partner
D. Maintenance model
Need clarity on:

who will maintain content
whether Guppi should keep updating pages
whether content will stay markdown/docs-driven or move into CMS later


5) Website project input checklist
Business / strategy inputs
site purpose
target audience
conversion goal
disclosure approach
target competitors/categories
target content areas
Brand inputs
brand/site name
logo
design style preferences
example sites liked/disliked
Technical inputs
domain
registrar
DNS access
hosting account
GitHub repo access
analytics preference
forms/CRM preference
Content inputs
research docs
priority pages to build first
any existing copy
case studies / examples / references


6) Recommended first build sequence
Phase 1: Build cockpit
choose domain
choose stack
create repo
connect hosting
connect DNS
define disclosure and CTA model
Phase 2: Content system
define page templates
define sitemap
build first pages
create comparison architecture
define schema / metadata structure
Phase 3: Launch
QA
analytics
Search Console
form routing
performance review
submit sitemap


7) Recommended hosting choices
Best default hosting for this project
Vercel
Use if:

Next.js is chosen
richer dynamic content is expected
you want easy deployment previews
Cloudflare Pages
Use if:

Astro/static build is chosen
speed and simplicity are the main goals
you want strong edge delivery and clean static hosting
DNS
Recommended:

Cloudflare DNS

Reason:

easy management
good performance
convenient for future routing and security improvements


8) What Guppi can do once setup exists
Once the above is in place, Guppi can realistically:

design the site architecture
create page templates
draft and structure content
build the site code
manage repo workflow
connect deployment
update content over time
create SEO/LLM-friendly source pages

Without that setup, progress will stay in the planning/doc stage.


9) Minimum ask from Greg
If Greg wants to unblock the website project quickly, the shortest useful checklist is:

buy or choose the domain
choose hosting:
Vercel or Cloudflare Pages
create or provide GitHub repo access
decide whether the site should be:
Astro/static
or Next.js
decide the CTA / lead capture model
decide disclosure approach
provide any available brand assets

That is enough to move from research into real build planning.


Bottom line
To build the site effectively, Guppi does not need magic. It needs a proper build cockpit:

domain
DNS
hosting
repo
access
brand direction
conversion model
disclosure approach

The ideal setup is:

Cloudflare DNS
GitHub repo
Vercel or Cloudflare Pages
Astro or Next.js
current Thinkific research docs as content input

That would be enough to start real implementation.

