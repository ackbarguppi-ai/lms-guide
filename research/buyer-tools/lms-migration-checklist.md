# LMS Migration Checklist

*A step-by-step guide for migrating from one Learning Management System to another. Follow these phases to minimize disruption, preserve critical data, and get your team productive on the new platform quickly.*

---

## Before You Start: Migration Principles

1. **Nothing gets left behind by accident** — audit everything first, then decide what to migrate vs. archive vs. retire
2. **Test with real data, not sample data** — your SCORM packages, your user roles, your edge cases
3. **Communicate early and often** — learners handle change well when they know what's coming and why
4. **Plan for rollback** — keep the old LMS accessible (read-only) for at least 90 days post-migration
5. **Assign a migration owner** — one person accountable for the end-to-end process, even if a team does the work

**Estimated Timeline:** 4–12 weeks depending on content volume, integrations, and organizational complexity.

---

## Phase 1: Discovery & Audit (Weeks 1–2)

*Before migrating anything, know exactly what you have.*

### 1.1 Content Audit

- [ ] Export a complete list of all courses from the current LMS
- [ ] Categorize each course: Active, Archived, Deprecated, or Redundant
- [ ] Record format for each course: SCORM, xAPI, native, video, PDF, HTML
- [ ] Note which courses have been updated in the past 12 months
- [ ] Identify courses with external dependencies (embedded links, third-party tools, LTI connections)
- [ ] Flag courses that need to be rebuilt vs. migrated as-is
- [ ] Document content ownership — who is the subject matter expert for each course?

**Best Practice:** This is a good time to retire old content. If nobody's taken a course in 18 months and it's not compliance-required, don't migrate it — archive it.

| Course Name | Status | Format | Last Updated | Migrate? | Owner |
|---|---|---|---|---|---|
| `Example: New Hire Onboarding` | Active | Native | 2025-11 | Yes | `HR Team` |
| `Example: 2023 Compliance` | Deprecated | SCORM 1.2 | 2023-06 | No — Archive | `Compliance` |

### 1.2 User Data Audit

- [ ] Export full user list with roles and permissions
- [ ] Document all user roles and what each can access
- [ ] Identify how users are currently provisioned (manual, SSO, SCIM, CSV)
- [ ] Map user groups, departments, and organizational units
- [ ] Count active vs. inactive users
- [ ] Check for duplicate or orphaned accounts
- [ ] Identify external users (partners, customers, contractors) vs. internal

### 1.3 Completion & Compliance Records

- [ ] Export all historical completion records
- [ ] Export certificate records with dates and expiration
- [ ] Document compliance training requirements and deadlines
- [ ] Identify any regulatory requirements for record retention (e.g., OSHA requires 3+ years)
- [ ] Confirm the new LMS can import historical completions (format, fields, limitations)
- [ ] Determine which records MUST be migrated vs. archived in a separate system

**⚠️ Critical:** Compliance records are often the hardest part of migration. If your new LMS can't import historical completions natively, plan for a workaround: CSV archive accessible to managers, a read-only legacy portal, or manual entry for active compliance items.

### 1.4 Integration Inventory

- [ ] List all systems integrated with the current LMS

| Integration | Type | Direction | Critical? | New LMS Equivalent |
|---|---|---|---|---|
| `Example: Okta` | SSO (SAML) | Inbound | Yes | `Native SAML support` |
| `Example: Workday` | HRIS (API) | Bidirectional | Yes | `Custom API — needs dev` |
| `Example: Zoom` | Virtual classroom | Outbound | Yes | `Native integration` |
| `Example: Slack` | Notifications | Outbound | No | `Zapier webhook` |

- [ ] Identify which integrations have native support on the new LMS
- [ ] Identify which integrations require custom development
- [ ] Get API credentials and documentation for each integration
- [ ] Determine integration priority order (SSO first, always)

### 1.5 Branding & Customization Audit

- [ ] Document current branding (logos, colors, fonts, CSS customizations)
- [ ] Screenshot current learner-facing pages (dashboard, course player, login)
- [ ] Export custom email templates
- [ ] Document custom domain configuration (e.g., learn.company.com)
- [ ] Note any custom JavaScript or third-party tracking (Google Analytics, GTM)

---

## Phase 2: Planning & Setup (Weeks 2–4)

### 2.1 Migration Plan

