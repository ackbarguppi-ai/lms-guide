# Quiz & Assessment App — Design Spec

**Date:** 2026-03-21
**Status:** Initial architecture and design specification
**Audience:** CEO, product, and engineering

---

## 1. App Overview

### What It Is
A Thinkific App Store app that extends Thinkific's native quiz capabilities with advanced question types, timed assessments, attempt controls, a centralized gradebook, and question-level analytics. It fills the confirmed gaps between Thinkific's current offering and what competitors like LearnWorlds provide.

### Who It's For
- **Thinkific site owners** who need more than MCQ quizzes — certification programs, compliance training, professional development, academic courses
- **Three buyer segments:** Experts building premium courses, Academies running formal training programs, Companies doing customer/employee education

### How It Fits in the Ecosystem
The app does NOT replace Thinkific's native quizzes. It complements them:
- **Thinkific handles:** MCQ quizzes, surveys (5 types), assignments, AI quiz generation, question banks, randomization, passing grades
- **The app adds:** Advanced question types, timed exams, attempt limits, gradebook, item analytics, rubric grading, and (later) interactive video, AI grading, proctoring

Think of it as "Thinkific Quizzes Pro" — when native quizzes aren't enough, creators install this app.

---

## 2. Technical Architecture

### 2.1 High-Level Architecture

