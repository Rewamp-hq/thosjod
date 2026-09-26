# OUTPUT 36 - Frontend Implementation Map

Rather than repeating near-identical specs 84 times (one per page), this maps **page templates** to components - since most of the 84 marketing pages are one of 6 reusable templates. Build the template once; content is data.

## Template 1: Standard Marketing Page (Home, Platform, Enterprise)

**Component:** `<MarketingPage />` composed of section components below.
**Sections/Components:** `<Hero />`, `<ProblemGrid />` (icon+title+body cards), `<StepFlow />` (numbered horizontal flow), `<PillarGrid />` (8-card grid), `<FeatureTable />` (What/How/Why 3-col table), `<FAQAccordion />`, `<FinalCTA />`
**Forms:** None (CTA links to `/demo`)
**Images/Icons:** Hero visual per page (custom), pillar icons (8, one per capability - reuse consistent icon set), no stock photography
**Data requirements:** Static content from corresponding `.md` file; Homepage trust-bar logos and announcement bar are the only dynamic/conditional content blocks
**Schema:** `Organization`, `WebSite`, `FAQPage` (where FAQ section present)
**Responsive:** Pillar grid collapses 4→2→1 columns; step flow collapses to vertical stack below 768px

## Template 2: Feature/Pillar Detail Page (8 pages)

**Component:** `<FeaturePage />`
**Sections:** `<Hero />`, `<ProblemSolution />` (2-col), `<FeatureTable />` (full pillar table, expandable rows on mobile), `<ICPRelevance />` (tag list linking to industry pages), `<FAQAccordion />`
**Data requirements:** Pulls directly from `features.json`-equivalent data source - **recommend the dev team import the actual `features.json` used to build these pages** rather than re-transcribing the tables, to guarantee the frontend never drifts from source data
**Schema:** `FAQPage`, `Product` (with `additionalProperty` per feature - optional, GEO-friendly)

## Template 3: Industry Page (14 pages)

**Component:** `<IndustryPage />`
**Sections:** `<Hero />`, `<RealityProblemFit />` (3-part narrative block), `<KeyFeaturesList />` (bulleted, linking to `/features/*`), `<FAQAccordion />`
**Data requirements:** Pulls from `icps.json`-equivalent + `icp_slugs.json` mapping (slug, keyword, short display name) - same recommendation as Template 2, import the real data rather than re-typing
**Schema:** `FAQPage`

## Template 4: Solution Page (10 pages)

**Component:** `<SolutionPage />`
**Sections:** `<Hero />`, `<ProblemWorkflowFriction />` (3-step narrative), `<SolutionStatement />`, `<KeyFeaturesList />`
**Data requirements:** `solutions_meta.json`-equivalent

## Template 5: Comparison Page (10 pages: 4 cluster + 5 1:1 + 1 index)

**Component:** `<ComparisonPage />`
**Sections:** `<Hero />`, `<WhatIsThosjod />`, `<WhatIsCompetitor />` (single company) or `<ClusterMemberList />` (cluster), `<CapabilityTable />` (rendered from `competitive-matrix.csv` - **do not hardcode table values in JSX; read from the CSV/derived JSON so updates to the matrix propagate automatically**), `<QuestionsToConsider />`, `<Disclaimer />` (verbatim block, every page), `<FAQAccordion />`
**Critical dev note:** The `<CapabilityTable />` component must render "Not identified in source material" distinctly (e.g., muted gray, not a red X) - an X icon visually implies "confirmed absent," which the content is explicitly designed not to claim.

## Template 6: AI Visibility / GEO / AEO Cluster (9 pages)

**Component:** `<CapabilityClusterPage />` (same shape as Template 2, lighter weight)
**Sections:** `<Hero />`, `<RelevantFeaturesTable />`
**Interactive element opportunity:** `/tools/ai-visibility-audit` and `/tools/geo-aeo-audit` need a real interactive form + processing + results flow - see below.

## Interactive Tools (3 pages - the only pages needing backend/API work beyond CMS content)

| Tool                     | Form fields                                   | API requirement                                                                                                              |
| ------------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| AI Visibility Audit      | Company name, URL, up to 3 competitors        | Calls the real Gemini-grounded tracking pipeline (Pillar 8 feature), scoped down for a free-tier result                      |
| GEO/AEO Audit            | Website URL                                   | Calls the real rules-engine audit (Pillar 8 feature)                                                                         |
| Website Conversion Audit | URL, traffic estimate, current capture method | Static/directional estimate only - no live crawl (per content notes on that page, this is intentionally NOT a live analysis) |

All three require: lead-capture gate (email before full results), a results page/state, and a follow-up email trigger into the Automation & Outbound system (Pillar 5) - genuine dogfooding of the product's own automation feature.

## Application (`/app/*`, ~38 pages)

**Not marketing pages - build as the actual product**, using `27-28-application-ia-ux-copy.md` as the copy/empty-state/error-state source of truth per route. Recommend a standard authenticated-app shell (`<AppShell />` with persistent sidebar nav) wrapping all `/app/*` routes, matching the navigation list in that document's Dashboard entry.

## Global Components (used across every template)

`<Header />` (nav from `00-nav-footer.md`), `<Footer />` (same source), `<CTAButton />` (3 variants: primary/secondary/tertiary per `04-messaging-architecture.md`'s CTA hierarchy), `<Breadcrumb />` (for Feature/Industry/Solution/Comparison pages, aiding both UX and GEO structured data).

## Schema/Structured Data Priority

Implement `FAQPage` schema first (present on ~40 pages, directly supports the GEO/AEO strategy in `31-geo-aeo-strategy.md`) before `Product` or comparison-specific schema - highest GEO leverage for lowest implementation effort.
