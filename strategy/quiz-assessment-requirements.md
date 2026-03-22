# Quiz & Assessment App — Requirements Document

**Date:** 2026-03-21
**Purpose:** Scope a next-gen quiz and assessment app for Thinkific's App Store
**Audience:** Product, engineering, and design teams

---

## Part 1: Current State Analysis — Thinkific Today

### What Thinkific Offers

Thinkific's native quiz and assessment capabilities are **functional but limited**, focused on basic knowledge-check use cases:

**Quiz Lessons:**
- Multiple-choice questions only (single correct answer OR multiple correct answers)
- WYSIWYG editor for embedding images, video, and audio within questions/answers
- Explanation field per question (displayed after submission regardless of correctness)
- Passing grade requirement (optional) — students can't reach 100% course completion without passing
- Randomized Question Bank — add N questions, display a random subset per attempt
- AI Quiz Generator — auto-generates MCQs from text, PDF, and video lessons (with closed captions) in the same chapter; generates 3 options with 1 correct answer; requires manual editing for more options or multi-correct
- Import questions via .xlsx file
- Prerequisite lesson support (force quiz completion before next chapter)
- Quiz & Survey export to CSV via email

**Survey Lessons:**
- Rating-style questions, free-form text
- Results exportable via CSV
- No grading — purely feedback/data collection

**Assignments:**
- File submission by students
- Instructor manual review
- No rubric-based grading

**Third-Party Workarounds (App Store):**
- **SimpleSim** — exam simulation with timer, question flagging, jump-to-question (preparation tool only, not official exam solution)
- **Brillium Exam** — external exam integration for more advanced testing
- **Multimedia Lessons** — can embed H5P or other interactive content, but no native assessment tracking

**Analytics:**
- Engagement Dashboards for quiz/survey results (relatively new)
- CSV export with all attempts (not just passing)
- Per-student quiz/survey result viewing

### Known Pain Points & Limitations

1. **Only multiple-choice questions** — no fill-in-the-blank, matching, drag-and-drop, short answer, essay, hotspot, true/false (as distinct type), or media-based question types
2. **No question banks across courses** — questions live inside individual quiz lessons, can't be shared or reused
3. **No limit on retake attempts** — can't restrict students to N attempts (acknowledged in Thinkific's own FAQ as unsupported)
4. **No timer/time limits** — no way to enforce time pressure on quizzes
5. **No anti-cheating controls** — no tab-switch detection, no proctoring, no server-side timing
6. **No gradebook** — no centralized view of all student grades across quizzes/courses
7. **No weighted grading** — can't assign different point values to different questions or quizzes
8. **No conditional logic or branching** — can't route students to different content based on quiz results
9. **No certificates triggered by quiz results** — certificates are course-completion based, not assessment-outcome based
10. **No rubric-based grading** for assignments or open-ended responses
11. **No inline knowledge checks** — quizzes are separate lesson types, can't embed quick checks within video or text lessons
12. **AI Quiz Generator is basic** — only generates MCQ with 3 options and 1 correct answer, limited to chapter content, no question type variety
13. **No SCORM on lower plans** — SCORM assessments require Thinkific Plus
14. **No interactive video assessments** — no in-video quiz questions or engagement checks
15. **Export-only analytics** — CSV/email workflow is clunky; dashboards are new and limited

### What's Missing or Weak

| Gap | Severity | Impact |
|-----|----------|--------|
| Question type variety | Critical | Limits assessment quality; forces creators to use external tools |
| Reusable question banks | High | Wastes creator time; prevents standardized testing |
| Attempt limits | High | Can't create high-stakes assessments |
| Timer/time limits | High | Can't simulate real exam conditions |
| Gradebook | High | No centralized learner performance view |
| Anti-cheating measures | Medium-High | Limits use for certification/compliance |
| Conditional logic on results | Medium | Can't personalize learning paths based on performance |
| Certificate-from-assessment | Medium | Disconnects achievement from credentials |
| Interactive video quizzes | Medium | Missing engagement tool competitors offer |
| Advanced AI assessment | Medium | Basic MCQ generation vs competitors' full assessment AI |

---

## Part 2: Competitor Analysis

### LearnWorlds Assessment Builder

LearnWorlds positions its assessment builder as "the most advanced on the market." Here's what they offer specifically:

**Assessment Types:**
- **Exams (graded)** — formal assessments with pass/fail, scoring, attempts
- **Self-assessments (non-graded)** — practice/reflective assessments
- **Forms** — surveys, questionnaires, data collection
- Three distinct modes vs Thinkific's single quiz type

**Question Types (16+):**
- Multiple choice (single and multi-select)
- Short answer / open text
- Match question (drag-and-drop matching)
- True/false
- Fill-in-the-blank
- Video questions (learner records or watches video, then answers)
- Sound/audio questions
- Image-based questions
- Polarized questions
- Hotspot questions
- Rating scales
- Open-ended / essay
- AI-guided dialogue (conversational assessment that saves responses)
- And more — 16+ total types vs Thinkific's 1 (MCQ)

**Assessment Controls:**
- Randomize questions per respondent
- Randomize answer order
- Block going back / skipping questions
- Set specific attempt limits (or unlimited)
- Server-side time measurement (prevents cheating via client-side manipulation)
- Auto-recovery (learner can navigate away and resume within timeframe without losing answers)
- Passing grade percentage
- Configurable retake rules

**Grading & Feedback:**
- Instant automated grading for objective questions
- Advanced Gradebook — centralized view of all grades per course, update with a click
- Review Center — dedicated workflow for manual grading/feedback
- AI-assisted grading for open-text assignments
- AI Feedback Assistant for learners — automated contextual feedback
- Feedback delivered as pop-up, embedded, or downloadable PDF
- Configurable feedback contents (choose what to reveal)

**Question Banks:**
- Create reusable pools of questions
- Import/reuse across multiple assessments and courses
- Randomize from pool per student

**Personalization & Logic:**
- Flexible tagging — add tags to users based on answers (for segmentation/learning paths)
- Personalization variables (user name, school name, scores, prior submissions)
- Conditional logic for adaptive assessment behavior
- Customizable summary/ending screen (widget-based)

**Interactive Video Assessments:**
- In-video quiz questions (MCQ, open-ended, reflective prompts)
- AI-generated interactive questions from uploaded video
- Table of contents / chapter markers on video progress bar
- Pop-ups, buttons, pointers as overlay interactions
- Peer interactions (comments, emoji reactions on video)
- Video analytics (plays, drop-offs, interaction points)
- Auto-generated subtitles, translations, summaries via AI

**AI Assessment Features:**
- AI-generated questions from learning content (multiple formats, not just MCQ)
- AI-guided dialogue assessments (conversational)
- AI grading of open-text responses
- AI Feedback Assistant for learners
- AI-generated interactive video questions

**SCORM Integration:**
- Import SCORM packages with score and pass/fail tracking into gradebook

**Certificates:**
- Custom certificate builder
- Certificates tied to assessment outcomes
- Accredible and Credly integrations for digital credentials

**Data & Analytics:**
- Pass/fail tracking, answer-level data, grade data
- All data exportable for further analysis
- Gradebook with course-level grade overview
- Assessment analytics for performance trends

### CYPHER Learning (Matrix LMS)

Enterprise-focused LMS with 9+ assessment types and strong competency-based training:

**Assessment Types:**
1. Quizzes (MCQ, true/false, fill-in-blank, matching, hotspot, freeform)
2. Offline assessments (real-world tasks, instructor-verified)
3. Discussion-based assessments (graded participation)
4. Team assessments (group submissions, individual grading)
5. Survey assessments (post-training feedback)
6. Dropbox assessments (file submission, portfolio building)
7. Debate assessments (argument-based, critical thinking)
8. H5P assessments (rich interactive content — flashcards, interactive video, drag-and-drop)
9. Peer-reviewed assessments (via Turnitin integration — plagiarism checking + peer review)
10. LTI assessments (external tool integration)
11. SCORM assessments (cross-platform standard)

**Key Differentiators:**
- Competency-based training — tie assessments to specific competencies
- Gamification — badges, points for assessment completion
- Question banks with reuse
- Automated grading with instant feedback
- Rich learning analytics tied to assessment outcomes
- Team/collaborative assessment types (unique in market)
- Turnitin integration for plagiarism detection

### Plume Studio (Custom LMS)

Boutique agency building custom LMS solutions; their assessment philosophy emphasizes:
- **Multi-level testing** — comprehension, analysis, critical thinking
- **Inline content checks** — casual engagement checks within content (not graded)
- **Real-time feedback** — instant scoring as a retention tool
- **Challenge banks** — learner creates personal list of missed questions for remediation
- **H5P integration** — hotspots, flashcards, interactive videos for rich assessments
- **Question randomization + per-question timing** — stronger anti-cheating
- **Drill/repetition** — spaced repetition via quiz retakes (7x rule)