```
┌──────────────────────────────────────────────────────┐
│                   Thinkific Platform                  │
│                                                      │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  Course   │  │   Course     │  │  Admin Panel  │  │
│  │  Builder  │  │   Player     │  │  (Site Owner) │  │
│  └────┬─────┘  └──────┬───────┘  └───────┬───────┘  │
│       │               │                  │           │
│       │          ┌────▼────┐             │           │
│       │          │  iframe  │             │           │
│       │          │  embed   │             │           │
│       │          └────┬────┘             │           │
└───────┼───────────────┼──────────────────┼───────────┘
        │               │                  │
   OAuth/API      Assessment UI      App Dashboard
        │               │                  │
┌───────▼───────────────▼──────────────────▼───────────┐
│                Quiz & Assessment App                  │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │  Assessment   │  │  Assessment  │  │ Gradebook │  │
│  │  Builder      │  │  Engine      │  │ & Analytics│ │
│  │  (Admin UI)   │  │  (Learner)   │  │ Dashboard │  │
│  └──────┬────────┘  └──────┬───────┘  └─────┬─────┘  │
│         │                  │                │         │
│  ┌──────▼──────────────────▼────────────────▼──────┐  │
│  │              Application Backend                │  │
│  │         (Next.js API Routes / Node.js)          │  │
│  └──────────────────────┬──────────────────────────┘  │
│                         │                             │
│  ┌──────────────────────▼──────────────────────────┐  │
│  │              PostgreSQL Database                 │  │
│  │   (Questions, Attempts, Grades, Rubrics, etc.)  │  │
│  └─────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

### 2.2 Web App Framework
**Next.js 14+ (App Router)** with React — handles both the admin dashboard and the embedded learner-facing assessment UI in a single codebase.

### 2.3 Thinkific App Store Integration

**App type:** Embedded app (iframe in Course Player + standalone admin dashboard)

**Integration points:**
1. **Custom Lesson Type** — registers "Advanced Assessment" as a new lesson type in the course builder. When a creator adds this lesson, it opens the app's assessment builder.
2. **Course Player Embed** — assessments render inside Thinkific's Course Player via iframe. Learner stays in the Thinkific experience.
3. **Admin Panel Link** — "Gradebook & Analytics" accessible from Thinkific admin sidebar (app link).

**Authentication:**
- OAuth 2.0 via Thinkific — site owners authorize the app during installation
- Learner sessions: JWT token passed via iframe postMessage from Thinkific Course Player
- No separate login required for learners or admins

### 2.4 API Integration Points

| Thinkific API | What We Use It For | Direction |
|--------------|-------------------|-----------|
| **REST: Courses & Chapters** | Read course structure for organizing assessments, pull lesson content for AI question gen | App ← Thinkific |
| **REST: Enrollments** | Check enrollment status, mark lesson complete on pass | App ↔ Thinkific |
| **REST: Users** | Pull user profiles for gradebook, analytics | App ← Thinkific |
| **Webhooks: enrollment.created** | Auto-provision assessment access when student enrolls | Thinkific → App |
| **Webhooks: enrollment.completed** | Update gradebook with course completion status | Thinkific → App |
| **Webhooks: user.created** | Sync new users | Thinkific → App |
| **OAuth 2.0** | Admin authentication, app installation | Bidirectional |
| **iframe postMessage** | Learner identity, lesson completion signaling | Bidirectional |

### 2.5 Database Design: What Lives Where

**In Thinkific (don't duplicate):**
- User accounts and profiles
- Course structure (courses, chapters, lessons)
- Enrollment records
- Native quiz results (MCQ quizzes)
- Certificates
- Payment/subscription data

**In Our Database (PostgreSQL):**
- Everything assessment-related that Thinkific can't store:
  - Questions and question banks
  - Assessment configurations (timer, attempts, randomization settings)
  - Student attempts and individual answers
  - Grades and rubric evaluations
  - Analytics aggregations
  - Rubric definitions

### 2.6 Multi-Tenancy
Each Thinkific site = one tenant. Data isolation via `site_id` foreign key on all tables. Row-level security in PostgreSQL.

---

## 3. Core Features — MVP (Tier 1)

### 3.1 Question Type Engine

Eight new question types (Thinkific already handles MCQ):

| Type | How It Works | Auto-Gradable? |
|------|-------------|----------------|
| **Fill-in-the-blank** | Text input with accepted answers list (exact match or fuzzy). Multiple blanks per question supported. | ✅ Yes |
| **Matching** | Two columns — learner connects pairs via drag or dropdown. | ✅ Yes |
| **Drag-and-drop ordering** | Learner arranges items in correct sequence. | ✅ Yes |
| **Hotspot** | Click on correct region(s) of an image. Creator defines clickable zones. | ✅ Yes |
| **Short answer** | 1-3 sentence text response. Can auto-grade against keyword list or send to rubric. | ⚠️ Semi (keyword match) |
| **Essay / long-form** | Multi-paragraph text with rich formatting. Always instructor-graded (or AI-graded in Tier 2). | ❌ Manual |
| **True/False** | Binary choice with explanation. | ✅ Yes |
| **Image labeling** | Drag labels onto positions on an image. | ✅ Yes |

**Builder UX:** Drag-and-drop question builder. Each type has a tailored editor (e.g., hotspot editor lets creator draw zones on uploaded image). Preview mode shows exactly what learner will see.

### 3.2 Timed Assessments

- Set duration in minutes (per assessment, not per question)
- Server-side timer — starts when learner opens assessment, countdown stored in DB
- Client shows countdown timer; auto-submits when time expires
- Grace period: configurable 30-60 second warning before auto-submit
- Resume policy: if learner disconnects, timer keeps running (configurable: allow resume or not)
- Timer visible but not manipulable (no client-side clock)

**Implementation:** Timer starts on first question load. Server records `started_at` timestamp. On submit, server validates `submitted_at - started_at <= allowed_duration + grace`. Rejects late submissions.

### 3.3 Attempt Limits

- Configure: 1, 2, 3, 5, 10, or unlimited attempts
- Scoring mode: Best score, Last score, or Average of all attempts
- All attempts recorded with full detail (answers, time, score)
- After max attempts: show final score and lock assessment
- Cooldown period between attempts (optional): e.g., must wait 24 hours before retrying

### 3.4 Centralized Gradebook

**Instructor view:**
- Table: Students (rows) × Assessments (columns) with scores
- Filter by: course, assessment, date range, pass/fail status
- Bulk actions: export CSV, override grades, send notifications
- Click any cell → drill into attempt details
- Student profile view: all grades for one student across all courses

**Student view:**
- "My Grades" page: all assessments with scores, pass/fail, attempts used
- Click to review attempt (if review is enabled by instructor)
- Overall course grade (weighted or unweighted, configurable by instructor)

### 3.5 Question-Level Analytics (Item Analysis)

Per assessment, per question:
- **Difficulty index:** % of students who answered correctly
- **Discrimination index:** How well the question separates high-performers from low-performers
- **Distractor analysis:** For each wrong answer, what % of students selected it
- **Average time spent** on the question
- **Skip rate:** % of students who skipped the question
- **Score distribution:** Histogram of scores for the full assessment

Dashboard with visual charts. Exportable to CSV. Flag questions that are too easy (>90% correct), too hard (<20% correct), or non-discriminating.

### 3.6 Rubric-Based Grading

**Rubric builder:**
- Define criteria (e.g., "Argument quality", "Evidence", "Writing clarity")
- Define levels per criterion (e.g., Excellent / Good / Adequate / Poor) with point values
- Rubric templates: save and reuse across assessments
- Attach rubric to essay, short answer, or assignment questions

**Grading workflow:**
- Instructor sees student response alongside rubric
- Click level per criterion → points auto-calculate
- Add written feedback per criterion (optional)
- Student sees rubric with highlighted levels and total score

---

## 4. Phase 2 Features (Tier 2)

### 4.1 Interactive Video Quizzes
- Embed questions at specific timestamps in Thinkific video lessons
- Supported types: MCQ, true/false, short answer, reflection prompt
- Video pauses at question point; resumes after answer
- Option: require correct answer to continue (gate video progression)
- Results tracked in gradebook alongside regular assessments
- **Technical approach:** Video overlay UI rendered by app; needs video player API access or custom player wrapper

### 4.2 AI-Powered Grading & Feedback
- AI evaluates essay/short-answer responses against the rubric
- Produces: suggested score per criterion + written feedback
- Instructor reviews AI suggestion: accept, modify, or override
- Uses GPT-4 or Claude API with rubric as system prompt
- Configurable: instructor can choose "AI grade + auto-publish" for low-stakes, or "AI suggest + instructor review" for high-stakes

### 4.3 Branching / Adaptive Quiz Logic
- Define rules: "If score on Section A < 70%, show Section B (remediation)"
- Tag learners based on quiz results (e.g., "needs-review", "advanced")
- Conditional next-steps on results screen: different messaging for pass vs fail
- Webhook triggers based on outcomes (for external automations)

### 4.4 Peer Review Assignments
- Instructor assigns N peer reviews per student
- Anonymous option (reviewer doesn't see author name)
- Reviewer grades using instructor's rubric
- Instructor moderates: see all peer grades, override if needed
- Final grade: instructor-set weight between self, peer, and instructor grades

### 4.5 Anti-Cheating Measures
- **Tab-switch detection:** Log when learner leaves the assessment tab. Optional: auto-submit after N tab switches.
- **Copy prevention:** Disable right-click, text selection, and keyboard shortcuts on assessment content
- **Fullscreen mode:** Assessment launches in fullscreen; warns on exit
- **Question randomization per student** (extends Thinkific's existing pool randomization)
- **Server-side answer timing:** Detect suspiciously fast responses

---

## 5. Phase 3 Features (Tier 3)

### 5.1 Adaptive Difficulty (CAT)
- Questions tagged with difficulty level (1-5)
- Algorithm selects next question based on performance so far
- Produces competency score with fewer questions than fixed-length test
- Based on Item Response Theory (IRT) — industry standard for GRE, GMAT

### 5.2 Proctored Exams
- **Basic:** Webcam photo at start (identity check) + periodic random snapshots
- **Standard:** Continuous webcam recording + screen recording
- **Advanced:** Integration with ProctorU or Proctorio for AI-monitored sessions
- Instructor review dashboard for flagged incidents

### 5.3 Spaced Repetition Engine
- Missed questions auto-added to personal review deck
- SM-2 algorithm schedules reviews at increasing intervals
- "Daily review" mode: 5-10 questions from across all courses
- Mastery tracking: question marked "mastered" after N correct reviews

### 5.4 AI-Generated Questions from Course Content
- Ingest full course content (all chapters, not just current)
- Generate questions across all supported types and difficulty levels
- Creator reviews and edits before publishing
- Difficulty calibration: auto-adjust difficulty tags based on student performance data

---

## 6. UX Design

### 6.1 Learner Experience

**In the Course Player (embedded):**
- Assessment appears as a lesson in the course outline (custom lesson type icon)
- Clicking opens the assessment UI in an iframe within the Course Player
- Clean, focused UI: question + answers + navigation + timer (if timed)
- Progress bar showing question X of Y
- "Flag for review" button — mark questions to revisit before submitting
- On submit: results screen (configurable by instructor)
- Completion signals back to Thinkific → lesson marked complete, course progress updates

**Mobile:**
- Fully responsive — all question types work on mobile
- Touch-friendly: drag-drop uses touch events, hotspot areas are finger-sized
- Timer stays visible (sticky header)
- Offline support: not in MVP (requires too much complexity)

### 6.2 Admin Experience

**Assessment Builder:**
- Left sidebar: question bank / question list
- Center: question editor (type-specific)
- Right sidebar: assessment settings (timer, attempts, randomization, passing grade)
- Drag to reorder questions
- Preview button: take the assessment as a student would see it
- Import: paste questions, upload CSV, or generate with AI

**Gradebook:**
- Default view: matrix of students × assessments
- One-click drill-down to attempt details
- Bulk grade/export actions
- Search and filter students

**Analytics Dashboard:**
- Assessment overview: avg score, pass rate, completion rate
- Question analysis: difficulty, discrimination, time spent
- Trend charts: performance over time
- Export everything to CSV

### 6.3 Navigation Flow

```
Thinkific Admin → App Store → Install Quiz App
                                    ↓
                            App Dashboard
                           /      |       \
                    Builder   Gradebook   Analytics
                       ↓
              Create Assessment → Add Questions → Configure Settings → Publish
                                                                        ↓
                                                              Appears in Course Player
                                                                        ↓
                                                              Student Takes Assessment
                                                                        ↓
                                                              Results → Gradebook
