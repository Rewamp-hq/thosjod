# OUTPUT 02 + 03 - Complete Sitemap & Page Inventory

**Format note:** The brief's Section 5 requests 14 columns per page (name, URL, purpose, audience, ICP, funnel stage, search intent, primary/secondary CTA, parent, related pages, SEO priority, content priority, internal links). Listing all 14 for every page here would produce an unreadably wide table. This file covers name, URL, purpose, audience, funnel stage, and priority (P0–P3) per page. Secondary CTA, related pages, and full internal-link mapping are consolidated once, correctly, in `32-internal-linking-matrix.md` rather than repeated on every row.

**Priority key:** P0 = launch critical · P1 = important · P2 = growth/SEO · P3 = future

---

## A. Core Pages

| Page        | URL            | Purpose                                               | Audience                        | Funnel Stage              | Priority |
| ----------- | -------------- | ----------------------------------------------------- | ------------------------------- | ------------------------- | -------- |
| Homepage    | `/`            | Full narrative: problem → solution → proof → CTA      | All ICPs                        | Awareness → Consideration | P0       |
| Platform    | `/platform`    | Explain the unified architecture across all 9 pillars | Technical evaluators, champions | Consideration             | P0       |
| Why Thosjod | `/why-thosjod` | Category differentiation, USPs, trust                 | Consideration-stage buyers      | Consideration             | P0       |
| Pricing     | `/pricing`     | Plans, credits, FAQ                                   | Bottom-funnel                   | Decision                  | P0       |
| Enterprise  | `/enterprise`  | Security, governance, deployment for large orgs       | IT/security/procurement         | Decision                  | P1       |
| Book a Demo | `/demo`        | Conversion form                                       | Bottom-funnel                   | Decision                  | P0       |
| Thank You   | `/thank-you`   | Post-submission confirmation                          | N/A                             | Post-conversion           | P0       |
| 404         | (system page)  | Graceful error recovery                               | N/A                             | N/A                       | P1       |

## B. Product / Features

| Page                         | URL                                    | Purpose                                      | Audience                        | Funnel Stage  | Priority |
| ---------------------------- | -------------------------------------- | -------------------------------------------- | ------------------------------- | ------------- | -------- |
| Features overview            | `/features`                            | Entry point to all 8 pillars + outcomes      | All ICPs                        | Consideration | P0       |
| Discovery & Engagement       | `/features/discovery-engagement`       | Pillar 1 deep-dive                           | Marketing, CRO leads            | Consideration | P0       |
| Identification & Enrichment  | `/features/identification-enrichment`  | Pillar 2 deep-dive                           | Sales/RevOps leads              | Consideration | P0       |
| Qualification & Routing      | `/features/qualification-routing`      | Pillar 3 deep-dive                           | Sales ops                       | Consideration | P0       |
| Conversational AI Agents     | `/features/conversational-ai-agents`   | Pillar 4 deep-dive                           | Sales + Support leads           | Consideration | P0       |
| Automation & Outbound        | `/features/automation-outbound`        | Pillar 5 deep-dive                           | RevOps, sales leaders           | Consideration | P1       |
| Integration & Administration | `/features/integration-administration` | Pillar 6 deep-dive                           | IT/admin                        | Consideration | P1       |
| Analytics & Intelligence     | `/features/analytics-intelligence`     | Pillar 7 deep-dive                           | Marketing/RevOps analysts       | Consideration | P1       |
| AI Visibility & GEO/AEO      | `/features/ai-visibility-geo-aeo`      | Pillar 8 deep-dive - flagship differentiator | Marketing/SEO leads, executives | Consideration | P0       |

> **Decision (Section 8):** Outcome Metrics (Pillar 9) is **not** a standalone feature page - it's results, not a buildable capability. It appears as a section on the Homepage, Platform page, and each relevant pillar page instead. This avoids a page with nothing to say beyond "here are some numbers."

## C. Solutions