- [ ] Define scope: what's migrating, what's being rebuilt, what's being archived
- [ ] Assign roles and responsibilities (migration owner, content leads, IT lead, comms lead)
- [ ] Set go-live date and work backward to build the timeline
- [ ] Define success criteria — how will you know the migration is complete?
- [ ] Identify risks and mitigation plans
- [ ] Schedule stakeholder check-ins (weekly during migration)

### 2.2 New LMS Configuration

- [ ] Set up the new LMS instance
- [ ] Configure branding (logo, colors, custom domain)
- [ ] Set up SSO / authentication
- [ ] Configure user roles and permissions
- [ ] Set up organizational structure (groups, departments, sub-accounts)
- [ ] Configure notification settings and email templates
- [ ] Set up the course catalog structure (categories, tags)
- [ ] Configure compliance settings (due dates, recertification rules)
- [ ] Enable analytics and reporting dashboards
- [ ] Set up a sandbox/test environment (separate from production)

### 2.3 Content Migration Preparation

- [ ] Export all SCORM/xAPI packages from the current LMS
- [ ] Export all native content (documents, videos, images) — or confirm they're in a separate DAM/CMS
- [ ] Download all certificates and badge templates
- [ ] Export quiz/assessment question banks
- [ ] Organize exports into folders matching the new course structure
- [ ] Test importing 2–3 sample courses into the new LMS sandbox

**Best Practice:** Start with your simplest course (basic video + quiz) and your most complex course (SCORM with prerequisites). If both import cleanly, you're in good shape.

### 2.4 User Migration Preparation

- [ ] Map old user roles → new user roles
- [ ] Clean up user data (remove duplicates, fix formatting issues)
- [ ] Prepare user import file in the new LMS's required format
- [ ] Test importing a batch of 10–20 users into sandbox
- [ ] Verify SSO works with test accounts before bulk migration
- [ ] Plan the user communication sequence (see Phase 5)

### 2.5 URL & Access Planning

- [ ] List all URLs that point to the current LMS (bookmarks, emails, intranet links, documentation)
- [ ] Plan URL redirects from old LMS paths to new LMS equivalents
- [ ] Coordinate with IT to update DNS records (custom domain transfer)
- [ ] Update intranet and wiki links
- [ ] Identify any hard-coded LMS links in email templates, onboarding docs, or other systems

---

## Phase 3: Content Migration & Testing (Weeks 4–8)

### 3.1 Content Import

- [ ] Import all SCORM/xAPI packages into the new LMS
- [ ] Upload or recreate native content (videos, PDFs, HTML pages)
- [ ] Rebuild courses that can't be directly migrated
- [ ] Set up learning paths and prerequisites
- [ ] Configure enrollment rules and access restrictions
- [ ] Set up assessments, quizzes, and grading
- [ ] Configure certificates and badges
- [ ] Import or recreate discussion forums (if applicable)
- [ ] Set up drip schedules and time-based release rules

### 3.2 Testing — Content

- [ ] Test every SCORM package: launches correctly, tracks progress, records completion
- [ ] Verify video playback (multiple browsers, mobile devices)
- [ ] Test all quiz types — submit answers, check scoring, review feedback
- [ ] Verify certificates generate correctly with proper data
- [ ] Test learning path progression — prerequisites enforce correctly
- [ ] Verify drip content releases on schedule
- [ ] Check accessibility: screen reader compatibility, keyboard navigation, color contrast

**Create a test matrix:**

| Course | Launches? | Tracks Progress? | Records Completion? | Certificate? | Mobile OK? | Issues |
|---|---|---|---|---|---|---|
| `Onboarding 101` | ✅ | ✅ | ✅ | ✅ | ✅ | None |
| `Safety Training` | ✅ | ✅ | ⚠️ | ✅ | ✅ | `SCORM completion not firing — needs resave in Articulate` |

### 3.3 Testing — Users & Roles

- [ ] Import test users across all role types
- [ ] Verify SSO login works end-to-end
- [ ] Test role-based access: learners see only learner views, managers see team data, admins see everything
- [ ] Verify auto-enrollment rules fire correctly
- [ ] Test self-registration workflow (if applicable)
- [ ] Verify user profile data imported correctly
- [ ] Test manager delegation and team oversight features

### 3.4 Testing — Integrations