```

---

## 7. Data Model

### Core Entities

```
Site (tenant)
├── QuestionBank
│   └── Question
│       ├── type (fill_blank | matching | drag_drop | ordering | hotspot | short_answer | essay | true_false | image_label)
│       ├── content (JSON — question text, media, answer options, correct answers, zones, etc.)
│       ├── difficulty (1-5)
│       ├── tags[]
│       └── points (default point value)
│
├── Assessment
│   ├── title, description
│   ├── course_id (Thinkific course reference)
│   ├── lesson_id (Thinkific lesson reference)
│   ├── mode (exam | practice | survey)
│   ├── settings
│   │   ├── time_limit_minutes (null = untimed)
│   │   ├── max_attempts (null = unlimited)
│   │   ├── scoring_mode (best | last | average)
│   │   ├── passing_percentage
│   │   ├── randomize_questions (boolean)
│   │   ├── randomize_answers (boolean)
│   │   ├── show_correct_answers (never | after_pass | always)
│   │   ├── allow_back_navigation (boolean)
│   │   └── cooldown_hours (null = none)
│   └── AssessmentQuestion (join table with position, point override)
│       └── → Question
│
├── Attempt
│   ├── assessment_id
│   ├── user_id (Thinkific user reference)
│   ├── attempt_number (1, 2, 3...)
│   ├── started_at, submitted_at
│   ├── score, max_score, percentage
│   ├── passed (boolean)
│   ├── status (in_progress | submitted | graded | timed_out)
│   └── Answer[]
│       ├── question_id
│       ├── response (JSON — varies by question type)
│       ├── is_correct (boolean, null for manual-grade)
│       ├── points_earned
│       ├── time_spent_seconds
│       └── feedback (text, from auto or instructor)
│
├── Rubric
│   ├── title
│   └── RubricCriterion[]
│       ├── name, description
│       └── RubricLevel[]
│           ├── label (Excellent, Good, etc.)
│           ├── points
│           └── description
│
├── Grade (rubric evaluation)
│   ├── attempt_id + answer_id
│   ├── grader_type (instructor | ai | peer)
│   ├── grader_id
│   ├── rubric_id
│   └── GradeCriterionScore[]
│       ├── criterion_id
│       ├── level_id (selected level)
│       └── feedback (text)
│
└── AnalyticsCache (pre-computed)
    ├── assessment_id
    ├── question_id
    ├── difficulty_index, discrimination_index
    ├── avg_time_seconds
    ├── distractor_distribution (JSON)
    └── computed_at