### Market Standards: Table Stakes vs Differentiating

**Table Stakes (Expected by Market):**
- Multiple question types (minimum: MCQ, true/false, fill-in-blank, matching, short answer)
- Question banks with reuse across assessments
- Randomization (question order and answer order)
- Attempt limits
- Timer/time limits
- Passing grade requirements
- Automated grading for objective questions
- Basic feedback (correct/incorrect with explanation)
- Results export
- Mobile-responsive assessments

**Differentiating (Competitive Advantage):**
- 10+ question types including media-based (video, audio, image)
- AI question generation (multiple formats, not just MCQ)
- Interactive video quizzes
- Advanced gradebook with cross-course views
- AI-assisted grading of open-ended responses
- Conditional logic / adaptive assessments
- Server-side anti-cheating measures
- Personalization variables
- Competency mapping
- Certificate-from-assessment outcomes
- SCORM score integration

**Visionary (Market Leadership):**
- AI tutoring / conversational assessment
- Adaptive difficulty (adjusts based on performance)
- Proctored assessment integration
- Spaced repetition / drill systems
- Team/collaborative assessments
- Peer review workflows
- Real-time analytics dashboards with AI insights
- Assessment-driven learning path recommendations

---

## Part 3: Assessment Type Taxonomy

A modern LMS should support the following assessment categories:

### 1. Knowledge Checks / Practice Quizzes
- **Purpose:** Low-stakes reinforcement during learning
- **Characteristics:** Ungraded or lightly graded, instant feedback, embedded within content flow
- **Examples:** Quick MCQ after a video, inline true/false during reading, "check your understanding" pop-ups
- **Key features needed:** Inline embedding, instant feedback, no grade impact (optional), variety of question types

### 2. Graded Exams / Final Assessments
- **Purpose:** Measure mastery, determine pass/fail, gate progression
- **Characteristics:** Timed, limited attempts, randomized, secure, formal grading
- **Examples:** Chapter exams, final course exams, certification tests
- **Key features needed:** Timer, attempt limits, randomization, anti-cheating, passing grade, gradebook integration, detailed results

### 3. Surveys and Feedback
- **Purpose:** Collect qualitative data, course feedback, learner satisfaction
- **Characteristics:** No right/wrong answers, anonymous option, varied question types
- **Examples:** Post-course NPS, mid-course check-in, training needs assessment
- **Key features needed:** Rating scales, open text, anonymous mode, data export, analytics dashboards

### 4. Assignments / Submissions
- **Purpose:** Assess applied skills, projects, portfolios
- **Characteristics:** File upload, instructor review, rubric-based grading, feedback loop
- **Examples:** Project deliverables, case study analysis, portfolio submissions
- **Key features needed:** File upload (multiple formats), rubrics, inline feedback/comments, resubmission workflow

### 5. Interactive Video Assessments
- **Purpose:** Maintain engagement during video, test comprehension in context
- **Characteristics:** Questions embedded at specific timestamps, can gate video progression
- **Examples:** In-video MCQ, reflection prompts during training video, compliance check during safety video
- **Key features needed:** Timestamp-based question placement, multiple question types, continue/retry logic, video analytics integration

### 6. Competency-Based Assessments
- **Purpose:** Map assessment outcomes to specific skills/competencies
- **Characteristics:** Linked to competency frameworks, track mastery over time, multiple assessment types contribute
- **Examples:** Skills verification for job roles, competency matrix for compliance, professional development tracking
- **Key features needed:** Competency framework builder, mapping questions to competencies, mastery tracking dashboard, gap analysis

### 7. Certification Exams
- **Purpose:** Formal assessment for credential issuance
- **Characteristics:** High-stakes, secure, standardized, auditable, certificate-linked
- **Examples:** Professional certification tests, compliance certifications, accredited program exams
- **Key features needed:** Exam simulation mode, proctoring options, certificate triggers, audit trail, attempt tracking, question bank security

### 8. Proctored Assessments
- **Purpose:** Ensure exam integrity for high-stakes testing
- **Characteristics:** Monitored (AI or human), restricted environment, identity verification
- **Examples:** Professional certifications, compliance exams, academic credentials
- **Key features needed:** Webcam monitoring, screen recording, lockdown browser, identity verification, AI flagging of suspicious behavior

