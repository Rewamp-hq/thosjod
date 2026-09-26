# PAGE: Homepage

Name: Homepage
URL: `/`
Page Type: Marketing - core
Audience: All 14 ICPs; primary decision-makers in marketing, sales, RevOps, and IT/security (regulated ICPs)
ICP: All
Funnel Stage: Awareness → Consideration
Search Intent: Branded + category ("AI website lead engine," "AI visitor identification software")
Primary CTA: Book a Demo
Secondary CTA: See It In Action

## SEO

SEO Title: Thosjod: AI Website Lead Engine with AI Visibility Tracking
Meta Description: Thosjod identifies anonymous website visitors, qualifies leads with grounded AI agents, and tracks your brand's visibility in ChatGPT, Gemini and other AI engines.
Primary Keyword: AI website lead engine
Secondary Keywords: identify anonymous website visitors, AI visitor identification, AI lead qualification, GEO AEO tracking, deanonymize website traffic

## SECTION 1 - Announcement Bar

Body: `[CONTENT GAP - NEEDS INPUT]` - reserve for a real, current announcement (funding, launch, press mention). Do not populate with a placeholder claim. Component should render conditionally and collapse to zero height if no announcement is set.

## SECTION 2 - Navigation

See `00-strategy/00-nav-footer.md` for full nav/footer copy (ported from prior content system, rebranded).

## HERO

Eyebrow: AI Website Discovery & Lead Engine
H1: Turn every website visitor into a qualified conversation
Subheadline: Thosjod identifies, engages, and qualifies visitors in real time - form or no form - then tracks how your brand actually shows up when buyers ask AI instead of Google.
Primary CTA: Book a Demo
Secondary CTA: See It In Action

> Dev note: hero visual - live conversation mockup component `<HeroConversationDemo />` (visitor question → grounded AI answer → visitor identified → meeting booked). Reuse existing component spec from prior content system if already built.

## SECTION 3 - Trust / Social Proof

H2: Built for high-traffic teams
Body: `[CONTENT GAP - NEEDS INPUT]` - logo strip requires real customer/partner logos. Component must hide gracefully (no empty gray box) until populated.

## SECTION 4 - The Problem

H2: Your website is full of buyers you'll never meet
Supporting bullets:

- 98% of visitors leave unseen - they research, compare, and decide, then bounce before ever filling a form.
- Forms kill intent - the moment you ask for an email, most best-fit visitors disappear.
- Blind sales outreach - reps chase cold leads with no idea what a prospect actually needed.
- Invisible in AI answers - when buyers ask ChatGPT or Gemini instead of Google, brands have zero visibility and zero way to fix it.

## SECTION 5 - Category Explanation

H2: A new category: the AI Website Discovery & Lead Engine
Body: Website chatbots answer questions. Visitor-ID tools flag anonymous traffic. AI SDR tools automate outbound. AI-visibility tools track how brands appear in AI answers. Each solves one stage. Thosjod is built as one continuous engine instead of a stitched-together stack - converting your visitors and tracking your AI visibility in the same place.
Internal link: `/why-thosjod` (full category comparison)

## SECTION 6 - Product Explanation

H2: One engine, nine connected capabilities
Body: Discovery & Engagement, Identification & Enrichment, Qualification & Routing, Conversational AI Agents, Automation & Outbound, Integration & Administration, Analytics & Intelligence, AI Visibility & GEO/AEO - rolling up into the Outcome Metrics leadership actually tracks.
Internal link: `/platform`

## SECTION 7 - How Thosjod Works

H2: From an anonymous click to a booked meeting
Supporting steps:

1. Visitor Arrives - on any page, with or without prior identity
2. Thosjod Engages - real-time, personalized conversation, no waiting
3. Identifies & Qualifies - deanonymizes, enriches, scores against your ICP
4. Pipeline & Revenue - routes to the right rep, books the meeting, syncs the CRM
   > Journey framing note: "Traffic → Discovery → Identification → Engagement → Qualification → Routing → Conversion → Analysis → Optimization" (per brief Section 6) is used as the full journey on `/platform`; the homepage uses the shorter 4-step version above for scannability, and both are sourced from the same 9-pillar structure - not a contradiction, a zoom level difference.

## SECTION 8 - Discovery & Engagement (pillar teaser)

H2: Hyper-personalized discovery experience
Body: Real-time engagement, dynamic content serving, and a custom on-brand agent - see all 5 features.
Internal link: `/features/discovery-engagement`

## SECTION 9 - Visitor Identification (pillar teaser)

H2: Deanonymized lead capture
Body: Identify anonymous visitors, enrich data on the fly, and recognize them across every session - see all 6 features.
Internal link: `/features/identification-enrichment`

## SECTION 10 - Qualification & Routing (pillar teaser)

H2: The right lead, to the right rep, automatically
Body: ICP scoring, rule-based routing, meeting booking, and CRM context - see all 7 features.
Internal link: `/features/qualification-routing`

