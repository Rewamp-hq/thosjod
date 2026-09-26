# OUTPUT 27 + 28 - SaaS Application IA & UX Copy

All /app/\* routes (product surface, not marketing). Only fields with real content are shown per page - blank fields are omitted rather than padded with generic text.

## `/app` - App Home / Redirect

**Description:** Redirects authenticated users to /app/dashboard.
**Primary action:** N/A (redirect)
**Navigation:** N/A

## `/app/onboarding` - Onboarding

**Description:** Guided, no-code setup: connect CRM, define ICP, configure first agent.
**Primary action:** Continue Setup
**Secondary action(s):** Skip for now
**Empty state:** N/A - always has content (wizard steps)
**Success message:** Setup complete - redirect to /app/dashboard

## `/app/dashboard` - Dashboard

**Description:** Overview of engagement, leads, meetings, and revenue metrics (Pillar 7).
**Primary action:** Book a Demo of new feature (in-app promo, dismissible)
**Metrics shown:** Inbound meetings, active conversations, leads this week, MRR-attributed revenue
**Empty state:** "No activity yet - install the widget to start capturing visitors." CTA: View Install Instructions
**Loading state:** Skeleton metric cards
**Navigation:** Main sidebar: Dashboard, Visitors, Leads, Conversations, Agents, Analytics, Knowledge, AI Visibility, Integrations, Settings

## `/app/visitors` - Visitors

**Description:** List of identified and anonymous visitor sessions (Pillar 2).
**Primary action:** Filter
**Filters:** Identified/Anonymous, Date range, Source, Geography
**Table columns:** Company (if identified), Name, First Seen, Pages Viewed, Status
**Empty state:** "No visitors yet."
**Loading state:** Table skeleton rows

## `/app/visitor/[id]` - Visitor Detail

**Description:** Full enrichment profile and session history for one visitor.
**Primary action:** Route to Rep
**Secondary action(s):** Add Note
**Table columns:** N/A (detail view)
**Empty state:** N/A
**Tooltip:** Enrichment confidence score shown next to identified fields

## `/app/companies` - Companies

**Description:** Account-level rollup of all visitor sessions from the same company (B2B ABM view).
**Primary action:** Filter by ICP score
**Table columns:** Company, Domain, Total Sessions, Highest ICP Score, Last Activity
**Empty state:** "No companies identified yet."

## `/app/sessions` - Sessions

**Description:** Raw session log across all visitors, identified or not.
**Primary action:** Export CSV
**Table columns:** Session ID, Visitor, Start Time, Duration, Pages, Outcome
**Empty state:** "No sessions recorded yet - check your widget installation."

## `/app/leads` - Leads

**Description:** Qualified leads captured and scored (Pillar 3).
**Primary action:** Route Lead
**Filters:** ICP score range, Status (New/Routed/Booked/Lost)
**Table columns:** Name, Company, ICP Score, Status, Assigned Rep, Created
**Empty state:** "No qualified leads yet."
**Confirmation message:** "Lead routed to {rep name}."

## `/app/leads/[id]` - Lead Detail

**Description:** Full lead record: conversation transcript, enrichment data, CRM sync status.
**Primary action:** Sync to CRM
**Secondary action(s):** Book Meeting Manually
**Success message:** "Synced to {CRM name}."

## `/app/conversations` - Conversations

**Description:** All AI agent conversations, sales and support.
**Filters:** Agent type (Sales/Support/Voice), Sentiment, Date
**Table columns:** Visitor, Agent, Sentiment Score, Duration, Outcome
**Empty state:** "No conversations yet."

## `/app/conversations/[id]` - Conversation Detail

**Description:** Full transcript with sentiment annotations and handoff points.
**Primary action:** Flag for Review
**Tooltip:** Grounded-response indicator shown per AI message (confirms it was restricted to knowledge base, not a fallback guess)

## `/app/agents` - Agents

**Description:** List and configure all active AI agents (Pillar 4, Pillar 6).
**Primary action:** Create Agent
**Table columns:** Agent Name, Type, Status, Conversations This Month
**Empty state:** "No agents configured - create your first agent."

## `/app/agents/sales` - Sales Agent Config

**Description:** Configure the Sales Agent's playbook, tone, and escalation rules.
**Primary action:** Save Configuration
**Tooltip:** "Scope" setting limits what the agent can discuss - narrower scope reduces hallucination risk.

## `/app/agents/support` - Support Agent Config

**Description:** Configure the Support Agent's knowledge sources and ticket-escalation rules.
**Primary action:** Save Configuration
**Secondary action(s):** Test Agent (sandbox conversation)

## `/app/playbooks` - Playbooks

**Description:** Natural-language automation playbooks (Pillar 5).
**Primary action:** New Playbook (describe in natural language)
**Table columns:** Playbook Name, Trigger, Status, Last Run
**Empty state:** "No playbooks yet - describe your first outbound strategy in plain language."

## `/app/workflows` - Workflows

**Description:** Visual/rule-based workflow view underlying playbooks and routing rules.
**Primary action:** New Workflow
**Empty state:** "No custom workflows yet."

## `/app/outreach` - Outreach

**Description:** Automated follow-up and social SDR activity log (Pillar 5).
**Filters:** Channel (Email/Social), Status
**Table columns:** Recipient, Channel, Sent, Opened, Replied
**Empty state:** "No outreach sent yet."

## `/app/analytics` - Analytics Overview

