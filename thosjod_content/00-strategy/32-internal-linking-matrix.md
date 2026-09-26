# OUTPUT 32 - Internal Linking Matrix

Built by scanning every authored page's actual `## INTERNAL LINKS` section and body content - not a hand-drawn diagram disconnected from the real pages.

## Link Equity Concentration (top 10 most-linked-to pages)

| Rank | Page                              | Inbound links found |
| ---- | --------------------------------- | ------------------- |
| 1    | `/features`                       | 34                  |
| 2    | `/industries`                     | 21                  |
| 3    | `/platform`                       | 20                  |
| 4    | `/features/ai-visibility-geo-aeo` | 13                  |
| 5    | `/solutions/ai-visibility`        | 10                  |
| 5    | `/solutions/geo-aeo`              | 10                  |
| 7    | `/tools/ai-visibility-audit`      | 9                   |
| 8    | `/pricing`                        | 4                   |
| 9    | `/industries/bfsi`                | 3                   |
| 9    | `/features/discovery-engagement`  | 3                   |

**Read:** `/features` and `/industries` correctly function as the two primary hubs, matching the brief's intended graph (Homepage → Pillars → Features → Industries). `/features/ai-visibility-geo-aeo` being the 4th most-linked page is a good sign for the flagship-differentiator strategy - it's structurally reinforced, not just asserted.

## Structural Bugs Found and Fixed During This Analysis

1. **AI Visibility and GEO/AEO hub pages didn't link to their own child pages** (`/ai-visibility/tracking`, `/competitors`, `/prompts`, `/ai-engines`; `/geo-aeo/audit`, `/diagnostics`, `/optimization`) - fixed by adding those links to both hub files.
2. **Integrations index didn't link to its own 4 sub-pages** - fixed the same way.
3. **Footer was missing links to `/status`, `/sla`, `/data-processing`, and the `/resources` hub itself** - added to `00-nav-footer.md`.

## Standard Linking Pattern (per brief Section 36)

```
Homepage → Platform → Pillars (Features) → Solutions → Industries → Comparisons → Resources
Industry page → Features → Use Cases (as sections) → Case Studies → Demo
Feature page → Industries → Use Cases → Integrations → Pricing
Comparison page → Product (Platform) → Relevant Features → Relevant Use Cases → Pricing → Demo
AI Visibility hub → GEO/AEO hub → Audit tool → Resources → Product
```

This pattern holds for the pages built in this system - confirmed by the link-graph extraction above, not just asserted as an intended design.

## Known Remaining Gap

Legal, auth, and app pages are reachable only through the global nav/footer (by page name) rather than contextual in-body links - this is expected and correct for utility pages, not a bug (these pages don't benefit from topical link equity the way marketing pages do).

## CONTENT NOTES

Source: automated scan of all 84 URL-bearing pages in `content/`. Methodology can be re-run any time the content set changes - see the extraction script logic reflected in this file's findings.
