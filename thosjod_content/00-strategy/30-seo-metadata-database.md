# OUTPUT 30 - SEO Metadata Database

**Full data:** `30-seo-metadata-database.csv` - programmatically extracted from every authored page's SEO block (84 pages with a URL; not hand-transcribed, so it can't drift from the actual page content).

## Coverage Summary

| Field            | Present | Missing |
| ---------------- | ------- | ------- |
| SEO Title        | 74      | 10      |
| Meta Description | 71      | 13      |
| Primary Keyword  | 55      | 29      |

## Why entries are "missing" (and which gaps actually matter)

Most of the "missing" rows are **intentional**, not oversights:

- Legal pages (`/privacy`, `/terms`, etc.) are marked `noindex` - they don't need a search-optimized title/keyword.
- Auth pages (`/login`, `/signup`, etc.) and App IA pages (`/app/*`) are product surface, not indexed marketing pages.
- Utility pages (`/thank-you`, 404) are intentionally `noindex, nofollow`.

**Real gaps worth fixing before launch:** Company pages (`/about`, `/careers`, `/customers`, `/partners`, `/press`) were drafted with placeholder/gap content since they depend on real company facts - their SEO metadata should be finalized once that content is filled in, not before.

## Keyword Clusters (pillar pages vs. supporting pages)

- **Pillar keyword:** "AI website lead engine" (Homepage) → supporting: "AI visitor identification tool," "AI lead qualification software," "AI sales agent for website"
- **Pillar keyword:** "AI visibility tracking tool" (Features/AI Visibility, Solutions/AI Visibility, /ai-visibility hub) → supporting: "GEO optimization tool," "AEO audit," "generative engine optimization" - **flag:** 3 separate pages target overlapping intent here (`/features/ai-visibility-geo-aeo`, `/solutions/ai-visibility`, `/ai-visibility`) - see `33-content-cannibalization-report.md` for how these are differentiated.
- **Pillar keyword:** industry + category combined (e.g., "compliant AI chatbot for banks and insurance") - one per `/industries/*` page, no overlap between industries.

## Search Intent Note on "GEO" and "AEO" as Terms

`[VERIFY BEFORE PUBLISHING]` - "GEO" (Generative Engine Optimization) and "AEO" (Answer Engine Optimization) are emerging terms with uncertain, likely still-low search volume as of this writing, mostly used within SEO-practitioner circles rather than by end buyers. Recommend pairing every use of "GEO/AEO" with the plainer "AI visibility" phrase (as most pages here already do) rather than leading with the acronyms alone, until real search-volume data confirms buyer familiarity.

## CONTENT NOTES

Source: extracted directly from the SEO blocks of all 84 authored pages via script - not manually re-typed, so this file cannot silently drift from the actual pages.
