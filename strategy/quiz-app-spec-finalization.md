# Spec Finalization Addendum: Quiz & Assessment App

**Date:** March 22, 2026  
**Stakeholder:** Greg Smith  
**Purpose:** Finalize scope based on answers to 12 open questions

---

## 1. Key Decisions Summary

| Question | Decision |
|----------|----------|
| **Distribution model** | Eventually a paid add-on for Thinkific customers; initially a test/demo to showcase OpenClaw capabilities |
| **Pricing** | Freemium: free for basic usage, scales with volume and/or feature complexity |
| **Positioning vs native quizzes** | Coexistence model — native quizzes for basic needs, this app for "advanced quizzes" with enhanced functionality |
| **Brand identity** | "Advanced Quizzes and Assessments for Thinkific" |
| **Build ownership** | Guppi/AutoFactory builds Phase 1 as a test case; may hand off to agency/internal team later |
| **Completion signaling** | Trust webhooks as "probably reliable enough" |
| **Certification integration** | Out of scope — certs trigger on course completion, not app-level events |
| **Enterprise features** | Skip proctoring (unless AI-based becomes feasible). SCORM: nice-to-have, non-blocking |

---

## 2. Updated MVP Scope (Simplified)

The MVP is intentionally **smaller and simpler** than the original ambitious spec.

### Core Requirements
- **Basic functional quiz app** that can be embedded into Thinkific courses
- **Multiple question types:** Multiple choice, true/false, short answer
- **Simple scoring and results display**
- **Embeddable via iframe** in the Thinkific course player
- **Basic quiz management UI** (create, edit, delete quizzes)
- **Student completion tracking** via webhooks

### Out of MVP
- Video player integration
- Interactive video quizzes
- Proctoring (AI or otherwise)
- SCORM compliance
- Direct certification triggering
- Complex branching logic
- Advanced analytics dashboard

---

## 3. Phase 1 MVP: Definition of Done

The Phase 1 MVP is complete when:

1. ✅ A Thinkific course creator can create a simple quiz (MCQ, T/F, short answer)
2. ✅ The quiz can be embedded in a Thinkific course lesson via iframe
3. ✅ Students can take the quiz within the course player experience
4. ✅ Quiz completions are captured and can be viewed by the course creator
5. ✅ Basic "pass/fail" or score display is shown to students
6. ✅ The app demonstrates OpenClaw's capability to build functional Thinkific integrations

**Success criteria:** Working demo that Greg can show the team, proving the integration pattern works end-to-end.

---

## 4. Deferred to Phase 2

| Feature | Why Deferred |
|---------|--------------|
| **Video player quizzes** | Greg explicitly said to skip for now; hold as future add-on |
| **Interactive video** | Feasibility analysis only in Phase 1 (see deliverable below); build later if viable |
| **SCORM support** | Nice-to-have, don't let it block MVP |
| **Proctoring** | Skip unless AI proctoring proves easy; traditional proctoring is out |
| **Advanced question types** | Drag-and-drop, matching, hotspot, etc. |
| **Granular analytics** | Per-question analytics, cohort comparison, time tracking |
| **Certification integration** | Not directly needed — triggered by course completion |

---

## 5. Separate Deliverable: Interactive Video Feasibility Analysis

**Not a build task — a research task.**

Before Phase 2 planning, produce a brief report covering:

1. What interactive video quiz functionality would require
2. Technical feasibility given Thinkific's architecture (video player access, API hooks)
3. Estimated effort vs. value
4. Recommended approach if we proceed

**Due:** Before Phase 2 scope is defined (not blocking Phase 1)

---

## 6. Pre-Build Research Checklist

Before coding begins, research and confirm:

| # | Research Item | Why It Matters |
|---|---------------|----------------|
| 1 | **Thinkific API docs for completion signaling** | Greg directed to check publicly posted API docs; need to confirm how the app signals quiz completion back to Thinkific (or if that's needed at all) |
| 2 | **iframe embed capabilities & constraints** | Confirm Thinkific course player allows iframe embeds, any sizing restrictions, and how to pass context (course ID, user ID) |
| 3 | **Webhook payload structure & reliability** | Validate webhook format for quiz events; confirm "probably reliable enough" assumption |
| 4 | **REST vs GraphQL API availability** | Greg mentioned both are available — determine which is appropriate for our use case |
| 5 | **Authentication flow for embedded apps** | How does the app identify the Thinkific site and user when embedded? OAuth? Token? |

---

## 7. Strategic Notes

- **This is a test case first, a product second.** The primary goal is demonstrating OpenClaw's capability to build functional Thinkific integrations.
- **Don't over-engineer.** Start simple, prove the integration pattern, then expand.
- **Keep the door open for handoff.** Code should be clean enough that an agency or internal team could take over if needed.
- **Brand clarity:** "Advanced Quizzes and Assessments for Thinkific" positions this as premium add-on functionality, not a replacement.

---

## Next Steps

1. Complete research checklist (above)
2. Draft technical architecture based on API findings
3. Begin Phase 1 MVP build
4. Concurrently: Draft interactive video feasibility analysis

---

*Document generated from Greg's answers to 12 open questions, March 22, 2026*
