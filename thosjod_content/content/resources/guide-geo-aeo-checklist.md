# PAGE: The GEO/AEO checklist

Name: The GEO/AEO checklist
URL: `/guides/geo-aeo-checklist`
Page Type: Resources - guide
Funnel Stage: Awareness
Primary CTA: Run the Free GEO/AEO Audit
Secondary CTA: Book a Demo

## SEO
SEO Title: The GEO/AEO Checklist: Make Your Site Citable by AI | Thosjod
Meta Description: A practical GEO/AEO checklist: structured data, FAQ markup, answer-first content, consistent entity definitions, crawler access and llms.txt.
Primary Keyword: GEO AEO checklist
Secondary Keywords: generative engine optimization checklist, answer engine optimization, make website citable by AI

## HERO
Eyebrow: Guide
H1: The GEO/AEO checklist
Subheadline: Everything that makes a website easy for AI engines to find, understand and cite, in one list.

## SECTION 1 - Access
H2: Let AI engines in.
- **robots.txt allows AI crawlers** - Allow the crawlers of the engines you want to be cited by, such as GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended.
- **An up-to-date XML sitemap** - List every page you want indexed, and keep last-modified dates accurate.
- **An llms.txt file** - A short plain-text summary of your site and its key pages, at /llms.txt, for AI assistants.
- **Content in the HTML** - Make sure important text is in the page's HTML, not only loaded later by scripts or locked in images.

## SECTION 2 - Understanding
H2: Make it unambiguous.
- **One consistent definition** - Describe what your company and product are in the same words on every page, so engines connect them to one entity.
- **Organization and product structured data** - Add JSON-LD describing your organization, website and product, including pricing where you publish it.
- **Breadcrumbs** - Mark up page hierarchy with BreadcrumbList structured data.
- **Clear headings** - Use one H1 per page and a logical H2/H3 structure that mirrors the questions people ask.

## SECTION 3 - Citability
H2: Give engines something to quote.
- **Answer first** - Open each section with a direct, one- or two-sentence answer, then add detail.
- **FAQ sections with FAQPage markup** - Answer the real questions buyers ask, and mark them up so engines can read them as questions and answers.
- **Content depth** - Cover a topic fully on one canonical page instead of thinly across many.
- **Factual comparison pages** - Neutral "X vs Y" pages with sources are exactly what engines look for when users ask for comparisons.
- **No conflicting versions** - Avoid several pages that answer the same question differently; pick one canonical page per question.

## SECTION 4 - Proof
H2: Be cited elsewhere too.
- **Third-party mentions** - Engines often cite review sites, directories, publications and community discussions. Be present where your category is discussed.
- **Up-to-date facts** - Keep pricing, features and company facts current everywhere they appear, so engines don't repeat stale information.

## SECTION 5 - Measure
H2: Check it works.
Body: Run a GEO/AEO audit to score your site against a checklist like this one, then track a set of buyer prompts across AI engines to see whether the fixes change what engines say. Thosjod's audit is rule-based and explainable: every lost point links to the page and issue causing it. (`/tools/geo-aeo-audit`)

## FAQ
Q: Is GEO different from SEO?
A: It builds on the same foundations, such as crawlable, well-structured content, but the goal is to be cited inside AI-generated answers rather than to rank as a link.

Q: What is llms.txt?
A: A plain-text file at the root of a website that summarises the site and links to its key pages, written for AI assistants rather than search crawlers.

Q: Which structured data matters most for AI engines?
A: Organization, WebSite and product markup to define who you are, FAQPage markup for question-and-answer content, and BreadcrumbList for site structure.

## INTERNAL LINKS
`/guides/track-brand-visibility-in-ai-answers`, `/geo-aeo`, `/tools/geo-aeo-audit`, `/glossary`

## CONTENT NOTES
Written 2026-09-27 from 31-geo-aeo-strategy.md (the practices this site itself applies) and the audit criteria in features/ai-visibility-geo-aeo.md. No statistics claimed.