## SECTION 11 - AI Agents (pillar teaser)

H2: Sales, support, and voice - grounded and multilingual
Body: Sales Agent, Support Agent, voice, multilingual, and no-hallucination guardrails - see all 8 features.
Internal link: `/features/conversational-ai-agents`

## SECTION 12 - Automation (pillar teaser)

H2: AI-driven playbooks that replicate your best reps
Body: Natural-language playbooks, automated follow-up, and bidirectional social SDR - see all 6 features.
Internal link: `/features/automation-outbound`

## SECTION 13 - Analytics (pillar teaser)

H2: See exactly what's working - and what isn't
Body: Revenue attribution, funnel tracking, sentiment analysis, and knowledge-gap insights - see all 9 features.
Internal link: `/features/analytics-intelligence`

## SECTION 14 - AI Visibility (flagship pillar teaser)

H2: Be found by AI, not just Google
Body: One-click access to 6 AI engines, live Gemini tracking with Search grounding, competitor mention tracking, and an explainable AEO/GEO audit - see all 9 features.
Internal link: `/features/ai-visibility-geo-aeo`
Visual callout: "Unlike website chatbots and AI SDR tools, Thosjod tracks AI visibility natively - in the same engine that converts your visitors."

## SECTION 15 - Industry Solutions

H2: Built for any website where traffic matters
Body: 14 industries mapped, from Tech/SaaS to Government - same underlying problem: traffic without conversion.
Grid: link to all 14 `/industries/[slug]` pages (see `04b-icp-summary.md`)
Internal link: `/industries`

## SECTION 16 - Use Cases

H2: What teams actually do with Thosjod
Body: Convert anonymous visitors, qualify inbound leads, automate follow-up, track AI visibility - see the full use-case index.
Internal link: `/solutions` (use cases live as sections within Solution/Feature pages - see `10-use-case-mapping.md`)

## SECTION 17 - Integrations

H2: Fits into how your team already works
Body: HubSpot, Salesforce, calendar tools, and webhooks/API - no rip-and-replace.
Internal link: `/integrations`

## SECTION 18 - Outcomes

H2: What changes when your website starts qualifying itself
Supporting bullets (Pillar 9, framed as questions the dashboard answers, not fabricated numbers):

- How many inbound meetings is the website generating?
- How much of direct customer acquisition traces back to the website?
- How much has chat-to-lead conversion improved since deployment?
- Is consultation close rate improving?
- Is churn trending down?
- Is engagement and CTA click-through increasing?
  > Dev note: render actual customer metrics here once available; until then this section states _what is measured_, not invented example numbers.

## SECTION 19 - FAQ

Q: What makes Thosjod different from a chatbot?
A: Chatbots answer questions from visitors who choose to open the widget. Thosjod also identifies and engages the visitors who never open it at all.

Q: Does Thosjod replace our CRM?
A: No - it syncs into your existing CRM (HubSpot, Salesforce) rather than replacing it.

Q: Can the AI agent give wrong answers?
A: Every response is grounded in your approved knowledge base, with human handoff instead of a guess.

Q: What is AI Visibility / GEO/AEO?
A: The practice of tracking and improving how your brand is represented in AI-generated answers (ChatGPT, Gemini, Perplexity, etc.), the way SEO tracks and improves search-engine visibility. See `/geo-aeo`.

## SECTION 20 - Final CTA

H2: Give your website a voice worth talking to
Body: Book a 20-minute walkthrough and see Thosjod identify, qualify, and route a real visitor session live.
Primary CTA: Book a Demo

## SECTION 21 - Footer

See `00-strategy/00-nav-footer.md`.

## INTERNAL LINKS

| Anchor                               | Destination                           |
| ------------------------------------ | ------------------------------------- |
| "See all 5 features"                 | `/features/discovery-engagement`      |
| "See all 6 features"                 | `/features/identification-enrichment` |
| "See all 7 features"                 | `/features/qualification-routing`     |
| "See all 8 features"                 | `/features/conversational-ai-agents`  |
| "See all 6 features" (automation)    | `/features/automation-outbound`       |
| "See all 9 features" (analytics)     | `/features/analytics-intelligence`    |
| "See all 9 features" (AI visibility) | `/features/ai-visibility-geo-aeo`     |
| Industry grid                        | `/industries/*` (14 pages)            |
| "Full category comparison"           | `/why-thosjod`                        |
| "full use-case index"                | `/solutions`                          |

## CONTENT NOTES

Source: 62-feature/9-pillar PDF, competitor CSVs (for the whitespace claim), prior content system (nav/footer/CTA bank, ported and rebranded).
Missing information: Announcement bar content, trust-bar logos, real outcome numbers.
Verification required: None for the AI-visibility positioning. The former "no competitor tracks AI visibility" claim was withdrawn on 2026-09-26: dedicated AI-visibility tools exist (see `comparisons/research/ai-visibility-tools.csv`). Sections 5 and 14 now use scoped wording that compares Thosjod only with categories that were actually researched.
