# Thosjod website (Astro)

Marketing site for Thosjod, built with Astro 5. The visual design follows primefold.ai. The copy comes from `thosjod_content/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

Astro 5 is pinned because Astro 6 requires Node 22+ and this machine runs Node 20.

## Structure

```
public/                 thosjod.png (original logo), thosjod-white.png (for dark backgrounds), favicon.png
src/
  styles/global.css     design tokens (colours, type, radii), buttons, badges, reveal animation
  layouts/Base.astro    <head>, fonts, SEO/OG meta, Organization/WebSite JSON-LD
  data/site.ts          nav, mega menus, footer (source: 00-strategy/00-nav-footer.md)
  data/home.ts          all homepage copy + image URLs (source: content/pages/home.md)
  components/           one component per section (Header, Hero, HowItWorks, EngineCards,
                        Showcase, Industries, Trust, Outcomes, Faq, FinalCta, Footer, ...)
  pages/index.astro     homepage
```

## Design system (taken from primefold.ai)

| Token      | Value                                                            |
| ---------- | ---------------------------------------------------------------- |
| Headings   | Stack Sans Headline 400: 64/72 (H1), 48/56 (H2), 0.02em tracking |
| Body       | Inter 400/500                                                    |
| Page sheet | `#faf9f8`, sections `#fff`, ink `#1a1814`                        |
| Accents    | teal `#208374`, orange `#ca7b57`, violet `#594aff`               |
| Container  | 1280px + 20px gutter; sections have 120px top spacing            |
| Radii      | 8 (tabs), 12 (small cards), 16 (cards/header), 24 (carousel/CTA) |

## Content decisions

- **Photos** come from Unsplash as placeholders. They are listed in `src/data/home.ts`. Replace them with owned imagery before launch. The content brief says "no stock photography".
- **Testimonial carousel**: there are no real testimonials yet, so it shows pillar statements. The section keeps the Primefold layout.
- **Outcomes section**: it names the metrics Thosjod measures and shows no invented numbers, as `home.md` requires.
- **Logo strip**: it shows "Works with" integrations and AI engines. There are no customer logos yet.
- **Announcement bar**: left out until there is a real announcement.

## Before launch

- Connect the footer newsletter form (`src/components/Footer.astro`, `action="/newsletter"`) to a provider.
- Work through `thosjod_content/00-strategy/35-founder-input-required.md`.

## How the pages are generated

- `src/lib/content.ts` parses every file in `thosjod_content/content/**` at build time, and `src/pages/[...slug].astro` renders one page per file. To change the copy, edit the markdown and rebuild.
- Content gaps (`[CONTENT GAP]`, `[LEGAL INPUT REQUIRED]`, `[VERIFY BEFORE PUBLISHING]`, `{placeholders}`) show as amber **Needs input** tags in `npm run dev`. They are **removed** from `npm run build`.
- A content file with `Status: Draft` in its header renders only in `npm run dev` and is excluded from production. To publish a draft, delete its `Status: Draft` line and link it from the relevant hub page.
- Some pages are built by hand: `/demo`, `/security`, `/why-thosjod`, `/blog`, `/resources`, the auth pages (`/login`, `/signup`, `/forgot-password`, `/sso`) and `404`.
- `src/lib/layoutPlan.ts` merges short, paragraph-only sections into one narrative row. This produces the ProblemSolution, RealityProblemFit, ProblemWorkflowFriction and side-by-side comparison blocks from `36-frontend-implementation-map.md`. Each page ends with a "Keep exploring" row built from its `INTERNAL LINKS` table. When that table is missing, the row shows sibling pages instead.
- `src/lib/featureLinks.ts` links "Key features" chips and "Pillar N" mentions to the right feature page.
- Forms post to `PUBLIC_FORM_ENDPOINT` (set it in `.env`). Until it is set, they show a "not connected yet" message and send nothing.

## Status