| Page                    | URL                                  | Purpose                                                                                        | Audience              | Funnel Stage                        | Priority |
| ----------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------- | -------- |
| Solutions index         | `/solutions`                         | Hub linking to workflow-based and industry-based solutions                                     | All ICPs              | Awareness                           | P1       |
| Website Conversion      | `/solutions/website-conversion`      | Pillars 1+3+7 combined narrative                                                               | CRO/growth leads      | Consideration                       | P1       |
| Lead Generation         | `/solutions/lead-generation`         | Pillars 2+3 combined narrative                                                                 | Sales/marketing leads | Consideration                       | P1       |
| Sales Automation        | `/solutions/sales-automation`        | Pillars 4(Sales Agent)+5 combined                                                              | Sales leaders         | Consideration                       | P1       |
| Visitor Intelligence    | `/solutions/visitor-intelligence`    | Pillar 2 as a standalone workflow story                                                        | RevOps, ABM teams     | Consideration                       | P1       |
| AI Sales                | `/solutions/ai-sales`                | Sales Agent-specific narrative                                                                 | Sales leaders         | Consideration                       | P2       |
| AI Support              | `/solutions/ai-support`              | Support Agent-specific narrative                                                               | Support/CX leaders    | Consideration                       | P2       |
| Customer Engagement     | `/solutions/customer-engagement`     | Pillar 1 + personalization narrative                                                           | Marketing/CX leads    | Consideration                       | P2       |
| Website Personalization | `/solutions/website-personalization` | Dynamic content serving narrative                                                              | CRO/marketing leads   | Consideration                       | P2       |
| AI Visibility           | `/solutions/ai-visibility`           | Business-outcome framing of Pillar 8 (pairs with the feature page, which is capability-framed) | Marketing/executives  | Consideration                       | P0       |
| GEO/AEO                 | `/solutions/geo-aeo`                 | SEO-practitioner-framed entry to Pillar 8                                                      | SEO/content teams     | Awareness (high search volume term) | P0       |

> **Decision (Section 10, cannibalization):** The brief's ~20-item Use Case list is **not** built as 20 separate pages. Nearly every use case (e.g., "Convert anonymous visitors," "Identify high-intent visitors," "Score leads against ICP") is the same content as a Feature or Solution page under a different label - building both would cannibalize search intent and split link equity. Instead, each use case is written as a **named, anchor-linkable section within its matching Solution or Feature page** (e.g., "Identify high-intent visitors" lives inside `/features/identification-enrichment` and `/solutions/visitor-intelligence`). See `10-use-case-mapping.md` for the full use-case → page mapping.

## D. Industries (14 ICPs, from source)

| Page                           | URL                                       | Priority |
| ------------------------------ | ----------------------------------------- | -------- |
| Industries index               | `/industries`                             | P1       |
| Tech / SaaS                    | `/industries/saas`                        | P0       |
| Non-Tech SMB                   | `/industries/smb`                         | P1       |
| E-commerce / D2C               | `/industries/ecommerce`                   | P0       |
| Universities & Higher-Ed       | `/industries/education`                   | P0       |
| Government / PSU               | `/industries/government`                  | P1       |
| BFSI                           | `/industries/bfsi`                        | P0       |
| Healthcare                     | `/industries/healthcare`                  | P0       |
| Real Estate                    | `/industries/real-estate`                 | P1       |
| Travel & Hospitality           | `/industries/travel-hospitality`          | P2       |
| Legal & Professional Services  | `/industries/legal-professional-services` | P2       |
| Manufacturing / B2B Industrial | `/industries/manufacturing`               | P1       |
| Media & Publishing             | `/industries/media-publishing`            | P2       |
| Telecom                        | `/industries/telecom`                     | P2       |
| EdTech                         | `/industries/edtech`                      | P2       |

## E. Comparisons