```

### Key Indexes
- `(site_id, assessment_id)` — tenant isolation
- `(assessment_id, user_id)` — lookup attempts per student per assessment
- `(user_id, site_id)` — gradebook: all grades for a student
- `(question_id)` — analytics aggregation

---

## 8. Tech Stack Recommendation

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 14+ (App Router) | Full-stack React, API routes, SSR for admin dashboard, fast iteration |
| **Language** | TypeScript | Type safety across frontend + backend |
| **Database** | PostgreSQL (via Supabase or Neon) | Relational data, JSON columns for flexible question content, row-level security for multi-tenancy |
| **ORM** | Prisma | Type-safe DB access, migrations, good DX |
| **Hosting** | Vercel (app) + Supabase (DB) | Serverless scaling, edge functions for low-latency assessment delivery, managed Postgres |
| **Auth** | Thinkific OAuth 2.0 + JWT | No separate auth system; piggyback on Thinkific's identity |
| **Real-time** | Supabase Realtime or Server-Sent Events | Timer sync, live exam monitoring (Phase 3) |
| **AI (Phase 2)** | OpenAI GPT-4 / Claude API | AI grading, question generation |
| **File storage** | Supabase Storage or S3 | Uploaded images for hotspot questions, assignment submissions |
| **Analytics charts** | Recharts or Tremor | Lightweight, React-native charting for dashboards |
| **Drag-and-drop** | dnd-kit | Accessible, performant DnD for question builder + ordering/matching questions |
| **Rich text** | Tiptap | WYSIWYG editor for essay answers, question content |
| **Testing** | Vitest + Playwright | Unit tests + E2E for assessment flows |

### Why Not...
- **Standalone backend (Express/Fastify)?** — Next.js API routes are sufficient for MVP; single deploy, simpler ops
- **MongoDB?** — Assessment data is highly relational (questions ↔ answers ↔ grades ↔ rubrics); Postgres is the right call
- **Firebase?** — Multi-tenant Postgres with row-level security is more natural for this data model

---

## 9. Build Phases & Timeline Estimates

### Phase 1: MVP (Tier 1) — 10-14 weeks

| Week | Milestone |
|------|-----------|
| 1-2 | Project setup: Next.js scaffold, Supabase DB, Thinkific OAuth integration, basic app shell with tenant isolation |
| 3-5 | Question type engine: build all 8 question types with editors + renderers. Question bank CRUD. |
| 5-6 | Assessment builder: create/edit assessments, add questions, configure settings (timer, attempts, passing grade, randomization) |
| 7-8 | Assessment engine (learner-facing): take assessment in embedded iframe, server-side timer, auto-grading, attempt tracking |
| 9-10 | Gradebook: student × assessment matrix, drill-down, export, student view |
| 10-11 | Analytics: question-level item analysis, assessment overview dashboard |
| 11-12 | Rubric builder + rubric-based grading workflow for essay/short-answer |
| 12-13 | Thinkific Course Player integration: iframe embed, lesson completion signaling, mobile responsiveness |
| 13-14 | Testing, bug fixes, App Store submission prep |

**Team:** 2 full-stack engineers + 1 designer (part-time)
**Deliverable:** Working app in Thinkific App Store with all Tier 1 features

### Phase 2: Differentiating (Tier 2) — 8-12 weeks after MVP

| Week | Milestone |
|------|-----------|
| 1-3 | Interactive video quizzes (requires video player integration research first) |
| 3-5 | AI grading integration (OpenAI/Claude API, rubric-based prompting, instructor review UI) |
| 5-7 | Branching logic + conditional results + learner tagging |
| 7-9 | Peer review workflow |
| 9-10 | Anti-cheating measures (tab detection, copy prevention, fullscreen mode) |
| 10-12 | Assessment modes (exam/practice/survey), customizable results screen, PDF report cards |

**Team:** 2-3 engineers + 1 designer
**Deliverable:** Feature-rich assessment platform competitive with LearnWorlds

### Phase 3: Visionary (Tier 3) — 12-16 weeks after Phase 2

| Week | Milestone |
|------|-----------|
| 1-4 | Adaptive difficulty engine (IRT model, question difficulty calibration) |
| 4-8 | Proctoring integration (webcam capture, screen recording, or third-party integration) |
| 8-11 | Spaced repetition engine (SM-2 algorithm, daily review mode) |
| 11-14 | AI question generation from full course content |
| 14-16 | Real-time exam monitoring dashboard |

**Team:** 3 engineers + 1 designer + 1 ML/AI specialist (for adaptive engine)
**Deliverable:** Market-leading assessment platform — features no competitor offers

### Total Timeline
- **MVP launch:** ~3.5 months
- **Phase 2 complete:** ~6.5 months from start
- **Phase 3 complete:** ~10-11 months from start

---

## 10. Open Questions — Decisions for Greg

### Product Strategy
1. **App Store vs internal tool?** Is this a public App Store app (available to all Thinkific customers) or an internal/first-party tool? This affects pricing, branding, and support model.

2. **Pricing model?** Free app that drives Thinkific plan upgrades? Freemium (basic free, advanced paid)? Subscription per site? Usage-based (per assessment/per student)?

3. **Relationship to Thinkific native quizzes?** Does this replace native quizzes over time, or permanently coexist as a "pro" add-on? This affects how deeply we integrate.

4. **Brand identity?** Does this app have its own name/brand, or is it "Thinkific Assessments" / "Thinkific Quizzes Pro"?

### Technical
5. **Course Player embed depth:** How deep can App Store apps embed in the Course Player today? Need to confirm: can we render a full interactive UI (drag-drop, hotspot, timer) in an iframe, or are there restrictions?

6. **Video player access:** For interactive video quizzes (Phase 2), can the app access Thinkific's video player API (pause, seek, overlay)? Or do we need to host our own video player layer?

7. **Completion signaling:** Confirm the exact mechanism for an embedded app to tell Thinkific "this lesson is complete" (postMessage? API call? webhook?).

8. **Webhook reliability:** Are Thinkific webhooks reliable enough for real-time grade sync, or do we need polling as fallback?

### Business
9. **Who builds it?** Internal Thinkific team, contracted agency, or independent developer? This affects timeline, cost, and ongoing maintenance.

10. **Certification integration priority:** How important is assessment-triggered certificates in MVP vs Phase 2? If certification programs are a key target market, it may need to move up.

11. **Interactive video priority:** LearnWorlds makes this their flagship. Is it worth accelerating into MVP, or is the question type engine more important first?

12. **Enterprise features (SCORM, proctoring):** Are there specific enterprise customers asking for these? That would affect prioritization of Tier 2/3 features.

---

*This spec is designed to be actionable. Once Greg makes calls on the open questions, we can start building.*