**Description:** Central reporting layer (Pillar 7).
**Primary action:** Export Report
**Navigation:** Sub-nav: Revenue, Funnel, Conversations, Sentiment, Heatmaps

## `/app/analytics/revenue` - Revenue Analytics

**Description:** Ties conversations/leads to downstream CRM stage and revenue.
**Metrics shown:** Attributed pipeline, attributed closed-won, average deal size from Thosjod leads
**Empty state:** "Connect your CRM to see revenue attribution."

## `/app/analytics/funnel` - Funnel Analytics

**Description:** Visitor progression through funnel stages, with drop-off flags.
**Empty state:** "Not enough data yet to show a funnel."

## `/app/analytics/conversations` - Conversation Analytics

**Description:** Aggregate conversation quality metrics across all agents.
**Metrics shown:** Avg. resolution rate, avg. handoff rate, top unanswered questions

## `/app/analytics/sentiment` - Sentiment Analytics

**Description:** Aggregate sentiment scoring trends over time.
**Metrics shown:** Sentiment trend line, at-risk conversation flags

## `/app/analytics/heatmaps` - Heatmaps

**Description:** Click/scroll/attention aggregation per page.
**Empty state:** "No heatmap data yet for this page."

## `/app/knowledge` - Knowledge Base

**Description:** Manage the content sources agents are grounded in (Pillar 1, Pillar 4).
**Primary action:** Add Source (page, PDF, doc, sitemap)
**Table columns:** Source, Type, Last Synced, Status
**Empty state:** "No knowledge sources yet - add your first page or document."

## `/app/knowledge/gaps` - Knowledge Gaps

**Description:** Recurring questions the knowledge base answered poorly or not at all.
**Table columns:** Question, Frequency, Current Answer Quality
**Empty state:** "No knowledge gaps detected yet."
**Tooltip:** "Answer Quality" reflects how often the agent had to hand off rather than answer directly.

## `/app/ai-visibility` - AI Visibility Dashboard

**Description:** Side-by-side AI answer engine results (Pillar 8).
**Primary action:** Run Audit Now
**Table columns:** Prompt, Engine, Brand Mentioned?, Competitor Mentioned?, Last Checked
**Empty state:** "No prompts tracked yet - add your first prompt."

## `/app/ai-visibility/prompts` - Prompt Library

**Description:** Manage tracked prompts.
**Primary action:** Add Prompt
**Empty state:** "No prompts saved yet."

## `/app/ai-visibility/competitors` - Competitor Tracking

**Description:** Manage tracked competitor names for mention detection.
**Primary action:** Add Competitor
**Empty state:** "No competitors added yet."

## `/app/ai-visibility/audit` - GEO/AEO Audit

**Description:** Run and review the rule-based site audit.
**Primary action:** Run New Audit
**Loading state:** "Running audit - this can take a few minutes."
**Success message:** "Audit complete - {N} issues found."

## `/app/integrations` - Integrations

**Description:** Connect/manage CRM, calendar, and webhook integrations.
**Primary action:** Connect New Integration
**Table columns:** Integration, Status, Last Synced
**Empty state:** "No integrations connected yet."

## `/app/settings` - Settings Overview

**Description:** Account-level settings hub.
**Navigation:** Sub-nav: Team, Permissions, Billing, Security, Notifications, API, Audit Log

## `/app/settings/team` - Team

**Description:** Manage team members and invites.
**Primary action:** Invite Team Member
**Table columns:** Name, Email, Role, Status
**Confirmation message:** "Invite sent to {email}."

## `/app/settings/permissions` - Permissions

**Description:** Role-based access control configuration.
**Primary action:** Create Role
**Empty state:** "Using default roles (Admin, Editor, Viewer) - create a custom role if needed."

## `/app/settings/billing` - Billing

**Description:** Plan, credit usage, and invoices.
**Primary action:** Upgrade Plan
**Secondary action(s):** View Invoices
**Metrics shown:** Credits used this cycle / included, current plan, next invoice date

## `/app/settings/security` - Security

**Description:** SSO configuration, session management, security log.
**Primary action:** Configure SSO (Scale/Enterprise only)
**Tooltip:** "SSO is available on Scale and Enterprise plans - upgrade to enable." (shown if on lower tier)

## `/app/settings/notifications` - Notifications

**Description:** Configure alert preferences (new lead, meeting booked, audit complete, etc.).
**Primary action:** Save Preferences

## `/app/settings/api` - API Settings

**Description:** API key management (Scale/Enterprise).
**Primary action:** Generate New API Key
**Confirmation message:** "New key generated - copy it now, it won't be shown again."
**Tooltip:** "Treat your API key like a password - it grants full account access."

## `/app/settings/audit-log` - Audit Log

**Description:** Full history of configuration changes, per the 'full configuration & audit trail' feature.
**Filters:** Date range, User, Action type
**Table columns:** Timestamp, User, Action, Details
**Empty state:** "No changes logged yet."

## Global Application UX Notes

- **Error states (site-wide convention):** "Something went wrong loading this page. [Retry]" for transient failures; specific, actionable messages (as shown per-page above) for validation/business-logic errors - never a raw error code shown to the user.
- **Loading states (default):** skeleton screens matching the final layout, not spinners, for any page with a table or metric cards.
- **Confirmation pattern:** destructive actions (delete agent, remove team member, revoke API key) require a confirmation dialog restating what will be affected, not a generic "Are you sure?"
