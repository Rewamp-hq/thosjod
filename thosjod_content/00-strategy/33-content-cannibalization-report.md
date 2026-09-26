# OUTPUT 33 - Content Cannibalization Report

## Real Overlap Found and Fixed This Session

**Three pages target the same topic (AI Visibility/GEO-AEO):** `/ai-visibility` (hub), `/features/ai-visibility-geo-aeo`, `/solutions/ai-visibility`.

On inspection, their `Primary Keyword` fields were nearly identical ("ai visibility" vs. "AI visibility tracking tool") - genuine cannibalization risk, not just topical proximity. **Fixed** by re-targeting the hub page to an informational, top-of-funnel keyword ("what is AI visibility (GEO/AEO)") while the feature page keeps the commercial/tool-intent keyword ("AI visibility tracking tool") and the solution page keeps the outcome-framed keyword ("AI visibility for brands"). Same topic, three distinct search intents - differentiated by funnel stage, not just kept apart by hope.

| Page                              | Intent                                  | Funnel stage             |
| --------------------------------- | --------------------------------------- | ------------------------ |
| `/ai-visibility`                  | "What is this, broadly?"                | Awareness                |
| `/solutions/ai-visibility`        | "Why does this matter for my business?" | Consideration            |
| `/features/ai-visibility-geo-aeo` | "What exactly does the product do?"     | Consideration → Decision |

## Overlaps Resolved by Design (from earlier sitemap decisions, restated here for the audit)

1. **~20 "use case" bullets from the brief vs. Feature/Solution pages** - resolved by making use cases anchor-linkable sections within their matching page rather than separate URLs. See `10-use-case-mapping.md`.
2. **36+ potential individual competitor pages vs. cluster pages** - resolved by using cluster pages for 35 of 40 competitors and reserving 5 individual 1:1 pages only for genuine category peers. See `02-sitemap-and-page-inventory.md` Section E.
3. **Industry pages vs. Feature pages** - industry pages intentionally repeat feature _names_ (as "Key Features to Emphasize" bullets) but never repeat feature _descriptions_ - the full explanation lives only on the feature page, industry pages link to it. Verified: no industry page duplicates a "How It Works" sentence from any feature page.

## Checked and Cleared (no action needed)

- `/geo-aeo` vs `/solutions/geo-aeo` - same pattern as AI Visibility above, keywords already distinct ("GEO AEO optimization tool" vs. broader hub framing) - no fix needed, but flagged here as the same category of risk to monitor if content is later expanded.
- `/compare` cluster pages vs. 1:1 pages - no overlap; a company either has a cluster page OR a 1:1 page, never both (verified against the 5 companies with 1:1 pages - none also appear promoted individually within their cluster page beyond a listing mention).

## Recommendation for Ongoing Maintenance

Before adding any new page, check its `Primary Keyword` against `30-seo-metadata-database.csv` for near-duplicates - this session's one real finding was caught by literally doing that comparison, not by intuition.
