# OUTPUT 16 - Competitive Comparison Matrix

**Full data:** `competitive-matrix.csv` (31 capability rows × 41 columns: Thosjod + 40 companies from the 4 provided CSVs)

## Methodology (read before using any cell)

Each competitor cell is derived by matching keywords from that company's **one-sentence "Main use case" and "Key capabilities" fields** - the only data provided - against each capability row. A cell reads:

- **"Yes (public description)"** - the company's own one-line description explicitly mentions this capability or a clear synonym.
- **"Not identified in source"** - the provided description doesn't mention it. **This does not mean the competitor lacks the capability** - it means the one-sentence CSV description doesn't confirm it either way. Treat every "Not identified" cell as `[VERIFY BEFORE PUBLISHING]`, not as a confirmed gap, before using it in any public-facing comparison claim.

Thosjod's column is marked from the verified 62-feature source document, not a one-line description, so it isn't directly apples-to-apples with the competitor columns - flagged here explicitly rather than glossed over.

## The One Finding Worth Highlighting

Across all 40 companies, **zero** show any public-description evidence of:

- AI visibility (tracking brand presence in AI-generated answers)
- AI engine tracking
- Competitor mention tracking inside AI answers
- GEO/AEO audit
- Prompt tracking for AI-visibility purposes

> **Scope update (2026-09-26):** this finding holds only for these 40 companies (chatbots, visitor-ID, SDR and conversational-AI tools). Dedicated AI-visibility/GEO platforms do exist and do these things - see `research/ai-visibility-tools.csv` and the draft `/compare/ai-visibility-tools`. Never use this finding as "no competitor tracks AI visibility."

This is the same whitespace claim made in `01-executive-product-understanding.md`, now backed by the full 40-company keyword pass rather than category-level assertion. It's still a **description-level** finding, not a deep product audit - re-verify against each company's current site before publishing as a public comparative claim, since public descriptions can be incomplete and products change.

## Rows With Broad Competitor Coverage (use with more confidence)

- **CRM sync** - matched for most companies in the AI Website Sales Agents and AI SDR clusters (expected, since CRM integration is a stated selling point industry-wide).
- **Lead qualification** - matched broadly across AI Website Sales Agents, AI SDR, and No-Code Chatbot clusters.
- **Multilingual AI** - strongly present in the Enterprise Conversational AI (India) cluster specifically, less so elsewhere.

## Rows Where "Not Identified" Likely Reflects a Real Gap (moderate confidence)

- **Website personalization / Dynamic content** - narrowly matched even among direct category peers (Expertise.ai, Drift, Qualified); their public positioning centers on conversation and qualification, not page-level personalization.
- **Sentiment analysis / Heatmaps / Knowledge gaps** - rarely matched anywhere in the dataset; these appear to be under-served analytics capabilities industry-wide, not just absent from Thosjod's direct competitors.

## How to Use This for Comparison Pages

Individual and cluster comparison pages (this folder) pull only the rows relevant to that competitor/cluster, and preserve the "Not identified in source" language verbatim - never converted to "doesn't have" language. See `13-comparison-page-template-notes.md` for the exact phrasing rules carried into every comparison page.

**Content Notes**
Source: 4 competitor CSVs (Company / Main use case / Key capabilities / Official URL), 62-feature Thosjod source PDF.
Verification required: Every "Not identified in source" cell, before any comparison page states or implies a competitor lacks that capability.