### 9. AI-Powered Assessments
- **Purpose:** Scale assessment creation and grading, personalize learning
- **Characteristics:** AI-generated questions, AI grading, conversational assessment, adaptive difficulty
- **Examples:** AI-generated practice tests from course content, AI-graded essays, chatbot-based knowledge assessment
- **Key features needed:** Content-aware question generation, multi-format output, AI grading with instructor override, conversational assessment mode, adaptive difficulty engine

---

## Part 4: Prioritized Requirements

### Tier 1: Must-Have (Table Stakes)

These are requirements that any serious quiz/assessment app must include to be competitive. Without these, the app won't be taken seriously.

---

#### 1.1 Multiple Question Types

**Description:** Support at minimum 8-10 question types: multiple choice (single), multiple choice (multi-select), true/false, fill-in-the-blank, short answer, matching/ordering, essay/long-form text, rating scale, image-based questions.

**Why it matters:** Thinkific only offers MCQ today. Every serious competitor offers 8+ types. Creators can't build quality assessments with one question format. This is the #1 gap.

**Priority:** Tier 1 — Absolute must-have
**Competitive reference:** LearnWorlds (16+ types), CYPHER Learning (7+ types in quizzes alone)

---

#### 1.2 Reusable Question Banks

**Description:** Centralized question library where creators build, tag, and organize questions. Questions can be pulled into any assessment across any course. Support import/export.

**Why it matters:** Without reusable banks, creators duplicate work for every quiz. Standardized testing across cohorts is impossible. Every enterprise LMS has this.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (question banks with import/reuse), CYPHER Learning (question banks)

---

#### 1.3 Timer / Time Limits

**Description:** Set a time limit for the entire assessment. Display countdown to learner. Auto-submit when time expires. Server-side time tracking to prevent manipulation.

**Why it matters:** Required for any exam simulation, certification prep, or high-stakes testing. Thinkific's own support docs point users to SimpleSim for this basic feature.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (server-side time measurement), SimpleSim app (timer feature)

---

#### 1.4 Attempt Limits

**Description:** Set maximum number of attempts per assessment (1, 2, 3, N, or unlimited). Track all attempts with scores. Configure whether best score or last score counts.

**Why it matters:** Thinkific explicitly cannot limit retakes today (per their own FAQ). High-stakes assessments require attempt control. Without it, assessments have no stakes.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (configurable attempts), every enterprise LMS

---

#### 1.5 Randomization Controls

**Description:** Randomize question order per attempt. Randomize answer choice order. Select N random questions from a larger pool. Option to block going back to previous questions.

**Why it matters:** Prevents cheating and answer-sharing between students. Thinkific has basic randomized question bank but lacks answer randomization and back-navigation blocking.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (full randomization + block back/skip), CYPHER Learning

---

#### 1.6 Automated Grading with Instant Feedback

**Description:** Auto-grade all objective question types immediately on submission. Show score, pass/fail, correct answers (configurable), and per-question explanations. Configurable: show correct answers or not, show explanations or not.

**Why it matters:** Learners expect instant results. Instructors shouldn't manually grade MCQs. Feedback quality directly impacts learning outcomes.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (instant grading + customizable feedback display), every LMS

---

#### 1.7 Gradebook

**Description:** Centralized gradebook showing all assessment scores per student across all courses. Filterable by course, assessment, date. Bulk actions (update grades, export). Student-facing grade view.

**Why it matters:** No gradebook = no way to track student performance at scale. Essential for any training program, compliance tracking, or academic use. Thinkific has nothing like this today.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (advanced gradebook), every enterprise LMS

---

#### 1.8 Assessment Results Analytics

**Description:** Dashboard showing per-assessment analytics: average score, pass rate, score distribution, question-level difficulty analysis (which questions are missed most), time spent, completion rate. Exportable.

**Why it matters:** Creators need to know if their assessments are effective. Which questions are too easy/hard? Where do students struggle? CSV export alone is insufficient.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (assessment analytics + AI Insights), CYPHER Learning (learning analytics)

---

#### 1.9 Passing Grade with Course Progression Gating

