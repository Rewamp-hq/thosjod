# PAGE: Platform

Name: Platform
URL: `/platform`
Page Type: Marketing - core, technical-evaluator-facing
Audience: Technical evaluators, RevOps, IT/security stakeholders, internal champions building a business case
ICP: All (evaluator persona, not industry-specific)
Funnel Stage: Consideration
Search Intent: "how does [category] work," "AI website agent architecture," informational + branded
Primary CTA: Book a Demo
Secondary CTA: Explore Features

## SEO

SEO Title: The Thosjod Platform: How the AI Lead Engine Works
Meta Description: See the full Thosjod architecture: how visitor identification, conversational AI, automation, analytics, and AI-visibility tracking work together as one engine.
Primary Keyword: AI website agent architecture
Secondary Keywords: how visitor identification works, AI lead engine platform, GEO AEO architecture

## HERO

Eyebrow: The Platform
H1: One engine, nine connected layers
Subheadline: Thosjod isn't nine separate tools stitched together - it's one visitor session that flows through identification, conversation, qualification, automation, and analytics, with AI-visibility tracking built into the same architecture.
Primary CTA: Book a Demo
Secondary CTA: Explore Features

## SECTION 1 - What It Is

H2: A single engine, not a stack of point tools
Body: Most competing products solve one stage of the visitor journey - identification (Warmly), conversation (Chatbase, Tidio), or outbound automation (Clay, Artisan) - and require separate integrations to connect them. Thosjod carries one visitor record continuously through every stage, so identification data informs the conversation, the conversation informs qualification, and qualification informs routing and analytics - without hand-offs between disconnected tools.

## SECTION 2 - How It Works (the visitor journey)

H2: Traffic → Discovery → Identification → Engagement → Qualification → Routing → Conversion → Analysis → Optimization
Supporting bullets:

- **Traffic** arrives at any page of your site.
- **Discovery** - the agent reads visitor context (page, referrer, behavior) and begins a personalized conversation.
- **Identification** - deanonymization and enrichment attach real name, email, and company to the session, even without a form.
- **Engagement** - a grounded, on-brand AI agent (Sales, Support, or Voice) handles the conversation.
- **Qualification** - the conversation is scored against your Ideal Customer Profile.
- **Routing** - qualified leads are assigned to the right rep by rule, with full CRM context attached.
- **Conversion** - meetings are booked directly inside the conversation.
- **Analysis** - every session becomes funnel, sentiment, and revenue-attribution data.
- **Optimization** - knowledge gaps, chat-strategy A/B tests, and AI-visibility audits feed back into the system.
  > Dev note: recommend a horizontal, scroll-linked architecture diagram showing this 9-stage flow, with each stage clickable through to its pillar page.

## SECTION 3 - Architecture: The Five Layers

H2: How the nine pillars map to five functional layers
Supporting bullets:

- **AI Layer** - the conversational engine underlying every agent type (Pillar 4: General AI conversational agent, grounded via RAG, voice via speech-to-text/text-to-speech, multilingual).
- **Data Layer** - identity resolution and enrichment (Pillar 2), structured lead capture (Pillar 3), and CRM sync (Pillar 6).
- **Automation Layer** - natural-language playbooks, automated follow-up, bidirectional social SDR (Pillar 5).
- **Analytics Layer** - funnel tracking, sentiment analysis, heat maps, knowledge-gap insights, revenue attribution (Pillar 7), rolling up into Outcome Metrics (Pillar 9).
- **AI Visibility Layer** - one-click multi-engine access, live tracking with Search grounding, competitor mention tracking, and the explainable GEO/AEO audit (Pillar 8) - architecturally separate from the on-site conversational layer, since it operates on how AI engines represent the brand _outside_ the website, not on-site visitor conversations.
  > Dev note: recommend a layered-stack diagram (5 horizontal bands) as the primary visual for this section, each band linking to its constituent pillar page(s).

## SECTION 4 - Business Outcomes

H2: What the platform is built to move
Body: Every layer ultimately reports into the same six outcome metrics your leadership already tracks: inbound meeting volume, direct customer acquisition, chat-to-lead conversion lift, consultation close rate, customer churn rate, and engagement/CTA click-through. See individual pillar pages for how each is measured.

## FAQ

Q: Is this one product or several integrated tools?
A: One product. Identification, conversation, qualification, automation, analytics, and AI-visibility tracking share the same visitor record and admin configuration - there's no separate tool to integrate for each layer.

Q: Where does AI Visibility fit into the architecture?
A: It's a distinct layer that operates on AI answer engines (ChatGPT, Gemini, Perplexity, etc.) directly, separate from the on-site conversational layer - see `/features/ai-visibility-geo-aeo`.

Q: Can we use only some layers (e.g., just Support, not Sales)?
A: Agent configuration (Pillar 6) lets you enable and tune which agents and layers are active - see `/features/integration-administration`.

## INTERNAL LINKS

| Anchor                        | Destination                   |
| ----------------------------- | ----------------------------- |
| "Explore Features"            | `/features`                   |
| Each of the 9 pillar mentions | respective `/features/*` page |
| "individual pillar pages"     | `/features`                   |

## CONTENT NOTES

Source: 62-feature/9-pillar PDF.
Missing information: Real architecture diagrams/screenshots - dev notes above specify what to build.
Verification required: None - this page makes no comparative or statistical claims.
