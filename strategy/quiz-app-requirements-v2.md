# Quiz & Assessment App — Requirements v2 (Corrected)

**Date:** 2026-03-21
**Purpose:** Scope a next-gen quiz and assessment app for Thinkific's App Store
**Status:** Corrected baseline — merges original requirements with verified Thinkific capabilities

---

## Part 1: What Thinkific Already Does vs What the App Adds

### ✅ What Thinkific Handles Today (No App Needed)

These capabilities exist natively and should NOT be duplicated:

| Capability | Details |
|-----------|---------|
| **Multiple choice questions** | Single-answer and multi-answer modes |
| **Rich media in questions** | WYSIWYG editor with video, images, audio in questions and answers |
| **AI Quiz Generator** | Auto-generates MCQs from text, PDF, video lessons (Basic+ plans) |
| **Question import** | Bulk import via .xlsx spreadsheet |
| **Randomized question banks** | Add many questions, system selects random subset per student (Pro+ plans) |
| **Passing grade** | Configurable pass/fail threshold; can hide correct answers until passed |
| **Prerequisite gating** | Quiz must be passed before progressing to next chapter |
| **Results export** | CSV export of all quiz/survey results |
| **Per-student results** | Individual quiz & survey results viewable in admin |
| **Surveys** | 5 question types: single answer, multiple choice, rating, scale, free text |
| **Assignments** | File upload → admin approve/reject → feedback → custom email templates |
| **Brillium integration** | Timed exams, retake limits, varied question types (App Store) |
| **H5P/Multimedia** | Embed interactive content types via multimedia lessons |

### 🔧 What the App Adds (Real Gaps)

These are confirmed gaps based on official Thinkific documentation:

| Gap | Severity | Why It Matters |
|-----|----------|---------------|
| **Advanced question types** (fill-in-blank, matching, drag-drop, ordering, hotspot, short answer, essay) | Critical | MCQ alone can't assess higher-order thinking; every serious competitor offers 8+ types |
| **Timed assessments** | High | Required for exam simulation, certification prep, compliance testing |
| **Attempt limits** | High | Can't create high-stakes assessments without controlling retakes |
| **Centralized gradebook** | High | No unified view of student performance across quizzes/courses |
| **Question-level analytics** | High | No item analysis — creators can't see which questions students struggle with |
| **Rubric-based grading** | High | Assignments are approve/reject only; no scored rubrics |
| **Interactive video quizzes** | Medium-High | LearnWorlds' flagship feature; Thinkific has zero capability here |
| **Branching/adaptive logic** | Medium | Can't personalize learning paths based on quiz performance |
| **Anti-cheating controls** | Medium | No tab-switch detection, server-side timing, or lockdown |
| **Proctoring** | Medium | Required for accredited certifications |
| **Peer review** | Medium | No student-to-student assessment workflow |
| **Competency mapping** | Medium | Quizzes don't map to skills frameworks |

### Key Corrections from Original Requirements

| Original Claim | Reality |
|---------------|---------|
| "Only 1 question type (MCQ)" | Quizzes: 2 modes (single + multi-answer). Surveys: 5 types. Assignments: file submission. |
| "No question banks" | Randomized question banks exist (Pro+ plans) |
| "No randomization" | Randomization exists and works per-student per-attempt |
| "No pass/fail thresholds" | Passing grade feature exists with correct-answer hiding |
| "No AI features" | AI Quiz Generator exists (generates from course content) |
| "No import/export" | Both import (.xlsx) and export (CSV) exist |
| "No attempt limits" | Partially true — no native setting, but pass grade + prerequisites create functional gating |

---

## Part 2: Competitor Analysis

*(Retained from original — these are accurate and well-researched)*

### LearnWorlds Assessment Builder

**Key differentiators over Thinkific:**
- 16+ question types (fill-in-blank, matching, hotspot, video questions, AI-guided dialogue, etc.)
- 3 distinct assessment modes (Graded Exam, Self-Assessment, Form)
- Server-side time measurement (not client-side)
- Advanced gradebook with Review Center for manual grading
- AI grading for open-text responses
- Interactive video assessments (flagship feature — in-video MCQ, prompts, AI-generated questions)
- Customizable feedback: pop-up, embedded, or downloadable PDF
- Flexible tagging and personalization variables
- Auto-recovery (resume without data loss)
- SCORM score integration into gradebook

### CYPHER Learning (Matrix LMS)

**Key differentiators:**
- 9+ assessment types including offline, discussion-based, team, and debate assessments
- Competency-based training with skills mapping
- Turnitin integration for plagiarism detection and peer review
- Gamification (badges, points)
- H5P assessments (rich interactive content)
- LTI and SCORM assessment integration

### Market Standards Summary

**Table Stakes (every serious LMS):** Multiple question types, question banks, randomization, attempt limits, timer, passing grades, auto-grading, basic feedback, export, mobile-responsive

**Differentiating:** 10+ question types, AI multi-format generation, interactive video quizzes, advanced gradebook, AI grading, conditional logic, server-side anti-cheating, competency mapping

**Visionary:** Adaptive difficulty (CAT), AI conversational assessment, proctoring, spaced repetition, peer review, real-time exam monitoring

