# OUTPUT 35 - Founder Input Required

A prioritized action list - what you (or your team) need to supply before the site can fully go live, derived from `34-content-gaps.md` but organized by who-does-it rather than where-it-lives.

## Before Launch (blocks going live honestly)

- [ ] Real company facts for `/about`: founding story, date, location, team names/bios/photos
- [ ] Real contact details: sales/support/press/billing/security emails, registered address
- [ ] Actual data-retention periods, cookie list, and sub-processor list for the legal pages - **do not let a lawyer write generic boilerplate that doesn't match what the product actually does**
- [x] Legal pages drafted in full (2026-09-26, founder-approved): Privacy, Terms, Cookie Policy, Acceptable Use, DPA, Sub-processors, Refund Policy and SLA now contain complete draft text; Responsible AI is published
- [ ] Lawyer review of the 8 drafted legal pages, then fill every `[LEGAL INPUT REQUIRED]` / `[PRICING INPUT REQUIRED]` blank (visible as amber "Needs input" tags in `npm run dev`) and remove their noindex
- [ ] Confirm pricing specifics: credit rollover policy, free trial (yes/no + terms), annual discount
- [ ] Decide and confirm: does Thosjod hold any actual security certifications? If none yet, the Security/Enterprise pages should say so honestly rather than omit the question

## Before the AI-Visibility Whitespace Claim Goes Live

- [x] ~~Re-verify that none of the 40 competitors track AI visibility.~~ Superseded on 2026-09-26: the absolute claim was withdrawn because dedicated AI-visibility tools exist. The site now uses the scoped claim ("Unlike website chatbots, visitor-ID tools and AI SDR platforms, Thosjod tracks AI visibility natively - in the same engine that converts your visitors").
- [ ] Occasionally re-check that the chatbot / visitor-ID / SDR competitors still don't advertise AI-visibility tracking, since the scoped claim relies on it
- [x] Approve `/compare/ai-visibility-tools`: approved and published on 2026-09-26. Re-check the vendors' sites periodically.

## Launch setup (accounts only you can create)

- [ ] Google Search Console: verify (set `PUBLIC_GSC_VERIFICATION`), submit `/sitemap.xml`
- [ ] Bing Webmaster Tools: verify (set `PUBLIC_BING_VERIFICATION`) or import from Search Console, submit `/sitemap.xml`
- [ ] Google Analytics 4 property: set `PUBLIC_GA4_ID`; mark `generate_lead` as a key event
- [ ] Microsoft Clarity project (optional): set `PUBLIC_CLARITY_ID`
- [ ] LinkedIn Insight Tag (optional, for B2B ads): set `PUBLIC_LINKEDIN_PARTNER_ID`
- [ ] Official social profile URLs for JSON-LD: set `PUBLIC_SOCIAL_LINKS`
- [ ] Form backend: set `PUBLIC_FORM_ENDPOINT`

## Ongoing / As Available (doesn't block launch)

- [ ] Real customer logos, testimonials, and case studies - until then, `/customers` and `/case-studies` stay in their honest empty-state
- [ ] Careers: actual open roles via ATS feed
- [ ] Press kit assets
- [ ] Partner program structure, if one will exist

## Decisions Only You Can Make (not content gaps, judgment calls)

- [ ] Final sign-off on the 5 individual competitor comparison pages and 4 cluster pages - these name real companies; confirm you're comfortable with each before publishing
- [ ] Whether to publish `/compare/ai-visibility-tools` later once real competitor research exists for that category, or drop it from the sitemap permanently
- [ ] Whether "GEO/AEO" terminology leads or follows "AI visibility" in headlines, pending real keyword-volume research (currently defaulted to "AI visibility" leading, per `30-seo-metadata-database.md`)
