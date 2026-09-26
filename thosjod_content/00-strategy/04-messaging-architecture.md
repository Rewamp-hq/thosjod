# OUTPUT 05 - Messaging Architecture

## Elevator Pitches (by length)

**One sentence:** Thosjod identifies, engages, and qualifies every website visitor in real time, then tracks how your brand shows up across ChatGPT, Gemini, and other AI answer engines.

**Two sentences:** Most website visitors leave without ever being seen, and most brands have no idea whether they're mentioned when buyers ask AI instead of Google. Thosjod closes both gaps in one platform - real-time visitor identification and qualification, plus native AI-visibility tracking (GEO/AEO).

**30-second version:** Your website already gets traffic - the problem is conversion, not volume. Thosjod identifies visitors who never fill out a form, engages them with a grounded AI agent, qualifies and routes the sales-ready ones automatically into your CRM, and - because buyer research is shifting from search engines to AI engines - tracks and helps you improve how your brand actually shows up when someone asks ChatGPT or Gemini instead of Google.

## Headline Bank (by page type)

**Home:** "Turn every website visitor into a qualified conversation"
**Platform:** "One engine. Every visitor. Every AI engine."
**Features:** "Everything you need to turn traffic into pipeline"
**AI Visibility:** "Be found by AI, not just Google"
**Industry pages:** "[Industry reality] - solved without adding headcount" _(customize per industry, not literal template text)_
**Comparison pages:** "Where Thosjod and [Competitor] actually differ"
**Pricing:** "Simple, usage-based pricing"

## Value Proposition Pillars (repeat consistently across all pages)

1. Capture visitors who never fill a form
2. Engage with grounded, no-hallucination AI
3. Qualify and route automatically
4. Be measurably visible in AI answer engines
5. Launch without an engineering sprint

## CTA Hierarchy (consistent site-wide)

| Tier             | Copy                                                                   | Used for                                  |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------- |
| Primary          | `Book a Demo`                                                          | Top nav, all page-ending CTAs             |
| Secondary        | `See It In Action`                                                     | Hero sections, low-commitment exploration |
| Tertiary         | `Explore Features` / `See Full Pricing` / `Talk to Sales`              | Mid-page section CTAs, context-specific   |
| Micro-conversion | `Get product updates` (newsletter), `Try the free AI Visibility Audit` | Footer, blog, resource pages              |

## Brand Voice

**Is:** Intelligent, precise, confident without hype, plain-spoken about mechanisms (say _how_ something works, not just that it's "powerful"), honest about limitations (e.g., "grounded" claims come with a stated fallback: human handoff).

**Is not:** Buzzword-dense, falsely urgent, prone to unverified superlatives ("world's best," "revolutionary," "guaranteed," "10x") or invented statistics.

**Working rule for every page:** if a sentence could be said by any AI SaaS company about any product, cut it or make it specific to a named mechanism (e.g., not "powerful AI insights" → "conversation quality and sentiment scored per session").

## Objection-Handling Quick Reference

(Full library in `31-objection-handling.md`; summarized here for messaging consistency.)

| Objection                                        | One-line response, source-backed                                                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "We already have a chatbot."                     | Most chatbots only answer questions submitted in chat - they don't identify the ~98% of visitors who never open the widget at all.                                                                                       |
| "Will the AI say something wrong?"               | Every response is restricted to your approved knowledge base (RAG), with human handoff instead of a guess.                                                                                                               |
| "Is visitor identification even legal?"          | Identification runs within a configurable, consent-aware framework - see `/responsible-ai` and `/security`. [VERIFY BEFORE PUBLISHING: confirm actual consent-flow implementation matches this claim before publishing.] |
| "This sounds like a big implementation project." | No-code setup - configure and launch without an engineering sprint.                                                                                                                                                      |
| "How is this different from [Competitor]?"       | See `/compare` - category-specific, factual comparison, no invented superiority claims.                                                                                                                                  |

**Content Notes**

- Source: 62-feature source PDF (for all mechanism-specific claims), competitor CSVs (for differentiation claims).
- Missing: Real pricing objection handling requires the actual finalized pricing page copy (built in Output 17) to link to specific numbers.
