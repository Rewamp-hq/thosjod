# PAGE: Documentation

Name: Documentation
URL: `/docs`
Page Type: Resources - product documentation
Funnel Stage: Evaluation / Customer
Primary CTA: Book a Demo
Secondary CTA: Visit the Help Center

## SEO
SEO Title: Thosjod Documentation - Concepts, Setup & Integrations
Meta Description: How Thosjod works: workspaces, agents, knowledge sources, ICP scoring, routing rules, playbooks, AI-visibility tracking, integrations, webhooks and access control.
Primary Keyword: Thosjod documentation
Secondary Keywords: AI website agent setup, lead routing rules, AI visibility tracking setup

## HERO
Eyebrow: Resources
H1: Documentation
Subheadline: How Thosjod works, from core concepts to setup, integrations and access control.

## SECTION 1 - Core concepts
H2: The building blocks.
- **Workspace** - Your company's Thosjod account. It holds your agents, knowledge sources, rules, integrations, team and billing.
- **Visitor** - Anyone on your website. Visitors start anonymous and become identified when their company, and where possible their contact details, are matched through enrichment.
- **Session** - One visit by one visitor. A visitor's sessions are kept together across visits.
- **Lead** - A visitor who has been qualified against your ICP. Leads have a status (New, Routed, Booked or Lost), an ICP score and an assigned rep.
- **Agent** - An AI agent that talks to visitors: Sales, Support or Voice. Each agent has its own knowledge sources, tone, scope and escalation rules.
- **Knowledge source** - A page, PDF, doc or sitemap an agent may answer from. Answers are grounded only in enabled sources.
- **Playbook** - An automation written in plain language, such as following up with pricing-page visitors who did not book.
- **Workflow** - The rule behind routing and playbooks, in the form "if these conditions, then this action".
- **Credits** - The unit usage is billed in. See the Help Center for per-action costs. (`/help`)

## SECTION 2 - Setting up
H2: From signup to live.
1. **Onboarding** - The guided setup connects your CRM, defines your ICP and configures your first agent, with no code.
2. **Knowledge** - Add your first knowledge sources. Start with pricing, product and FAQ pages; add PDFs and docs next.
3. **Routing** - Create workflow rules that send qualified leads to the right rep or team, for example by region, company size or ICP score.
4. **Widget** - Add the workspace snippet to every page you want Thosjod to engage visitors on.
5. **Review** - Watch the first conversations under Conversations, check handoffs, and close knowledge gaps.

## SECTION 3 - Qualification and routing
H2: Scoring and assigning leads.
- **ICP criteria** - Admins define the firmographic and behavioural criteria that every visitor is scored against as the conversation happens.
- **Structured capture** - Conversations extract fields such as budget, timeline and use case into the lead record.
- **Routing rules** - If/then rules assign each qualified lead to a rep or team; the full transcript and enrichment data travel with it to the CRM.
- **Meeting booking** - Agents check rep calendar availability and let the visitor book inside the chat.

## SECTION 4 - AI visibility
H2: Tracking how AI engines describe you.
- **Prompts** - Save the questions your buyers ask AI engines in the Prompt Library; each is checked on a schedule.
- **Engines** - Growth tracks Gemini and ChatGPT weekly; Scale tracks all six supported engines daily, with competitor tracking.
- **Competitors** - Add competitor names so each tracked answer is checked for them too.
- **GEO/AEO audit** - A rules engine checks your site against a defined checklist, including structured data, content depth and FAQ markup, and links every lost point to the page and issue causing it.

## SECTION 5 - Integrations, webhooks and API
H2: Connecting other systems.
- **CRM** - HubSpot two-way sync; Salesforce lead and opportunity routing on Scale and Enterprise. (`/integrations/crm`)
- **Calendar** - Google Calendar and Microsoft Outlook / Office 365 for in-chat booking. (`/integrations/calendar`)
- **Webhooks** - Send conversation and lead events to your own systems in real time. (`/integrations/api`)
- **API** - Available on Scale and Enterprise. Keys are generated under Settings, API and shown only once.
[CONTENT GAP - NEEDS INPUT: public API reference and webhook payload schema.]

## SECTION 6 - Access control and audit
H2: Who can do what.
- **Roles** - Admin, Editor and Viewer by default, with custom roles for anything more specific.
- **SSO** - SAML / OIDC single sign-on on Scale and Enterprise.
- **Audit log** - Every configuration change is recorded with the time, the user and the details.
- **Destructive actions** - Deleting an agent, removing a teammate or revoking an API key always asks for confirmation and states what will be affected.

## INTERNAL LINKS
`/help`, `/platform`, `/features`, `/integrations`

## CONTENT NOTES
Written 2026-09-27 from application-ia-ux-copy.md, pricing.md and the feature pages. The API reference and webhook schema remain a gap until the real API is documented.