- ✅ 99 pages: all marketing content, legal drafts (noindex), auth UI, resource stubs
- ✅ Sitemap and robots.txt; JSON-LD for Organization, BreadcrumbList and FAQPage
- ✅ Product app preview: all 38 `/app/*` routes from `content/app/application-ia-ux-copy.md` (54 pages including the sample detail pages). See "Product app" below.
- ⏳ Still to do: form endpoint, real audit-tool backends, connecting the app to a real backend, and replacing the Unsplash photos

## Product app (`/app/*`)

- **Shell:** `src/layouts/AppShell.astro` provides the sidebar (the 10 nav items from the spec), top bar, page search, toasts, confirm dialogs and table filters. Styles are in `src/styles/app.css`, components in `src/components/app/`, and one page per route in `src/pages/app/`.
- **Copy:** every title, action, column, filter, empty/loading state, tooltip and confirmation message comes from the spec.
- **Data:** there is no backend yet. Screens use **fictional sample data** from `src/data/app/sample.ts`, under a "Product preview - sample data" banner. The banner's toggle switches every screen to its real empty state; the choice is saved in the browser. The sample workspace is on the **Growth** plan, so its limits follow `pricing.md`: AI visibility on Gemini and ChatGPT only, SSO and API gated, 20,000 credits.
- **Search engines:** all `/app/*` pages are noindex/nofollow and excluded from the sitemap. `/app` redirects to `/app/dashboard`.
- **Connecting a real backend:** replace the imports from `src/data/app/sample.ts` with API calls, and swap the toast-only actions (Route Lead, Sync to CRM, Invite…) for real requests. Keep the confirmation messages.

## SEO, AEO and GEO

These outputs are generated at build time from the page registry in `src/lib/seo.ts`. A new content file appears in all of them automatically.

| Output | What's in it |
|---|---|
| `<head>` on every page (`src/layouts/Base.astro`) | Title, description, keywords (from each content file's SEO block), canonical, robots (`noindex` where the content says so), Open Graph and Twitter cards with a 1200×630 image, Search Console and Bing verification tags from `.env`. |
| JSON-LD (`src/lib/schema.ts`) | One linked `@graph` per page. Organization, WebSite and WebPage (or AboutPage, ContactPage, CollectionPage) appear everywhere. BreadcrumbList appears on interior pages and FAQPage on every page with an FAQ. SoftwareApplication, with offers from `pricing.md`, is on `/`, `/pricing`, `/platform` and `/features`. ItemList is on hub pages, and WebApplication (free) is on the 3 audit tools. WebPage nodes include a `speakable` spec. |
| `/sitemap.xml` | Every indexable page with lastmod (from the source file's date), changefreq, priority and hero image. It excludes noindex, draft, "coming soon", auth and `/app` pages. |
| `/robots.txt` | Allows all crawlers and explicitly welcomes AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and others), per `31-geo-aeo-strategy.md`. Blocks `/app/`, auth pages and `/thank-you`, and points to the sitemap. |
| `/llms.txt` | A curated index in the llmstxt.org format: key facts (drawn only from the content) plus every public page, grouped by section. |
| `/llms-full.txt` | The full plain text of every public page, with internal notes stripped. |

To audit SEO after changes, run `npm run build`, then check titles (60 characters or fewer), descriptions (170 or fewer), duplicates and JSON-LD validity. Google's Rich Results Test and the Schema.org validator work on any deployed URL.

## Analytics (`src/components/Analytics.astro`)

Set the IDs in `.env` (see `.env.example`). With no IDs set, **no trackers load and no cookie banner appears**. With IDs set, a consent banner appears and each tool loads only after the visitor clicks "Accept analytics", as the cookie policy describes. A "Cookie settings" link in the footer reopens the banner.

GA4 events tracked:
- `cta_book_demo`: any click to `/demo`.
- `generate_lead`: sent from `/thank-you`, with the form name (`demo`, `contact`, `tools-*`, `newsletter`).
- `ai_referral`: visits arriving from ChatGPT, Perplexity, Gemini, Copilot, Claude and similar. This measures the site's own GEO.