| Page                                    | URL                                           | Type                                                                                                                                                        | Priority     |
| --------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Compare index                           | `/compare`                                    | Hub                                                                                                                                                         | P1           |
| vs AI Website Sales Agents              | `/compare/ai-website-sales-agents`            | Cluster (Expertise.ai, Handhold, Qualified, Drift, Intercom Fin)                                                                                            | P0           |
| vs No-Code Website Chatbots             | `/compare/no-code-chatbots`                   | Cluster (Chatbase, Tidio, Landbot, Wonderchat, SiteGPT, Botsonic, Kommunicate, WotNot, Engati, Ada)                                                         | P1           |
| vs AI SDR / Outbound Automation         | `/compare/ai-sdr-outbound-automation`         | Cluster (Lindy, Relevance AI, Clay, 11x, Artisan, Regie.ai, Conversica, AiSDR, Outreach, Salesloft)                                                         | P1           |
| vs Enterprise Conversational AI (India) | `/compare/enterprise-conversational-ai-india` | Cluster (CoRover/BharatGPT, Haptik, Yellow.ai, Gupshup, Uniphore, Skit.ai, Verloop.io, Niki.ai, Gnani.ai)                                                   | P2           |
| vs Visitor Identification Tools         | `/compare/visitor-identification-tools`       | 1:1 - Warmly                                                                                                                                                | P1           |
| Thosjod vs Expertise.ai                 | `/compare/thosjod-vs-expertise-ai`            | 1:1 - closest category peer                                                                                                                                 | P0           |
| Thosjod vs Drift                        | `/compare/thosjod-vs-drift`                   | 1:1                                                                                                                                                         | P1           |
| Thosjod vs Qualified                    | `/compare/thosjod-vs-qualified`               | 1:1                                                                                                                                                         | P1           |
| Thosjod vs Intercom Fin                 | `/compare/thosjod-vs-intercom-fin`            | 1:1                                                                                                                                                         | P1           |
| vs AI Visibility / GEO Tools            | `/compare/ai-visibility-tools`                | **[COMPETITOR DATA GAP]** - no dedicated GEO/AEO-tracking competitor appears in the provided research; do not publish until real competitor data is sourced | P3 (blocked) |

> **Decision (Section 12–16):** Individual 1:1 pages are reserved for the 5 companies whose "main use case" in the CSV data is genuinely the same category as Thosjod (website-embedded AI agent for sales/qualification). The other 31 companies are addressed through 4 cluster pages, which is enough real signal to write substantively without inventing feature-level detail the CSV doesn't contain. Interactive product-demo tools (Supademo, Navattic, Reprise) are **not** given comparison pages at all - their main use case (guided product tours) is a different buying decision, not a genuine alternative to Thosjod; forcing a comparison would be an unsupported category conflation.

## F. Integrations

| Page               | URL                        | Priority |
| ------------------ | -------------------------- | -------- |
| Integrations index | `/integrations`            | P1       |
| CRM (hub)          | `/integrations/crm`        | P1       |
| HubSpot            | `/integrations/hubspot`    | P1       |
| Salesforce         | `/integrations/salesforce` | P2       |
| Calendar           | `/integrations/calendar`   | P2       |
| Webhooks/API       | `/integrations/api`        | P2       |

> Marketo and LeanData are mentioned only in the pricing/plan structure (Enterprise tier), not in the 62-feature source list with implementation detail - they get a listing/logo on the integrations index but not a dedicated deep-dive page yet. Flag: `[CONTENT GAP - NEEDS INPUT]` if deeper Marketo/LeanData integration documentation exists elsewhere.

## G. AI Visibility / GEO / AEO Cluster

| Page                        | URL                          | Priority |
| --------------------------- | ---------------------------- | -------- |
| AI Visibility hub           | `/ai-visibility`             | P0       |
| GEO/AEO hub                 | `/geo-aeo`                   | P0       |
| AI Visibility Tracking      | `/ai-visibility/tracking`    | P1       |
| Competitor Mention Tracking | `/ai-visibility/competitors` | P1       |
| Prompt Library              | `/ai-visibility/prompts`     | P2       |
| AI Engines Supported        | `/ai-visibility/ai-engines`  | P1       |
| GEO/AEO Audit               | `/geo-aeo/audit`             | P0       |
| Issue Diagnostics           | `/geo-aeo/diagnostics`       | P1       |
| GEO/AEO Optimization Guide  | `/geo-aeo/optimization`      | P2       |

## H. Audit / Free Tools (Lead Magnets)

| Tool                     | Landing URL                       | Priority                                                          |
| ------------------------ | --------------------------------- | ----------------------------------------------------------------- |
| AI Visibility Audit      | `/tools/ai-visibility-audit`      | P0 - highest lead-gen potential given the flagship differentiator |
| GEO/AEO Audit            | `/tools/geo-aeo-audit`            | P0                                                                |
| Website Conversion Audit | `/tools/website-conversion-audit` | P2                                                                |