---

## Part 3: Prioritized Requirements

### Tier 1: MVP — Core Assessment Engine

These fill Thinkific's confirmed gaps and bring it to table stakes.

#### 1.1 Advanced Question Types
**8+ types:** Fill-in-the-blank, matching, drag-and-drop, ordering/sequencing, hotspot (click on image), short answer, essay/long-form, true/false (as distinct type).

*Note: MCQ single/multi already exists in Thinkific. The app focuses on types Thinkific cannot do.*

**Priority:** Critical — this is the #1 reason the app exists

#### 1.2 Timed Assessments
Server-side timer with configurable duration per assessment. Countdown visible to learner. Auto-submit on expiry. Cannot be manipulated client-side.

**Priority:** Critical — required for any exam simulation or certification use case

#### 1.3 Attempt Limits
Configure max attempts (1, 2, 3, N, or unlimited). Track all attempts with scores. Choose scoring mode: best score, last score, or average.

**Priority:** Critical — Thinkific explicitly cannot do this

#### 1.4 Centralized Gradebook
All assessment scores per student across all courses. Filterable by course, assessment, date range. Bulk export. Student-facing grade view. Manual grade override by instructor.

**Priority:** Critical — no centralized performance view exists today

#### 1.5 Question-Level Analytics (Item Analysis)
Per-question metrics: difficulty index (% correct), discrimination index, distractor analysis (which wrong answers are selected most), time spent per question. Dashboard view + export.

**Priority:** High — creators need to improve their assessments based on data

#### 1.6 Rubric-Based Grading
Define rubrics with criteria, levels, and point values. Apply to essay/short-answer/assignment questions. Instructor grades against rubric. Student sees rubric with scores and feedback per criterion.

**Priority:** High — assignments currently have no scoring mechanism

#### 1.7 Enhanced Randomization
Answer choice randomization (not just question order). Block back-navigation (optional). These extend Thinkific's existing question-order randomization.

**Priority:** Medium — Thinkific has basic randomization, app adds depth

#### 1.8 Mobile-Responsive Assessment UI
All question types (including drag-drop, matching, hotspot) work on mobile with touch-friendly interactions.

**Priority:** High — 50%+ of learners are on mobile

---

### Tier 2: Differentiating Features

#### 2.1 Interactive Video Quizzes
Embed questions at specific video timestamps. Support MCQ, true/false, reflection prompts. Pause video until answered. Gate progression on correct answers. Track results in gradebook.

**Priority:** High — LearnWorlds' biggest differentiator, Thinkific has nothing here

#### 2.2 AI-Powered Grading & Feedback
AI evaluates open-text and essay responses against rubrics. Suggests grade + written feedback for instructor review. Instructor can accept, modify, or override.

**Priority:** High — scales grading without scaling instructor workload

#### 2.3 Branching / Adaptive Quiz Logic
Route learners to different content based on quiz performance (e.g., score < 70% → remediation). Tag learners based on answers for segmentation.

**Priority:** Medium-High

#### 2.4 Peer Review Assignments
Learners review and grade each other's submissions using instructor-defined rubrics. Instructor moderates peer grades. Discussion-based assessments.

**Priority:** Medium

#### 2.5 Anti-Cheating Measures
Tab-switch detection (log + optional warning). Copy/paste prevention on assessment content. Server-side timing (already in 1.2). Block right-click/inspect. Fullscreen mode option.

**Priority:** Medium — essential for certification/compliance use cases

#### 2.6 Distinct Assessment Modes
Three modes with different UX: (1) Graded Exam — scored, timed, limited attempts; (2) Practice Quiz — ungraded, instant feedback, unlimited; (3) Survey — no right answers, data collection.

**Priority:** Medium

#### 2.7 AI Question Generation (Multi-Format)
Generate fill-in-blank, matching, true/false, short answer from course content — not just MCQ. Specify difficulty level and question count.

*Note: Thinkific's AI Quiz Generator already handles MCQ generation. The app extends to additional types.*

**Priority:** Medium

#### 2.8 Customizable Results Screen
Configure what learners see post-submission: score, pass/fail, correct answers, per-question feedback, next steps. Conditional messaging (different for pass vs fail). PDF report card option.

**Priority:** Medium

#### 2.9 Assessment-Triggered Actions
Trigger certificate issuance, enrollment in next course, or email notification based on assessment outcomes. Webhook events for third-party integrations.

**Priority:** Medium

---

### Tier 3: Visionary Features

#### 3.1 Adaptive Difficulty Engine
Dynamically adjust question difficulty based on performance during assessment (Computer Adaptive Testing). More accurate competency measurement with fewer questions.

**Priority:** Future — no LMS competitor does this; genuine first-mover opportunity

#### 3.2 Proctored Exams
Webcam monitoring, screen recording, lockdown browser mode, identity verification. AI-flagged suspicious behavior. Integration with ProctorU/Proctorio or built-in.

**Priority:** Future — required for accredited certifications

#### 3.3 Spaced Repetition Engine
Resurface missed questions using SM-2 algorithm. Personal "challenge decks" from incorrect answers. Track mastery over time with diminishing review frequency.

