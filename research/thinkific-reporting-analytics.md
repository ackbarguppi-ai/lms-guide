# Thinkific Reporting & Analytics Research Notes

*Research Date: March 24, 2026*
*Sources: Thinkific Support Documentation*

## Overview
Thinkific Analytics provides comprehensive reporting across engagement, revenue, and student performance. The system is designed to help creators make data-driven decisions to improve learning products and prove ROI.

## Core Analytics Components

### 1. Engagement Dashboards
**Plan Availability:** Pro + Growth, Premier, Grow, Expand, Plus
**User Access:** Site Owners, Site Admins, Course Admins, Group Analysts (role-based)

#### Dashboard Types:

**Overview Dashboard**
- Engagement trends over time (daily, weekly, monthly, quarterly, yearly)
- Engagement by product (courses and communities ranked by activity)
- Active enrollments vs active users tracking
- Engagement by student (ranking table)
- Tracks: viewing/completing lessons, community interactions (posts, comments, replies, likes)

**Course Dashboard**
- Total enrollments (active + expired)
- Active enrollments count
- Expired enrollments count
- Enrollments not engaged (zero activity indicator)
- % Course completed distribution
- Monthly cohort progress (average progress by enrollment month)
- Bundle progress (average progress by bundle)
- Group progress (average progress by student group)
- Lesson engagement (views, completions, time spent per lesson)
- **Data lag:** Up to 24 hours for recent activity (updates daily at 4am PDT)

**Community Dashboard**
- Contributing members count
- Total contributions
- Cross-member contributions (comments, replies, likes on others' posts)
- Contribution trends over time
- Contribution heatmap (52-week view)
- Community and space activity breakdown
- Top contributing members ranking

**Video Dashboard**
- Video play rates
- Student drop-off points
- Video engagement metrics
- Identification of high/low performing videos

**Quiz Dashboard**
- Average score across all quizzes
- Unique students completed
- Score distribution (10% increments)
- Most completed quizzes (top 30)
- Number of attempts distribution
- Chapters by quiz average score
- Quiz performance (completion count, average score, pass rate)
- Question performance (attempts, correct/incorrect ratios)

**Survey Dashboard**
- Students enrolled in courses with surveys
- Students who completed surveys
- Students with no surveys completed
- Survey started count
- Surveys completed count
- Completion rate (completed / started)
- Completion rate over time
- Completion rate by survey
- Response distribution
- Response details (individual answers)

**Student Performance Dashboard**
- Student information (name, email, enrollment counts, sign-up/sign-in dates)
- Course engagement (progress, enrollment dates, completion dates)
- Lesson engagement (time spent, completion status, dates)
- Individual learner progress tracking

**SCORM Dashboard** (Plus only, Beta)
- SCORM course enrollments
- Enrolled learners count
- Completion rate (Not Attempted, Incomplete, Complete, Unknown)
- Success rate (Pass, Fail, Unknown)
- SCORM course details table
- Average score (0-100)
- Score distribution
- Average score by learner
- Interactions summary per description/question
- Interactions summary per learner

**Thinker Dashboard** (Beta - AI Teaching Assistant analytics)
- Thinker response count
- Estimated hours saved by AI (assumes 5 min per human response)
- Users interacting with Thinker
- Usage trends over time
- User message counts
- Response reactions (thumbs up/down)
- Reaction breakdown and trends
- Complete message history
- **Data lag:** 24 hours for data refresh

### 2. Progress Reports
**Plan Availability:** All plans
**Accessible by:** Site Owner, Site Admin, Course Admin

**Features:**
- Per-course student activity overview
- Start date, completion date, last sign-in
- View rate and completion rate percentages
- Individual student search
- CSV export capability

### 3. Cohort Reports
**Plan Availability:** All plans
**Features:**
- Group students by common start date (cohorts)
- Compare completion rates across cohorts
- Timeline view (weeks/months/years)
- HTML view with filterable intervals
- CSV export option

### 4. Group Reports
**Plan Availability:** All plans
**Accessible by:** Site Owner, Site Admin, Group Analyst
**Features:**
- Progress reports for specific Groups
- Name, email, completion rates for all courses in group
- CSV export

### 5. Revenue Dashboard
**Part of:** Thinkific Analytics
**Features:**
- Revenue trends and breakdowns
- TCommerce feature filtering (Order Bump transactions)
- Transaction tracking

### 6. Enrollment Dashboard
**Features:**
- Enrollment tracking and trends
- Exportable datasets

### 7. Advanced Analytics (Plus only)
Custom analytics capabilities for enterprise customers.

## Data Export Capabilities

All dashboards support:
- Full dataset export
- Partial dataset export (filtered)
- CSV format
- Email delivery of export links

## User Role-Based Access

| Dashboard | Site Owner | Site Admin | Course Admin | Group Analyst |
|-----------|------------|------------|--------------|---------------|
| All Engagement | ✅ | ✅ | Course only | Group only |
| Progress Reports | ✅ | ✅ | ✅ | ❌ |
| Cohort Reports | ✅ | ✅ | ✅ | ❌ |
| Group Reports | ✅ | ✅ | ❌ | ✅ |
| Revenue | ✅ | ✅ | ❌ | ❌ |
| SCORM | ✅ | ✅ | ❌ | ❌ |
| Thinker | ✅ | ✅ | ❌ | ❌ |

## Key Metrics Definitions

**Engagement:** Viewing or completing lessons, community interactions (posts, comments, replies, likes)

**Active Enrollment:** Enrollment with access (not expired)

**Active User:** Unique student with access to course/community

**Completion Rate:** Percentage of lessons completed in a course

**View Rate:** Percentage of lessons viewed (not necessarily completed)

## Reporting Data Latency
- Standard engagement data: Up to 24 hours
- SCORM data: Up to 24 hours
- Thinker data: Up to 24 hours
- Daily update time: 4:00 AM PDT

## Competitive Position
- **Strengths:** Comprehensive engagement dashboards, role-based access for teams, cohort analysis, SCORM support
- **Unique features:** Thinker AI assistant analytics, community engagement heatmaps, video analytics
- **Limitations:** 24-hour data lag (not real-time), some features Plus-only

## Plan Comparison
| Feature | Free | Basic | Start | Grow | Expand | Plus |
|---------|------|-------|-------|------|--------|------|
| Progress Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cohort Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Group Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Engagement Dashboards | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| SCORM Dashboard | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Thinker Dashboard | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (Beta) |
| Advanced Analytics | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Data Export | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Key URLs
- https://support.thinkific.com/hc/en-us/articles/360040037093 (Thinkific Analytics overview)
- https://support.thinkific.com/hc/en-us/articles/15795863469463 (Engagement Dashboards)
- https://support.thinkific.com/hc/en-us/articles/360030369974 (Progress Reports)
- https://support.thinkific.com/hc/en-us/articles/24607412212119 (SCORM reporting)
- https://support.thinkific.com/hc/en-us/articles/34681678535191 (Thinker AI Teaching Assistant)

---

*Saved for: lms-guide.com deep-dive article on LMS Reporting & Analytics*