- [ ] Test SSO login/logout flow with production IdP
- [ ] Test HRIS sync: new user appears in LMS, role changes propagate
- [ ] Test video conferencing integration: sessions create and link correctly
- [ ] Test notification integrations (Slack, Teams, email)
- [ ] Test CRM integration (if applicable): enrollment and completion events flow correctly
- [ ] Test API: key operations work (create user, enroll, pull reports)
- [ ] Test webhooks fire for critical events

### 3.5 Testing — Reporting

- [ ] Verify standard reports produce expected data
- [ ] Build and test custom reports needed for your use cases
- [ ] Test compliance reports: accurate due dates, overdue alerts working
- [ ] Verify historical completion data imported correctly (spot-check 20+ records)
- [ ] Test scheduled report delivery
- [ ] Confirm data exports (CSV, Excel) are clean and complete

### 3.6 Historical Data Migration

- [ ] Import historical completion records
- [ ] Import learner transcripts
- [ ] Spot-check completion records against source data (minimum 5% sample)
- [ ] Verify compliance-critical records are accurate (100% check for regulated training)
- [ ] Document any records that couldn't be migrated and where they're archived

---

## Phase 4: Integrations Reconnection (Weeks 5–8)

*Run in parallel with content testing once the new LMS is stable.*

- [ ] **SSO / Identity Provider** — configure and test with IT
  - SAML metadata exchanged
  - Test login with multiple user types
  - Test forced authentication / session timeout
- [ ] **HRIS** — configure user sync
  - Map fields between systems
  - Run initial sync and verify
  - Set up ongoing sync schedule (daily recommended)
- [ ] **Video Conferencing** — configure virtual classroom
  - Test creating sessions from within the LMS
  - Verify attendance tracking
- [ ] **Communication Tools** — set up notifications
  - Configure Slack/Teams channels for alerts
  - Test enrollment and completion notifications
- [ ] **CRM** — connect customer/partner training data
  - Map events to CRM fields
  - Test data flow both directions
- [ ] **Analytics/BI** — connect reporting pipeline
  - Set up data connector or API feed
  - Verify dashboards populate correctly
- [ ] **Automation** — reconnect Zapier/Make workflows
  - Recreate zaps with new LMS triggers/actions
  - Test each automation end-to-end
- [ ] **Calendar** — test calendar sync (Google Calendar, Outlook)

---

## Phase 5: Communication Plan (Start at Week 3)

### 5.1 Internal Stakeholders

| When | Who | Message |
|---|---|---|
| 4 weeks before go-live | Leadership & managers | We're switching LMS. Here's why, the timeline, and what we need from you. |
| 3 weeks before go-live | All employees | Your learning platform is changing. Your progress is preserved. Here's what to expect. |
| 1 week before go-live | All employees | The new LMS launches on [date]. Here's how to log in and a quick-start guide. |
| Go-live day | All employees | It's live! Log in here. Quick-start video attached. Support channel: [link]. |
| 1 week after go-live | All employees | Check-in: How's it going? FAQs answered, support available at [link]. |

### 5.2 Communication Checklist

- [ ] Draft announcement emails for each milestone above
- [ ] Create a quick-start guide for learners (max 1 page)
- [ ] Record a 2-minute "what's new" walkthrough video
- [ ] Create an FAQ document addressing common concerns
- [ ] Set up a dedicated support channel (Slack, Teams, or email alias) for migration questions
- [ ] Prepare manager talking points for team meetings
- [ ] Update the company intranet with new LMS links and resources
- [ ] Notify external learners (customers, partners) if they're affected

### 5.3 Training for Admins & Managers

- [ ] Admin training on the new platform (minimum 2 sessions before go-live)
- [ ] Manager training on team oversight and reporting
- [ ] Train-the-trainer session for L&D team
- [ ] Document new processes: how to create a course, enroll users, pull reports
- [ ] Create an internal admin playbook / runbook

---

## Phase 6: Cutover & Go-Live (Week 8–10)

### 6.1 Pre-Cutover (1 Week Before)

- [ ] Final content review — all courses tested and approved
- [ ] Final user import — all users in the new system with correct roles
- [ ] All integrations tested and working
- [ ] Historical data verified
- [ ] Reporting confirmed accurate
- [ ] Quick-start guide and FAQ published
- [ ] Support team briefed and ready
- [ ] Go/no-go meeting with stakeholders — get explicit sign-off

### 6.2 Cutover Day