**Description:** Set a minimum passing percentage. Gate course progression on passing (can't advance without passing). Option to require passing before certificate issuance.

**Why it matters:** Thinkific has basic passing grade but it's disconnected from certificates. Connecting assessment outcomes to course progression and credentials is fundamental.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds, all enterprise LMS platforms

---

#### 1.10 Mobile-Responsive Assessments

**Description:** All assessment types render and function properly on mobile devices (phones and tablets). Touch-friendly interactions for drag-and-drop, matching, etc.

**Why it matters:** 50%+ of learners access courses on mobile. Assessments that break on mobile = broken product.

**Priority:** Tier 1
**Competitive reference:** LearnWorlds (all assessments mobile-optimized), industry standard

---

### Tier 2: Differentiating (Competitive Advantage)

These requirements would put a Thinkific assessment app ahead of most competitors and make it a compelling reason to choose Thinkific.

---

#### 2.1 AI Question Generation (Multi-Format)

**Description:** Generate questions from course content (text, PDF, video transcripts) in multiple formats — not just MCQ. Support generating true/false, fill-in-blank, matching, short answer. Allow creator to specify difficulty level, number of questions, and question type. Editable before publishing.

**Why it matters:** Thinkific's current AI quiz generator only produces MCQ with 3 options. LearnWorlds generates multiple formats. Multi-format AI generation saves creators hours and produces better assessments.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (AI assessment designer, multiple formats)

---

#### 2.2 Interactive Video Assessments

**Description:** Embed quiz questions at specific timestamps within video lessons. Support MCQ, true/false, reflection prompts. Option to pause video until question is answered. Option to gate video progression on correct answers. Track in-video assessment results in gradebook.

**Why it matters:** LearnWorlds' biggest differentiator. Video is the dominant content type in online courses. In-video checks dramatically improve engagement and retention. Thinkific has zero interactive video capability today.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (interactive video editor with AI-generated questions), H5P

---

#### 2.3 AI-Assisted Grading for Open-Ended Questions

**Description:** AI evaluates open-text, essay, and short-answer responses. Provides suggested grade and written feedback for instructor review. Instructor can accept, modify, or override. Configurable grading rubric that AI follows.

**Why it matters:** Open-ended questions assess higher-order thinking but are bottlenecked by manual grading. AI grading scales assessment quality without scaling instructor workload.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (AI grading for open text assignments)

---

#### 2.4 Customizable Feedback & Results Screen

**Description:** Fully customize what learners see after submission: score, pass/fail, correct answers (configurable), per-question feedback, overall feedback, next steps, downloadable PDF report card. Support conditional messaging (different message for pass vs fail).

**Why it matters:** LearnWorlds offers customizable summary screens with widget-based design and downloadable PDF. Thinkific shows basic pass/fail. Rich feedback transforms assessment from evaluation into learning.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (customizable summary screen, PDF feedback reports)

---

#### 2.5 Assessment-Triggered Certificates

**Description:** Issue certificates based on assessment outcomes (not just course completion). Configure: minimum score for certificate, specific assessments required, certificate template selection. Integrate with Accredible/Credly for digital credentials.

**Why it matters:** Certification programs need assessment-gated certificates. Currently Thinkific certificates are course-completion only — you can complete a course with a failing quiz score and still get a certificate.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (certificates tied to assessment outcomes + Accredible/Credly)

---

#### 2.6 Conditional Logic & Branching

**Description:** Route learners to different content, remediation, or next assessments based on their quiz performance. Example: score < 70% → remediation lesson, score ≥ 70% → advance. Tag learners based on answers for segmentation.

**Why it matters:** Enables personalized learning paths without creator intervention. Transforms static courses into adaptive experiences. LearnWorlds has tagging and variables; CYPHER has competency-based routing.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (flexible tagging, personalization variables, conditional logic)

---

#### 2.7 Anti-Cheating Controls

**Description:** Server-side time tracking (not client-side). Block navigation away from assessment (or detect tab switching). Block going back to previous questions. Optional: randomize per-question timing. Auto-recovery (resume without data loss after connection issues).

**Why it matters:** Any high-stakes assessment (certifications, compliance, professional exams) requires integrity controls. LearnWorlds has server-side timing and auto-recovery. Thinkific has nothing.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (server-side timing, auto-recovery, randomization)

---

#### 2.8 Assignment/Submission Workflow

**Description:** File upload assignments with support for multiple file types (PDF, DOCX, images, video). Instructor review workflow with inline comments. Rubric-based grading. Resubmission allowed (configurable). Due dates.

**Why it matters:** Assignments assess applied skills that MCQs can't. Portfolio-based learning requires submission workflows. Thinkific's current assignment lesson is bare-bones.

**Priority:** Tier 2
**Competitive reference:** CYPHER Learning (dropbox assessments), LearnWorlds (Review Center)

---

#### 2.9 Distinct Assessment Modes

**Description:** Support at least three distinct modes: (1) Graded Exam — scored, tracked, pass/fail; (2) Practice/Self-Assessment — ungraded, instant feedback, unlimited retakes; (3) Survey/Feedback — no right answers, data collection focus.

**Why it matters:** Different assessment purposes require different UX. A practice quiz shouldn't feel like a final exam. LearnWorlds separates exams, self-assessments, and forms. Thinkific lumps everything together.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (3 distinct assessment modes)

---

#### 2.10 SCORM Score Integration

**Description:** Import assessment scores and pass/fail results from SCORM packages into the app's gradebook. Display alongside native assessment results for unified reporting.

**Why it matters:** Many organizations have existing SCORM assessment content. Unified gradebook across native and SCORM assessments is essential for enterprise buyers. Thinkific restricts SCORM to Plus plans.

**Priority:** Tier 2
**Competitive reference:** LearnWorlds (SCORM gradebook integration on Learning Center)

---

### Tier 3: Visionary (Future-State / Market Leadership)

These requirements would make the app the clear leader in LMS assessments and create significant competitive moats.

---

#### 3.1 Adaptive Difficulty Engine

**Description:** Assessment dynamically adjusts question difficulty based on learner performance. Correct answers → harder questions; incorrect → easier questions. Produces a more accurate competency score with fewer questions (CAT — Computer Adaptive Testing model).

**Why it matters:** Standard in high-stakes testing (GRE, GMAT). No major LMS offers this natively. Would be a genuine first-mover advantage in the creator/SMB LMS market.

**Priority:** Tier 3
**Competitive reference:** No LMS competitor does this well; Pearson VUE and ETS use this for standardized testing

---

#### 3.2 AI Conversational Assessment

**Description:** AI conducts an assessment through natural conversation. Asks questions, follows up based on answers, probes deeper on weak areas, provides real-time guidance. Conversation saved as assessment record. Instructor can review transcript.

**Why it matters:** LearnWorlds has "AI-guided dialogue" but it's basic. A true conversational assessment would be groundbreaking — it mimics oral exams, Socratic questioning, and coaching conversations at scale.

**Priority:** Tier 3
**Competitive reference:** LearnWorlds (AI-guided dialogue — early version), no one does this well yet

---

#### 3.3 Competency Framework & Skills Mapping

**Description:** Define competency frameworks (skills, levels, mastery thresholds). Map assessment questions to specific competencies. Track learner progress toward competency mastery over time. Generate skills gap reports. Recommend learning paths based on gaps.

**Why it matters:** Competency-based training is the gold standard for corporate L&D. Connecting assessments to competencies transforms a quiz app into a workforce development platform.

**Priority:** Tier 3
**Competitive reference:** CYPHER Learning (competency-based training), enterprise LMS platforms (Cornerstone, Docebo)

---

#### 3.4 Proctoring Integration

**Description:** Integrate with proctoring services (ProctorU, Proctorio, ExamSoft). Support webcam monitoring, screen recording, lockdown browser, identity verification. AI-flagged suspicious behavior for instructor review.

**Why it matters:** Required for accredited certifications, professional licensing, and academic credentials. No creator-focused LMS offers native proctoring — massive opportunity for Thinkific to capture certification programs.

**Priority:** Tier 3
**Competitive reference:** Enterprise-only solutions (ExamSoft, ProctorU); no creator LMS has this

---

#### 3.5 Spaced Repetition & Drill System

**Description:** Automatically resurface missed questions using spaced repetition algorithms (SM-2 or similar). Generate personalized "challenge decks" from incorrect answers. Track mastery over time with diminishing review frequency.

**Why it matters:** Proven to dramatically improve long-term retention. Perfect for exam prep (driving tests, professional certifications, language learning). Currently requires separate apps (Anki, Quizlet).

**Priority:** Tier 3
**Competitive reference:** Anki, Quizlet (standalone apps); Plume Studio advocates "challenge banks"; no LMS has native spaced repetition

---

#### 3.6 Peer Review & Collaborative Assessment

**Description:** Learners review and grade each other's submissions using instructor-defined rubrics. Instructor can moderate peer grades. Discussion-based assessments where participation is graded. Team assessments with group submissions.

**Why it matters:** Scales grading beyond instructor capacity. Develops critical thinking through review. CYPHER Learning has team assessments, debates, and Turnitin peer review. Enables cohort-based learning at scale.

**Priority:** Tier 3
**Competitive reference:** CYPHER Learning (team, debate, peer-reviewed assessments), Turnitin

---

#### 3.7 Assessment Marketplace / Template Library

**Description:** Pre-built assessment templates for common use cases (compliance training, onboarding quizzes, certification exams by industry). Community-contributed templates. One-click import into courses.

**Why it matters:** Reduces time-to-value for creators. Enables non-experts to build quality assessments. Could become a Thinkific App Store differentiator (assessment templates as products).

**Priority:** Tier 3
**Competitive reference:** No competitor does this well; opportunity to be first

---

#### 3.8 Real-Time Collaborative Exam Monitoring

**Description:** Instructor dashboard showing live view of students taking an exam — who's in progress, current question, time remaining, flagged behavior. Live intervention capability (extend time, send message).

**Why it matters:** Required for instructor-proctored online exams. Enables synchronous assessment events (exam days, certification sessions). No creator LMS has this.

**Priority:** Tier 3
**Competitive reference:** Enterprise exam platforms only; greenfield for creator LMS

---

## Part 5: Thinkific Integration Considerations

### App Store Integration Model

The quiz/assessment app should be built as a **Thinkific App Store integration** that extends (and eventually replaces) Thinkific's native quiz functionality.

**Integration approach:**
- **Embedded app** within the Thinkific Course Player — assessments appear as lesson types alongside video, text, etc.
- **Standalone assessment builder** accessible from the Thinkific admin panel (or via the app's own interface)
- **Results flow back to Thinkific** for analytics, certificates, and course progression

### API Requirements

The app will need the following Thinkific APIs and capabilities:

| API / Capability | Purpose | Current Status |
|-----------------|---------|----------------|
| **Course Content API** | Read course structure, lessons, chapters to generate AI questions from content | Available (Public API) |
| **Enrollments API** | Read enrollment status, update completion based on assessment outcomes | Available (Public API) |
| **Users API** | Read user data for personalization, gradebook, analytics | Available (Public API) |
| **Webhooks** | Listen for enrollment events, course completion, user creation | Available |
| **Course Player Embed** | Render assessment UI within the Thinkific course player experience | Available via App Store embed (LTI or iframe) |
| **Certificates API** | Trigger certificate issuance based on assessment outcomes | **Likely limited** — may need workaround or enhancement |
| **Analytics API** | Push assessment data to Thinkific analytics dashboards | **May not exist** — may need custom dashboard |
| **SSO / Auth** | Seamless authentication so learners don't re-login | Available via OAuth/JWT for apps |
| **Video Lesson Content** | Access video files or transcripts for interactive video assessments | **Limited** — may need video hosting integration approach |
| **Custom Lesson Types** | Register new lesson types (graded exam, self-assessment, survey) in course builder | **Available via App Store** — apps can add lesson types |

### Data Flow

```
┌─────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│  Thinkific Course   │     │   Quiz/Assessment    │     │   Thinkific Core     │
│     Builder         │     │       App            │     │    Platform          │
│                     │     │                      │     │                      │
│  Creator adds       │────▶│  Assessment builder  │     │                      │
│  assessment lesson  │     │  (question types,    │     │                      │
│                     │     │   question banks,    │     │                      │
│                     │     │   AI generation)     │     │                      │
│                     │     │                      │     │                      │
│  Student takes      │────▶│  Assessment engine   │────▶│  Enrollment progress │
│  assessment in      │     │  (timer, grading,    │     │  Course completion   │
│  Course Player      │     │   anti-cheating)     │     │  Certificate trigger │
│                     │     │                      │     │  Analytics data      │
│                     │     │  Gradebook &         │     │                      │
│                     │     │  Analytics           │◀───│  User & enrollment   │
│                     │     │                      │     │  data                │
└─────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

**Key data flows:**
1. **Course content → App:** Pull lesson content (text, transcripts) for AI question generation
2. **Assessment results → Thinkific:** Push pass/fail, scores, completion status back to update enrollment progress
3. **Assessment results → Certificates:** Trigger certificate issuance when assessment criteria are met
4. **User data → App:** Pull user info for personalization, gradebook, analytics segmentation
5. **Assessment analytics → App dashboard:** Assessment-specific analytics live in the app (not Thinkific's native analytics)
6. **Webhook events → App:** Listen for new enrollments to pre-configure assessments, enrollment cancellations to archive data

### User Experience

**Option A: Fully Embedded (Recommended)**
- Assessment appears as a native lesson type within the Thinkific Course Player
- Learner never leaves the Thinkific experience
- Seamless with Thinkific's existing drip, prerequisite, and completion logic
- Creator manages assessments within the Thinkific course builder (opens app builder in a panel/modal)
- **Pros:** Best learner UX, feels native, leverages Thinkific's existing course infrastructure
- **Cons:** Constrained by Thinkific's embed capabilities, may have limitations on rich interactions

**Option B: Hybrid (Practical)**
- Assessment builder is a standalone web app (accessed from Thinkific admin or directly)
- Assessment delivery is embedded in the Course Player via iframe/LTI
- Gradebook and analytics are in the standalone app
- **Pros:** Full control over builder UX, richer interactions possible, faster iteration
- **Cons:** Slight context switch for creators; need to ensure seamless auth

**Option C: Standalone (Not Recommended)**
- Separate platform entirely; learners click a link to take assessments outside Thinkific
- **Pros:** Maximum flexibility
- **Cons:** Breaks learner experience, loses Thinkific course flow, poor UX

**Recommendation:** Start with **Option B (Hybrid)** for faster development and richer capabilities, with a roadmap to deepen embedding toward Option A as Thinkific's app platform matures.

### Technical Architecture Considerations

- **Data storage:** App owns all assessment data (questions, responses, scores, analytics) in its own database
- **Thinkific is source of truth for:** Users, enrollments, course structure, certificates
- **App is source of truth for:** Questions, question banks, assessment configs, responses, grades, analytics
- **Real-time sync:** Webhook-driven for enrollment events; API polling or push for grade sync
- **Scale considerations:** Must handle concurrent test-takers (exam day scenarios); server-side timing requires reliable infrastructure
- **Security:** Assessment content (questions/answers) must be secured against client-side extraction; API keys and tokens properly managed
- **Multi-tenant:** App serves multiple Thinkific sites; each site's data is isolated

---

## Appendix: Competitive Feature Matrix

| Feature | Thinkific (Today) | LearnWorlds | CYPHER Learning | Target App |
|---------|-------------------|-------------|-----------------|------------|
| Question types | 1 (MCQ) | 16+ | 7+ | 10+ (Tier 1) |
| Question banks | Per-quiz only | Cross-course | Cross-course | Cross-course (Tier 1) |
| Timer | ❌ | ✅ (server-side) | ✅ | ✅ server-side (Tier 1) |
| Attempt limits | ❌ | ✅ | ✅ | ✅ (Tier 1) |
| Randomization | Basic | Full (questions + answers + block back) | ✅ | Full (Tier 1) |
| Gradebook | ❌ | ✅ Advanced | ✅ | ✅ (Tier 1) |
| AI question gen | Basic MCQ only | Multi-format | ❌ | Multi-format (Tier 2) |
| Interactive video | ❌ | ✅ (flagship) | Via H5P | ✅ (Tier 2) |
| AI grading | ❌ | ✅ (open text) | ❌ | ✅ (Tier 2) |
| Anti-cheating | ❌ | ✅ (server-side) | Basic | ✅ (Tier 2) |
| Conditional logic | ❌ | ✅ (tagging, variables) | ✅ (competency) | ✅ (Tier 2) |
| Certificates from assessment | ❌ | ✅ | ✅ | ✅ (Tier 2) |
| SCORM integration | Plus only | ✅ | ✅ | ✅ (Tier 2) |
| Assessment modes | 1 (quiz) | 3 (exam, self-assessment, form) | 9+ | 3 (Tier 2) |
| Adaptive difficulty | ❌ | ❌ | ❌ | Future (Tier 3) |
| Proctoring | ❌ | ❌ | ❌ | Future (Tier 3) |
| Spaced repetition | ❌ | ❌ | ❌ | Future (Tier 3) |
| Peer review | ❌ | ❌ | ✅ (Turnitin) | Future (Tier 3) |
| Conversational AI assessment | ❌ | Basic | ❌ | Future (Tier 3) |

---

*This document should be used to scope MVP (Tier 1), v2 (Tier 2), and long-term roadmap (Tier 3) for the quiz and assessment app.*