> **Decision (Section 21):** "Website AI Readiness Audit" and "Lead Capture Audit" from the brief's example list are **not** built - they'd require functionality (readiness scoring, capture-rate estimation without live data access) not evidenced in the 62-feature source list. Only tools directly backed by real product capability (Pillar 8's audit engine) are built.

## I. Resources

| Page          | URL             | Priority                                          |
| ------------- | --------------- | ------------------------------------------------- |
| Resources hub | `/resources`    | P1                                                |
| Blog          | `/blog`         | P1 (CMS-driven, no static articles authored here) |
| Guides        | `/guides`       | P2                                                |
| Reports       | `/reports`      | P3                                                |
| Glossary      | `/glossary`     | P2 - strong GEO/AEO play (entity definitions)     |
| Case Studies  | `/case-studies` | P1 - `[CASE STUDIES REQUIRED]`, template only     |
| Webinars      | `/webinars`     | P3                                                |
| Templates     | `/templates`    | P3                                                |
| Changelog     | `/changelog`    | P2                                                |
| Documentation | `/docs`         | P1                                                |
| Help Center   | `/help`         | P1                                                |

## J. Company

| Page      | URL          | Priority                                                |
| --------- | ------------ | ------------------------------------------------------- |
| About     | `/about`     | P1                                                      |
| Customers | `/customers` | P2 - `[TESTIMONIALS REQUIRED]`                          |
| Careers   | `/careers`   | P2                                                      |
| Partners  | `/partners`  | P3                                                      |
| Contact   | `/contact`   | P0                                                      |
| Press     | `/press`     | P3                                                      |
| Security  | `/security`  | P0                                                      |
| Status    | `/status`    | P2 (usually externally hosted, e.g. status.thosjod.com) |

## K. Trust & Legal

| Page                         | URL                | Priority                                                                                                        |
| ---------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| Privacy Policy               | `/privacy`         | P0                                                                                                              |
| Terms & Conditions           | `/terms`           | P0                                                                                                              |
| Cookie Policy                | `/cookie-policy`   | P1                                                                                                              |
| Acceptable Use Policy        | `/acceptable-use`  | P1                                                                                                              |
| Data Processing Agreement    | `/data-processing` | P1 (enterprise-gating candidate - link from `/enterprise`)                                                      |
| Sub-processors               | `/subprocessors`   | P1                                                                                                              |
| Refund & Cancellation Policy | `/refund-policy`   | P0                                                                                                              |
| Service Level Agreement      | `/sla`             | P2 (Scale/Enterprise only)                                                                                      |
| Responsible AI               | `/responsible-ai`  | P1 - directly supported by Pillar 4's "no hallucination" and Pillar 2's "consent-aware identification" features |

## L. Authentication (app shell, not marketing pages)

`/login` · `/signup` · `/forgot-password` · `/reset-password` · `/verify-email` · `/invite` · `/accept-invite` · `/sso` - all P0, detailed in `28-application-ux-copy.md`.

## M. SaaS Application (product IA, not marketing)

Full `/app/*` route list detailed in `27-saas-application-ia.md`.

---

## Page Count Summary

| Section                   | Pages  | P0     | P1     | P2     | P3                |
| ------------------------- | ------ | ------ | ------ | ------ | ----------------- |
| Core                      | 8      | 5      | 1      | 0      | 0                 |
| Features                  | 9      | 2      | 6      | 0      | 0                 |
| Solutions                 | 11     | 2      | 4      | 5      | 0                 |
| Industries                | 15     | 5      | 4      | 6      | 0                 |
| Comparisons               | 10     | 2      | 5      | 0      | 1 (blocked)       |
| Integrations              | 5      | 0      | 2      | 3      | 0                 |
| AI Visibility/GEO cluster | 9      | 3      | 4      | 2      | 0                 |
| Audit tools               | 3      | 2      | 0      | 1      | 0                 |
| Resources                 | 11     | 0      | 4      | 4      | 3                 |
| Company                   | 8      | 2      | 0      | 4      | 2                 |
| Legal                     | 9      | 4      | 4      | 1      | 0                 |
| **Total marketing pages** | **98** | **27** | **34** | **26** | **6** (1 blocked) |

Plus 8 auth pages and ~35 app pages (product IA, not marketing surface area) - detailed separately.

**This is roughly a third of the brief's maximum theoretical page count** (which would have been 150+ pages including 36 individual competitor pages and 20 separate use-case pages) - the reduction is deliberate, per the cannibalization and thin-content decisions above, not a shortcut.
