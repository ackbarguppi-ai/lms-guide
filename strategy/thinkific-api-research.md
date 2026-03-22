# Thinkific Developer API Research

**Research Date:** March 22, 2026  
**Purpose:** Quiz & Assessment App Build  
**Research Questions:**
1. Completion signaling mechanism for embedded apps
2. iframe embed constraints in Course Player
3. Webhook payload structure
4. REST vs GraphQL comparison
5. Authentication/OAuth flow

---

## 1. Completion Signaling: How Does an Embedded App Tell Thinkific "This Lesson is Complete"?

### Key Finding: ⚠️ **No Direct postMessage API for Lesson Completion**

After extensive research of the Thinkific developer documentation, **there is no documented API for an external/embedded iframe to directly signal lesson completion to Thinkific**. Lesson completion is handled internally by Thinkific's Course Player based on lesson type.

### How Lesson Completion Works by Type

According to the [Webhooks Documentation](https://support.thinkific.dev/hc/en-us/articles/4422658311703-Webhooks-Documentation), Thinkific handles lesson completion differently depending on the lesson type:

| Lesson Type | Completion Trigger |
|-------------|-------------------|
| **Video** | Auto-completes on successful playthrough OR student clicks "Complete Lesson" button |
| **Text, Audio, PDF, Multimedia, Download, Presentation** | Student must click "Complete Lesson" button |
| **Survey** | Auto-completes when student submits survey |
| **Quiz** | Completes when passing grade achieved (if set), or on any completion if no passing grade |
| **Assignment** | Completed by **Instructor** (not student) when approving submission |
| **Exam (Brillium)** | Completion defined in Brillium system |

### Course Player Event Hooks (For Site Scripts, Not Iframes)

Thinkific provides **Course Player Event Hooks** for JavaScript injected via Site Scripts:

```javascript
$(function() {
  if(typeof(CoursePlayerV2) !== 'undefined') {
    CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
      data["user"] = Thinkific.current_user;
      ThinkificAnalytics.track("Custom Content Completed", data);
    });
  }
});
```

**Available Hooks:**
- `hooks:contentDidChange` - Fired after navigation to new lesson
- `hooks:contentWasCompleted` - Fired when student completes lesson
- `hooks:contentWasMarkedIncomplete` - Fired when marking incomplete
- `hooks:contentWillChange` - Fired before navigation (can abort)
- `hooks:enrollmentWasCompleted` - Fired when course reaches 100%

**Hook Data Structure:**
```javascript
var data = {
  lesson: {},     // lesson attributes
  chapter: {},    // chapter attributes
  course: {},     // course attributes
  enrollment: {}, // enrollment attributes
  user: {}        // student attributes
}
```

### Site Scripts API (The Recommended Approach)

Apps can inject JavaScript into the Course Player using the **Site Scripts API**:

```javascript
// Example: POST /api/public/v1/site_scripts
{
  "name": "Quiz Completion Tracker",
  "description": "Tracks custom quiz completions",
  "content": "console.log('Quiz completed');",
  "page_scopes": ["course_player"],
  "location": "footer",
  "category": "functional"
}
```

**OAuth Scope Required:** `write:site_scripts`

### What This Means for Quiz/Assessment Apps

**Options for implementing quiz completion:**

1. **Site Scripts Approach (Recommended)**
   - Use Site Scripts API to inject JavaScript
   - Listen for custom completion events
   - Call your app's API to record completion
   - Thinkific's `lesson.completed` webhook will NOT fire automatically

2. **Multimedia Lesson Type**
   - Use Thinkific's native Multimedia lesson
   - Embed your quiz via iframe
   - Student manually clicks "Complete Lesson" when done
   - Limited integration - no grade passback

3. **Custom Lesson Completion via REST API**
   - Track completion in your app
   - Use webhooks to sync enrollment data
   - Note: No direct API to mark a lesson complete from external app

### ⚠️ Critical Gap

**There is no documented mechanism for an external iframe (embedded app) to programmatically mark a lesson as complete.** This is a significant architectural constraint. We would need to:
- Contact Thinkific at apps@thinkific.com to discuss options
- Or design around this limitation using Site Scripts

---

## 2. iframe Embed Constraints in Course Player

### Key Finding: ⚠️ **No Direct iframe Embed in Course Player Lessons**

Thinkific does NOT support embedding custom iframes as lesson content through the App Store framework. The "Embedded App" feature refers to something different.

### What "Embedded Apps" Actually Means

According to [Building an Embedded App](https://support.thinkific.dev/hc/en-us/articles/4863917810839-Building-an-Embedded-App):

> Embedded apps create an iframe that's visible in the app's **Settings area** (under `/manage/apps/{slug}`). This allows you to customize what a user sees without having to leave the Thinkific site.

**This is for admin/settings UI, NOT for lesson content.**

### Course Player Customization Options

The Course Player can be customized via:

1. **Site Footer Code** (JavaScript injection)
2. **Custom CSS** (Site-wide styling)
3. **Site Scripts API** (Automated script injection)

### Embedded App Technical Requirements

For the admin-area embedded apps:

| Requirement | Details |
|-------------|---------|
| **Protocol** | HTTPS only (required) |
| **Mixed Content** | Will cause errors if HTTP |
| **Third-party Cookies** | Apps using them are NOT suitable for embedded apps |
| **Install Callback** | Must redirect to `/manage/apps/{slug}#embedded-app` |

### Client-Side Library for Embedded Apps

Thinkific provides a library for embedded apps to show toast notifications:

```javascript
// CDN installation
import { toast } from 'https://cdn.thinkific.com/assets/app-frames/remote/latest/index.js';

// Usage
const toastEvent = {
  action: 'show',
  option: {
    message: 'Settings saved',
    variant: 'notice', // 'alert', 'info', 'notice', 'warning'
    duration: 3000,
    closable: true
  },
  sender: 'my-app'
};

toast(toastEvent, 'https://{subdomain}.thinkific.com');
```

### Course Player is a Single Page Application (SPA)

Important technical detail:
- Course Player is a separate application from the main site
- It's a Single Page Application (lessons load without page refresh)
- Site Footer Code only runs on initial page load
- DOM events like `DOMContentLoaded` don't work in Course Player

### ⚠️ Implications for Quiz App

Since there's no iframe embed in lessons:
- **Option A:** Use Multimedia lesson type with external link (opens in new tab)
- **Option B:** Use Site Scripts to inject quiz UI directly into Course Player
- **Option C:** Build a Theme Extension (custom theme component)

---

## 3. Webhook Payload Structure

### Available Webhook Topics

Thinkific provides comprehensive webhooks for various events:

| Model | Topics | Trigger |
|-------|--------|---------|
| **Lead** | `lead.created` | New lead created |
| **Order** | `order.created` | Order completed |
| **Transactions** | `order_transaction.succeeded`, `order_transaction.failed`, `order_transaction.refunded` | Payment events |
| **Subscriptions** | `subscription.cancelled`, `subscription.past_due`, `subscription.unpaid` | Subscription changes |
| **User** | `user.signup`, `user.signin`, `user.updated`, `user.deleted` | User lifecycle |
| **Enrollment** | `enrollment.trial`, `enrollment.created`, `enrollment.completed`, `enrollment.progress` | Enrollment events |
| **Course** | `course.created`, `course.deleted`, `course.updated` | Course changes |
| **Lesson** | `lesson.completed` | Lesson completion |
| **Quiz** | `quiz.attempted` | Quiz submission |
| **App** | `app.uninstalled` | App uninstall |
| **Product** | `product.created`, `product.deleted`, `product.updated` | Product changes |
| **Plan** | `plan.updated` | Site plan changes |

### Key Payload Examples

#### Enrollment Created
```json
{
  "id": "20180126171756020665195",
  "resource": "enrollment",
  "action": "created",
  "tenant_id": "3",
  "created_at": "2018-01-26T22:17:01.924Z",
  "payload": {
    "activated_at": "2018-01-26T22:16:52.255Z",
    "completed_at": null,
    "course": {
      "id": 4,
      "name": "Introduction to Webhooks"
    },
    "course_id": 4,
    "created_at": "2018-01-26T22:16:52.285Z",
    "expiry_date": null,
    "free_trial": false,
    "id": 97472,
    "percentage_completed": "0.0",
    "started_at": "2018-01-26T22:17:01.891Z",
    "updated_at": "2018-01-26T22:17:01.924Z",
    "user": {
      "email": "ninjas@thinkific.com",
      "first_name": "Robert",
      "id": 123456,
      "last_name": "Smith"
    }
  }
}
```

#### Lesson Completed
```json
{
  "id": "20191029145629636106318",
  "resource": "lesson",
  "action": "completed",
  "tenant_id": "12345",
  "tenant_global_id": "feb8d00d-8040-4382-afee-491a6c8013af",
  "created_at": "2019-10-29T18:56:29.474Z",
  "payload": {
    "chapter": {
      "id": 123,
      "name": "Chapter 1"
    },
    "course": {
      "id": 123,
      "name": "Introduction to Webhooks"
    },
    "enrollment": {
      "id": 1084282
    },
    "lesson": {
      "id": 24220,
      "name": "Getting started with Webhooks",
      "position": 0,
      "type": "Video"
    },
    "user": {
      "email": "ninjas@thinkific.com",
      "first_name": "Robert",
      "id": 123456,
      "last_name": "Smith"
    }
  }
}
```

#### Quiz Attempted
```json
{
  "id": "20191029145629636106318",
  "resource": "quiz",
  "action": "attempted",
  "tenant_id": "12345",
  "tenant_global_id": "zd29cd8r-l18e-4288-adce-5f999c27e00a",
  "created_at": "2019-08-27T21:02:50.000Z",
  "timestamp": 1598562170,
  "payload": {
    "attempts": 2,
    "correct_count": 1,
    "grade": 20,
    "incorrect_count": 4,
    "result_id": 12511,
    "user": {
      "id": 124567,
      "first_name": "Sam",
      "last_name": "Davis",
      "email": "sammy@thinkific.com"
    },
    "quiz": {
      "id": 43811,
      "name": "Webhook Quiz"
    }
  }
}
```

#### User Signup
```json
{
  "id": "20180123170248040678392",
  "resource": "user",
  "action": "signup",
  "tenant_id": "73394",
  "created_at": "2018-01-23T22:02:45.001Z",
  "payload": {
    "administered_course_ids": null,
    "affiliate_code": null,
    "affiliate_commission": null,
    "affiliate_payout_email": null,
    "avatar_url": null,
    "bio": null,
    "company": null,
    "created_at": "2018-01-23T22:02:44.987Z",
    "custom_profile_fields": [],
    "email": "ninjas@thinkific.com",
    "external_source": null,
    "first_name": "Robert",
    "headline": null,
    "id": 123456,
    "last_name": "Smith",
    "roles": []
  }
}
```

### Common Payload Structure

All webhooks follow this structure:
```json
{
  "id": "unique-event-id",
  "resource": "event-resource-type",
  "action": "event-action",
  "tenant_id": "site-id",
  "tenant_global_id": "global-site-uuid",
  "created_at": "ISO-8601-timestamp",
  "timestamp": unix-timestamp,
  "payload": { /* resource-specific data */ }
}
```

### ⚠️ Important Limitations

- `lesson.completed` webhook **does NOT work** with courses created using the new course builder
- Webhooks are **one-way**: Thinkific sends them to your app, your app cannot trigger them

---

## 4. REST vs GraphQL: Which is Better for Quiz/Assessment Apps?

### Overview

| Feature | REST API | GraphQL API |
|---------|----------|-------------|
| **Status** | Stable, legacy | New (April 2024), actively developed |
| **Future** | Supported but no new features | All new development here |
| **Endpoints** | Multiple specific endpoints | Single endpoint, flexible queries |
| **New Course Builder** | ❌ Does NOT support | ✅ Supports |
| **App Store Approval** | ✅ Allowed | ✅ Allowed |
| **Beta Endpoint** | N/A | ❌ Not allowed for App Store apps |

### GraphQL API Details

**Endpoints:**
- Stable: `https://api.thinkific.com/stable/graphql`
- Beta: `https://api.thinkific.com/beta/graphql` (⚠️ Not for production apps)

**Authorization Methods:**
1. API Access Token (for private apps)
2. OAuth (for public App Store apps)

**Note:** GraphQL cannot use API Key authorization.

**Explorer:** [Apollo Explorer](https://studio.apollographql.com/public/thinkific-unified-graph/variant/stable-production/home)

### REST API Details

**Base URL:** `https://api.thinkific.com/api/public/v1`

**Key Endpoints:**
- `/enrollments` - Create, read, update enrollments
- `/users` - User management
- `/courses` - Course data (legacy courses only)
- `/products` - Product management
- `/site_scripts` - Inject scripts

**⚠️ Critical Limitation:**
> "Courses created using the new course builder are excluded from almost all REST API endpoints, including courses, chapters, collections, and products."

### Recommendation for Quiz/Assessment App

**Use GraphQL API** for these reasons:

1. **New Course Builder Support**: REST API doesn't work with new courses
2. **Future-Proof**: All new Thinkific development is in GraphQL
3. **Flexibility**: Query exactly what you need
4. **App Store Ready**: Stable endpoint is approved for App Store

**Use REST API only for:**
- Site Scripts API (currently REST-only)
- Legacy integrations
- Specific endpoints not yet in GraphQL

### GraphQL Authorization

```http
POST https://api.thinkific.com/stable/graphql
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "query": "query { site { id name subdomain } }"
}
```

---

## 5. Authentication Flow: OAuth for App Store Apps

### OAuth 2.0 Authorization Code Flow

Thinkific uses standard OAuth 2.0 with these extensions:
- PKCE (Proof Key for Code Exchange) - recommended
- OpenID Connect - for user identification

### Step-by-Step Flow

#### Step 1: Authorization Request

```http
GET https://{subdomain}.thinkific.com/oauth2/authorize?
  client_id={client_id}&
  redirect_uri={redirect_uri}&
  response_type=code&
  response_mode=query&
  state={state}&
  scope=write:site_scripts
```

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `subdomain` | Thinkific site subdomain |
| `client_id` | Your app's Client ID |
| `redirect_uri` | Must match configured callback URL |
| `response_type` | Always `code` |
| `response_mode` | `query` (default) or `form_post` |
| `state` | CSRF protection (recommended) |
| `scope` | Requested permissions |

#### Step 2: Authorization Response

```http
{redirect_uri}?code={authorization_code}&subdomain={subdomain}&state={state}
```

**Note:** Code expires in **60 seconds**

#### Step 3: Token Exchange

```http
POST https://{subdomain}.thinkific.com/oauth2/token
Authorization: Basic {base64(client_id:client_secret)}
Content-Type: application/json
User-Agent: {required}

{
  "grant_type": "authorization_code",
  "code": "authorization_code_from_step_2"
}
```

**Response:**
```json
{
  "access_token": "5a16505d-5ee5-4853-8cb9-41b63a13a291",
  "token_type": "bearer",
  "refresh_token": "3cb103dd-f05f-43a9-aa51-c33b8f1f2546",
  "expires_in": 86399,
  "gid": "703ca109-741c-40d2-9cf0-3ac51c63086b"
}
```

**Token Details:**
- Access token expires: **24 hours**
- Refresh token: Does not expire, single-use

#### Step 4: Making API Requests

```http
GET https://api.thinkific.com/api/public/v1/users
Authorization: Bearer {access_token}
```

#### Step 5: Refresh Token

```http
POST https://{subdomain}.thinkific.com/oauth2/token
Authorization: Basic {base64(client_id:client_secret)}

{
  "grant_type": "refresh_token",
  "refresh_token": "refresh_token_from_previous_step"
}
```

**Important:** Each refresh generates a NEW refresh token. Previous one is invalidated.

### PKCE Extension (Recommended)

For apps that cannot securely store Client Secret:

```http
GET https://{subdomain}.thinkific.com/oauth2/authorize?
  client_id={client_id}&
  redirect_uri={redirect_uri}&
  response_type=code&
  state={state}&
  code_challenge={code_challenge}&
  code_challenge_method=S256
```

Then in token request:
```json
{
  "grant_type": "authorization_code",
  "code": "authorization_code",
  "code_verifier": "random_key_generated_at_start"
}
```

### OpenID Connect for User Identification

Add `id_token` to response_type and use OpenID scopes:

```http
GET https://{subdomain}.thinkific.com/oauth2/authorize?
  response_type=code%20id_token&
  client_id={client_id}&
  redirect_uri={redirect_uri}&
  scope=openid%20profile%20email%20site
```

**Available Scopes:**
| Scope | Claims |
|-------|--------|
| `openid` | `sub` (user GID), `user_id_api_v1` |
| `profile` | `name`, `given_name`, `family_name`, `updated_at`, `picture` |
| `email` | `email` |
| `site` | `subdomain`, `name`, `currency`, `domain`, `support_email` |

**UserInfo Endpoint:**
```http
GET https://{subdomain}.thinkific.com/oidc/userinfo
Authorization: Bearer {access_token}
```

**ID Token Validation:**
```http
GET https://{subdomain}.thinkific.com/.well-known/jwks.json
```

**Discovery Endpoint:**
```http
GET https://{subdomain}.thinkific.com/.well-known/openid-configuration
```

### Embedded App Authentication

For embedded apps (iframes in admin area), the iframe must authenticate separately. Options:

1. **Pass token via URL**: Include access token in iframe src URL (not recommended for security)
2. **Post Message**: Use `postMessage` to communicate with parent window (if supported)
3. **Cookie/Session**: Maintain separate session in embedded app
4. **Re-authenticate**: Use OAuth within the iframe context

**Note:** The documentation does not specify a standard pattern for iframe authentication.

### User Roles and Permissions

| Role | Install Apps | Access Admin API | Access Teaching API |
|------|--------------|------------------|---------------------|
| Site Owner | ✅ | ✅ | ✅ |
| Site Admin | ❌ | ✅ | ✅ |
| Course Admin | ❌ | ❌ | ✅ |
| Student | ❌ | ❌ | ✅ (own data only) |

**Best Practice:** After OAuth, verify user role by calling Admin API before granting access to admin features.

---

## Summary & Recommendations

### For Quiz & Assessment App Build

| Question | Answer | Status |
|----------|--------|--------|
| **Completion Signaling** | No direct API. Use Site Scripts or work with Thinkific | ⚠️ Gap identified |
| **iframe Embed** | Not supported in lessons (admin only) | ⚠️ Constraint |
| **Webhooks** | Comprehensive, well-documented | ✅ Ready |
| **REST vs GraphQL** | Use GraphQL for new courses | ✅ Recommendation |
| **Authentication** | OAuth 2.0 + PKCE + OIDC | ✅ Ready |

### Recommended Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    THINKIFIC COURSE PLAYER                   │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Site Script (injected via Site Scripts API)          │  │
│  │  - Loads quiz UI                                      │  │
│  │  - Communicates with your app API                     │  │
│  │  - Listens for lesson completion                      │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ API calls
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  YOUR QUIZ APP SERVICE                       │
│  - Store quiz questions & answers                            │
│  - Calculate grades                                          │
│  - Track completions                                         │
│  - Send data back via Webhooks/API                           │
└─────────────────────────────────────────────────────────────┘
```

### Next Steps to Verify

1. **Contact Thinkific** (apps@thinkific.com) to:
   - Confirm no lesson completion API exists
   - Discuss options for quiz/assessment apps
   - Inquire about roadmap for embedded lesson content

2. **Prototype with Site Scripts**:
   - Test script injection in Course Player
   - Verify Event Hooks work as expected
   - Test communication between script and your API

3. **Evaluate Theme Extensions**:
   - May offer deeper integration options
   - Requires custom theme installation

---

## Source Documentation Links

- [Main Developer Portal](https://developers.thinkific.com)
- [REST API Documentation](https://developers.thinkific.com/api/api-documentation)
- [Webhooks Documentation](https://support.thinkific.dev/hc/en-us/articles/4422658311703-Webhooks-Documentation)
- [OAuth Authorization](https://support.thinkific.dev/hc/en-us/articles/4422658129175-OAuth-Authorization)
- [GraphQL API Introduction](https://support.thinkific.dev/hc/en-us/articles/22111777531415-GraphQL-API-Introduction)
- [Building an Embedded App](https://support.thinkific.dev/hc/en-us/articles/4863917810839-Building-an-Embedded-App)
- [Course Player Event Hooks](https://support.thinkific.dev/hc/en-us/articles/4423909497367-Course-Player-Event-Hooks)
- [Site Scripts API](https://support.thinkific.dev/hc/en-us/articles/4423885047959-Site-Scripts-API-Reference)
- [OpenID Connect](https://support.thinkific.dev/hc/en-us/articles/4422685802903-OpenID-Connect)
