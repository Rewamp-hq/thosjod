# Content File Structure

This is what was actually built in this delivery (not a theoretical recommendation - the zip you received matches this exactly):

```
thosjod/
├── 00-strategy/                          ← read this folder first
│   ├── 00-nav-footer.md                  ← global nav/footer, referenced by every page
│   ├── 01-executive-product-understanding.md
│   ├── 02-sitemap-and-page-inventory.md
│   ├── 03-product-positioning.md
│   ├── 04-messaging-architecture.md
│   ├── 04b-icp-summary.md
│   ├── 10-use-case-mapping.md
│   ├── 29-faq-knowledge-base.md
│   ├── 30-seo-metadata-database.md(.csv)
│   ├── 31-geo-aeo-strategy.md
│   ├── 31b-objection-handling-library.md
│   ├── 32-internal-linking-matrix.md
│   ├── 33-content-cannibalization-report.md
│   ├── 34-content-gaps.md
│   ├── 35-founder-input-required.md
│   ├── 36-frontend-implementation-map.md
│   ├── 42-content-file-structure.md      ← this file
│   └── PROGRESS.md                        ← live status tracker
│
└── content/
    ├── pages/          home, platform, pricing, enterprise, features-index,
    │                   solutions-index, industries-index, compare-index
    ├── features/       8 pillar pages (1 file each)
    ├── solutions/       10 workflow pages
    ├── industries/       14 ICP pages
    ├── comparisons/       5 1:1 + 4 cluster pages + matrix.csv + methodology + template-rules
    ├── integrations/       index + 4 sub-pages
    ├── ai-visibility/       hub + 4 sub-pages
    ├── geo-aeo/       hub + 3 sub-pages
    ├── tools/       3 lead-magnet audit tools
    ├── resources/       index + blog architecture (taxonomy only)
    ├── company/       7 pages (about, contact, careers, customers, partners, press, status)
    ├── legal/       9 pages
    ├── auth/       8 flows in one file (short-form UX copy, not full pages)
    └── app/       application IA + UX copy, 38 routes in one reference file
```

## Why some things are one file, not one-file-per-page

- **Auth (8 flows)** and **App IA (38 routes)** are UX copy, not long-form marketing pages - bundling them keeps related, short entries scannable as a single reference a developer opens once per feature build, rather than 46 tiny files.
- **Comparisons folder** mixes the data (`competitive-matrix.csv`) with its methodology doc and the actual pages - kept together since the pages are literally generated from that CSV.

## Scaling This Structure

When real blog posts, case studies, or additional industries are added later, they follow the same folder pattern (`content/resources/blog/{slug}.md`, `content/case-studies/{slug}.md`) - no structural change needed, just more files in existing folders.
