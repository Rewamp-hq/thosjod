# Use-Case → Page Mapping

Per the cannibalization decision in `02-sitemap-and-page-inventory.md`, these are **not** standalone pages. Each is a named, anchor-linkable section within the listed page(s), so the same search intent isn't split across two competing URLs.

| Use case (from brief) | Lives as a section within | Backed by pillar |
|---|---|---|
| Convert anonymous visitors | `features/identification-enrichment.md`, `solutions/visitor-intelligence.md` | 2 |
| Identify high-intent visitors | `features/identification-enrichment.md` | 2 |
| Capture visitor information | `features/identification-enrichment.md` | 2 |
| Qualify inbound leads | `features/qualification-routing.md`, `solutions/lead-generation.md` | 3 |
| Score leads against ICP | `features/qualification-routing.md` | 3 |
| Route leads automatically | `features/qualification-routing.md` | 3 |
| Book meetings | `features/qualification-routing.md` | 3 |
| Automate website sales | `features/conversational-ai-agents.md`, `solutions/ai-sales.md` | 4 |
| Automate customer support | `features/conversational-ai-agents.md`, `solutions/ai-support.md` | 4 |
| Personalize website experiences | `features/discovery-engagement.md`, `solutions/website-personalization.md` | 1 |
| Automate follow-up | `features/automation-outbound.md` | 5 |
| Generate personalized outreach | `features/automation-outbound.md` | 5 |
| Improve CRM context | `features/integration-administration.md` | 6 |
| Identify knowledge gaps | `features/analytics-intelligence.md` | 7 |
| Analyze conversations | `features/analytics-intelligence.md` | 7 |
| Analyze visitor behavior | `features/analytics-intelligence.md` | 7 |
| Improve website conversion | `solutions/website-conversion.md` (hub combining 1+3+7) | 1, 3, 7 |
| Measure revenue impact | `features/analytics-intelligence.md` | 7, 9 |
| Track AI visibility | `features/ai-visibility-geo-aeo.md`, `solutions/ai-visibility.md` | 8 |
| Monitor competitor mentions | `features/ai-visibility-geo-aeo.md`, `ai-visibility/competitors.md` | 8 |
| Improve GEO/AEO | `solutions/geo-aeo.md`, `geo-aeo/optimization.md` | 8 |

**Why this matters for SEO:** each row above represents a real, distinct search query a buyer might type. By anchoring them as `<h2 id="...">` sections within the canonical page rather than separate thin pages, each canonical page can rank for a cluster of related queries instead of competing against its own sibling pages.