**Priority:** Future — proven retention boost, currently requires separate apps (Anki)

#### 3.4 AI-Generated Questions from Course Content
Deep integration: ingest full course content (all lessons, not just current chapter) and generate comprehensive question sets across multiple types and difficulty levels.

**Priority:** Future — extends Thinkific's chapter-level MCQ generation

#### 3.5 AI Conversational Assessment
AI conducts assessment through natural dialogue. Asks questions, follows up, probes weak areas. Conversation saved as assessment record. Mimics oral exams at scale.

**Priority:** Future — groundbreaking but technically complex

#### 3.6 Competency Framework & Skills Mapping
Define competency frameworks. Map questions to competencies. Track mastery over time. Generate skills gap reports.

**Priority:** Future — important for enterprise/corporate L&D buyers

#### 3.7 Real-Time Exam Monitoring Dashboard
Live view of students taking exams: progress, time remaining, flagged behavior. Instructor can extend time or send messages during exam.

**Priority:** Future — needed for instructor-proctored online exams

---

## Part 4: Integration Architecture

### App Store Integration Model

Built as a **Thinkific App Store app** using the hybrid approach:
- **Assessment builder:** Standalone web app (accessed from Thinkific admin panel)
- **Assessment delivery:** Embedded in Course Player via iframe/custom lesson type
- **Gradebook & analytics:** In the standalone app with deep links from Thinkific

### API Integration Points

| Thinkific API | Purpose | Type |
|--------------|---------|------|
| **Course Content API** | Read course structure, lesson content for AI question generation | REST |
| **Enrollments API** | Read enrollment status, update completion based on assessment outcomes | REST |
| **Users API** | User data for gradebook, analytics, personalization | REST |
| **Webhooks** | Listen for enrollment events, course completion, user creation | Webhooks |
| **Course Player Embed** | Render assessment UI within Course Player | iframe/LTI |
| **OAuth/SSO** | Seamless authentication — learners don't re-login | OAuth 2.0 |
| **GraphQL API** | Quiz results and engagement data (if available) | GraphQL |

### Data Ownership

| Data | Owner |
|------|-------|
| Users, enrollments, course structure, certificates | Thinkific (source of truth) |
| Questions, question banks, assessment configs | App (source of truth) |
| Responses, grades, analytics, rubrics | App (source of truth) |
| Attempt history, timing data | App (source of truth) |

### Data Flow

```
Thinkific Course Builder → App Assessment Builder (question types, banks, config)
Student in Course Player → App Assessment Engine (timer, grading, anti-cheat)
App Assessment Engine → Thinkific (pass/fail, completion status, progress update)
Thinkific → App (user data, enrollment events via webhooks)
App → Gradebook & Analytics Dashboard
```

---

## Part 5: Competitive Feature Matrix (Corrected)

| Feature | Thinkific (Today) | LearnWorlds | CYPHER | Quiz App (Target) |
|---------|-------------------|-------------|--------|-------------------|
| MCQ (single + multi) | ✅ | ✅ | ✅ | ✅ (via Thinkific) |
| Fill-in-blank, matching, ordering | ❌ | ✅ | ✅ | ✅ Tier 1 |
| Drag-drop, hotspot | ❌ | ✅ | Via H5P | ✅ Tier 1 |
| Essay / short answer | ❌ (surveys only) | ✅ | ✅ | ✅ Tier 1 |
| Question banks | ✅ (per-quiz, Pro+) | Cross-course | Cross-course | Cross-course Tier 1 |
| Randomization | ✅ (question order) | Full | ✅ | Full Tier 1 |
| Timer | ❌ | ✅ server-side | ✅ | ✅ server-side Tier 1 |
| Attempt limits | ❌ | ✅ | ✅ | ✅ Tier 1 |
| Passing grade | ✅ | ✅ | ✅ | ✅ (via Thinkific) |
| Gradebook | ❌ | ✅ Advanced | ✅ | ✅ Tier 1 |
| Item analysis | ❌ | ✅ | ✅ | ✅ Tier 1 |
| Rubric grading | ❌ | ✅ | ✅ | ✅ Tier 1 |
| AI quiz gen (MCQ) | ✅ | ✅ | ❌ | ✅ (via Thinkific) |
| AI quiz gen (multi-format) | ❌ | ✅ | ❌ | ✅ Tier 2 |
| Interactive video | ❌ | ✅ flagship | Via H5P | ✅ Tier 2 |
| AI grading | ❌ | ✅ | ❌ | ✅ Tier 2 |
| Anti-cheating | ❌ | ✅ | Basic | ✅ Tier 2 |
| Branching logic | ❌ | ✅ | ✅ | ✅ Tier 2 |
| Adaptive difficulty | ❌ | ❌ | ❌ | Tier 3 |
| Proctoring | ❌ | ❌ | ❌ | Tier 3 |
| Spaced repetition | ❌ | ❌ | ❌ | Tier 3 |

---

*This document scopes MVP (Tier 1), v2 (Tier 2), and long-term roadmap (Tier 3) for the Quiz & Assessment App, with corrected Thinkific baseline as of March 2026.*
