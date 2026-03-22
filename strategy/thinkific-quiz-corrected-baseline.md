# Thinkific Quiz, Survey & Assessment — Corrected Baseline

> Based on official Thinkific support documentation, March 2026.
> This corrects inaccuracies in the initial requirements doc.

## What Thinkific Actually Offers Today

### Quizzes
- **Question types:** Multiple choice with single answer OR multiple correct answers (not just single choice)
- **Rich media in questions:** WYSIWYG editor supports video, images, and audio embedded in both questions and answers
- **AI Quiz Generator:** Auto-generates multiple choice questions from text, PDF, and video lessons (video needs captions). Available on Basic plan and above.
- **Question import:** Bulk import via .xlsx spreadsheet
- **Randomized question bank:** Add many questions to a bank, system randomly selects a subset per student. New random set on retakes. Available on Pro/Grow/Plus plans.
- **Passing grade:** Configurable pass/fail threshold — can hide correct answers until passing grade achieved
- **Prerequisite support:** Quiz can be set as prerequisite, blocking progress until passed
- **Results export:** CSV export of all quiz results
- **Individual student results:** Per-student quiz & survey results viewable in admin

### Surveys
- **Question types:** Single answer, multiple choice, rating, scale, free text (5 types — significantly more than "just multiple choice")
- **One-time completion:** Students can complete surveys only once, cannot review after
- **Results export:** CSV export available
- **Use case:** Feedback collection, student goal gathering, course improvement

### Assignments
- **File submission:** Students upload files for admin review
- **Approval workflow:** Admin must approve/reject before lesson marks as complete
- **Feedback:** Admins can provide individual feedback with approval/rejection
- **Custom email templates:** Customizable approval/rejection emails
- **Prerequisite support:** Can block course progress until assignment approved
- **Accepted file types:** Multiple formats supported, max 100MB per submission
- **Video submissions:** Supported (within file size limit)
- **Available on:** Start plan and above

### Brillium Integration
- For advanced testing: timed exams, retake limitations, varied question types
- Professional exam tool, integrated via Thinkific App Store
- Shows Thinkific acknowledges the gap and provides an integration path

### H5P / Multimedia
- Multimedia lessons support embedding H5P interactive content, Quizlet, Prezi
- This means interactive question types ARE possible via embeds, just not native

## What Was Wrong in the Initial Requirements Doc

| Claim | Reality |
|-------|---------|
| "Only 1 question type (multiple choice)" | Quizzes: 2 modes (single + multi-answer). Surveys: 5 types (single, multi, rating, scale, free text). Assignments: file submission with approval. |
| "No question banks" | Randomized question banks exist (Pro+ plans) |
| "No randomization" | Randomization exists and works per-student |
| "No pass/fail thresholds" | Passing grade feature exists |
| "No AI features" | AI Quiz Generator exists (auto-generates from course content) |
| "No import/export" | Both import (.xlsx) and export (CSV) exist |
| "No attempt limits" | Partially true — no native attempt limit setting, but passing grade + prerequisite creates a functional gate |

## What Thinkific Genuinely Lacks (confirmed gaps)

These ARE real gaps based on official docs:
1. **No timed assessments** — no timer on quizzes (Brillium integration covers this)
2. **No fill-in-the-blank, matching, drag-and-drop, ordering, or hotspot question types** — only multiple choice in quizzes
3. **No native gradebook** — results viewable per-student but no centralized grade management
4. **No rubric-based grading** — assignments are approve/reject, not scored
5. **No branching/adaptive quiz logic** — linear only
6. **No interactive video quizzes** — no in-video questions (this IS LearnWorlds' differentiator)
7. **No proctoring** — no webcam monitoring or lockdown browser
8. **No competency mapping** — quizzes don't map to skills or competency frameworks
9. **No peer review** — no student-to-student assessment
10. **No quiz attempt limits** — students can retake unlimited times (pass grade mitigates this somewhat)
11. **No question-level analytics** — no item analysis showing which questions students struggle with most

## Sources
- https://support.thinkific.com/hc/en-us/articles/360030373834-Create-a-Quiz
- https://support.thinkific.com/hc/en-us/articles/360030740233-Randomized-Question-Bank-for-Quizzes
- https://support.thinkific.com/hc/en-us/articles/360048237914-Requiring-a-Passing-Grade-Within-a-Quiz
- https://support.thinkific.com/hc/en-us/articles/360030373894-Importing-Quiz-Questions
- https://support.thinkific.com/hc/en-us/articles/360030740053-Create-a-Survey
- https://support.thinkific.com/hc/en-us/articles/360030373594-Create-an-Assignments-Lesson
- https://support.thinkific.com/hc/en-us/articles/360030352474-Managing-Assignments
- https://support.thinkific.com/hc/en-us/articles/360030720053-Thinkific-Lesson-Types
- https://support.thinkific.com/hc/en-us/articles/360030370334-Quiz-and-Survey-Export