- [ ] Set the old LMS to read-only (don't delete it yet)
- [ ] Activate the new LMS for all users
- [ ] Switch DNS for custom domain (e.g., learn.company.com → new LMS)
- [ ] Enable URL redirects from old LMS paths
- [ ] Send go-live announcement to all learners
- [ ] Monitor support channels actively for the first 4–8 hours
- [ ] Verify SSO is working (this is the #1 day-one blocker)
- [ ] Check that auto-enrollments fire correctly
- [ ] Verify email notifications are sending from the new system
- [ ] Run a quick smoke test: complete a course end-to-end as a test learner

### 6.3 Common Go-Live Issues (and Fixes)

| Issue | Likely Cause | Quick Fix |
|---|---|---|
| Users can't log in | SSO misconfiguration | Check IdP metadata, clear caches, verify user mapping |
| SCORM courses stuck on "incomplete" | API version mismatch | Re-export from authoring tool targeting the correct SCORM version |
| Completion records missing | Import didn't include all fields | Re-run import with corrected field mapping |
| Emails going to spam | New sender domain not authenticated | Configure SPF, DKIM, DMARC for the LMS email domain |
| Course links from old system 404 | Redirects not configured | Set up 301 redirects from old URLs to new equivalents |
| Reports show wrong numbers | Timezone or date format mismatch | Align timezone settings between systems |

---

## Phase 7: Post-Migration (Weeks 10–12+)

### 7.1 First Week

- [ ] Monitor support ticket volume and categories daily
- [ ] Fix any critical issues immediately
- [ ] Send a Week 1 check-in to all learners (see communication plan)
- [ ] Gather initial feedback from admins, managers, and a sample of learners
- [ ] Verify all scheduled reports are delivering correctly
- [ ] Confirm compliance deadlines and notifications are firing

### 7.2 First Month

- [ ] Review adoption metrics: login rates, course starts, completion rates
- [ ] Compare to baseline from the old LMS — are numbers tracking?
- [ ] Address the top 5 support issues with documentation or training
- [ ] Conduct a retrospective with the migration team: what worked, what didn't
- [ ] Optimize: adjust notifications, clean up catalog organization, refine reports
- [ ] Archive or sunset the old LMS access (after confirming all data is preserved)
- [ ] Document any workarounds in place and plan to resolve them

### 7.3 Clean-Up

- [ ] Remove old LMS bookmarks and links across all company properties
- [ ] Update employee onboarding documentation
- [ ] Update vendor management records and contracts
- [ ] Close out the old LMS contract (mind the cancellation terms)
- [ ] Ensure old LMS data export is stored securely for your retention period
- [ ] Delete old LMS instance only after legal/compliance confirms data is preserved
- [ ] Celebrate. Migrations are hard. Your team earned it.

---

## Migration Tracker

Use this to track overall progress across phases:

| Phase | Status | Owner | Target Date | Notes |
|---|---|---|---|---|
| 1. Discovery & Audit | ⬜ Not Started | | | |
| 2. Planning & Setup | ⬜ Not Started | | | |
| 3. Content Migration & Testing | ⬜ Not Started | | | |
| 4. Integration Reconnection | ⬜ Not Started | | | |
| 5. Communication Plan | ⬜ Not Started | | | |
| 6. Cutover & Go-Live | ⬜ Not Started | | | |
| 7. Post-Migration | ⬜ Not Started | | | |

**Status Key:** ⬜ Not Started | 🔄 In Progress | ✅ Complete | ⚠️ Blocked

---

## Risk Register

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| SCORM packages incompatible with new LMS | High | Medium | Test all packages in sandbox before cutover; have authoring tool access ready to re-export |
| Historical compliance records fail to import | High | Medium | Validate import with 100% check on regulated records; prepare archive as backup |
| SSO configuration delays go-live | High | Low | Start SSO setup in Week 2; test weekly; have password-based fallback ready |
| User adoption drops after switch | Medium | Medium | Strong communication plan, manager champions, quick-start guide, first-week support blitz |
| Key integration breaks post-cutover | High | Low | Test all integrations in staging; have rollback plan for each integration |
| Timeline slips due to content volume | Medium | High | Prioritize active courses; defer archived content to post-launch |

---

*Published by [lms-guide.com](https://lms-guide.com) — Independent LMS reviews, comparisons, and buyer tools.*
