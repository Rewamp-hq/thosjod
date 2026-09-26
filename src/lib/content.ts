// Parses thosjod_content/content/**/*.md into structured pages.
// The markdown follows a house format: metadata lines, `## SEO`, `## HERO`,
// `## SECTION n - Title` blocks with `H2:` / `Body:` / bullets / tables / `Q:`+`A:`.

const raw = import.meta.glob("../../thosjod_content/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** In dev, content gaps render as visible "Needs input" tags. In production they are removed. */
export const SHOW_GAPS = import.meta.env.DEV;

// ---------------------------------------------------------------- types
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  | { type: "kv"; items: { k: string; v: string }[] }
  | { type: "tiers"; items: { name: string; parts: string[] }[] }
  | { type: "journey"; steps: string[] };

export type Faq = { q: string; a: string };

export type Section = {
  id: string;
  eyebrow: string;
  title: string;
  blocks: Block[];
  /** "Draws on: Pillar A + Pillar B" (solution pages) */
  drawsOn?: string[];
};

export type Category =
  | "features"
  | "solutions"
  | "industries"
  | "compare"
  | "pages"
  | "integrations"
  | "ai-visibility"
  | "geo-aeo"
  | "tools"
  | "resources"
  | "company"
  | "legal";

export type Page = {
  file: string;
  category: Category;
  url: string;
  name: string;
  eyebrow: string;
  title: string;
  sub: string;
  primaryCta: string;
  secondaryCta: string;
  seoTitle: string;
  description: string;
  noindex: boolean;
  nofollow: boolean;
  /** Primary + secondary keywords from the SEO block */
  keywords: string[];
  notices: string[];
  footnotes: string[];
  sections: Section[];
  faq: Faq[];
  /** URLs from the file's INTERNAL LINKS block */
  related: string[];
  /** `Status: Draft` in the file header - rendered in dev for review, never in production builds */
  draft: boolean;
};

// ---------------------------------------------------------------- gaps
const GAP_RE =
  /\[(?:CONTENT GAP|LEGAL INPUT|PRICING INPUT|VERIFY BEFORE PUBLISHING|CASE STUDIES REQUIRED|TESTIMONIALS REQUIRED)[^\]]*\]|`?\{[^}]+\}`?|`\[[^\]`]+\]`/;

export const hasGap = (s: string) =>
  GAP_RE.test(s) || /same gap as above/i.test(s);
const keep = (s: string) => SHOW_GAPS || !hasGap(s);

// Internal-only notes that never render
const INTERNAL_QUOTE =
  /^(Dev note|Source note|Journey framing note|No static articles|Needs real)/i;
const SKIP_SECTIONS = /^(SEO|CONTENT NOTES|SEO Note|Empty-State Copy)\b/i;
const DROP_KV = new Set(["CTA", "Email Follow-up", "Priority"]);

// ---------------------------------------------------------------- helpers
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const unTick = (s: string) => s.replace(/^`|`$/g, "").trim();

const cleanHeading = (h: string) =>
  h
    .replace(/^SECTION\s+\d+\s*[-–-]\s*/i, "")
    .replace(/\s*\((?:structure only|fill)[^)]*\)/i, "")
    .trim();

const splitRow = (line: string) =>
  line
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

function categoryOf(file: string): Category {
  const m = file.match(/\/content\/([^/]+)\/[^/]+\.md$/);
  const dir = m?.[1] ?? "pages";
  if (dir === "comparisons") return "compare";
  return dir as Category;
}

// ---------------------------------------------------------------- parser
function parse(file: string, src: string): Page | null {
  const lines = src
    .replace(/\r/g, "")
    .replace(/as of \{date\}/g, "as of publication")
    .split("\n");
  const meta: Record<string, string> = {};
  const hero: Record<string, string> = {};
  const seo: Record<string, string> = {};
  const notices: string[] = [];
  const footnotes: string[] = [];
  const sections: Section[] = [];
  const faq: Faq[] = [];
  const related: string[] = [];

  const pageName = (lines[0] ?? "")
    .replace(/^#\s*(PAGE:\s*)?/, "")
    .replace(/\s*\((Pillar|Solution|Industry|Output)[^)]*\)/, "")
    .trim();

  let mode: "meta" | "seo" | "hero" | "section" | "skip" | "links" = "meta";
  let cur: Section | null = null;
  let pendingQ: string | null = null;
  let table: { head: string[]; rows: string[][] } | null = null;

  const push = (b: Block) => {
    if (!cur) return;
    const last = cur.blocks[cur.blocks.length - 1];
    if (b.type === "ul" && last?.type === "ul")
      return void last.items.push(...b.items);
    if (b.type === "ol" && last?.type === "ol")
      return void last.items.push(...b.items);
    if (b.type === "kv" && last?.type === "kv")
      return void last.items.push(...b.items);
    if (b.type === "tiers" && last?.type === "tiers")
      return void last.items.push(...b.items);
    cur.blocks.push(b);
  };

  const flushTable = () => {
    if (table && cur) {
      const rows = table.rows.filter((r) => r.every(keep));
      if (rows.length) push({ type: "table", head: table.head, rows });
    }
    table = null;
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();

    // INTERNAL LINKS block → related URLs (skips templated / wildcard paths)
    if (mode === "links" && !t.startsWith("## ")) {
      for (const m of t.matchAll(/`(\/[^`\s]*)`/g)) {
        const u = m[1].replace(/(.)\/$/, "$1");
        if (!/[{*[]/.test(u) && !related.includes(u)) related.push(u);
      }
      continue;
    }

    // table rows
    if (t.startsWith("|")) {
      if (mode !== "section") continue;
      const cells = splitRow(t);
      if (!table) table = { head: cells, rows: [] };
      else if (!/^:?-{2,}/.test(cells[0])) table.rows.push(cells);
      continue;
    } else if (table) flushTable();

    if (t.startsWith("## ")) {
      pendingQ = null;
      const h = t.slice(3).trim();
      if (/^SEO$/i.test(h)) {
        mode = "seo";
        continue;
      }
      if (/^HERO$/i.test(h)) {
        mode = "hero";
        continue;
      }
      if (/^INTERNAL LINKS$/i.test(h)) {
        mode = "links";
        cur = null;
        continue;
      }
      if (SKIP_SECTIONS.test(h)) {
        mode = "skip";
        cur = null;
        continue;
      }
      if (/^FAQ$/i.test(h)) {
        mode = "section";
        cur = { id: "faq", eyebrow: "FAQ", title: "", blocks: [] };
        sections.push(cur);
        continue;
      }
      mode = "section";
      const title = cleanHeading(h);
      cur = { id: slugify(title), eyebrow: title, title: "", blocks: [] };
      sections.push(cur);
      continue;
    }

    if (!t) continue;

    const kv = t.match(/^([A-Z][A-Za-z0-9 /&()-]{1,32}):\s+(.*)$/);

    if (mode === "meta") {
      if (t.startsWith(">")) {
        notices.push(t.replace(/^>\s*/, ""));
        continue;
      }
      // "URL: `/x` · Meta robots: noindex" style lines
      for (const part of t.split(" · ")) {
        const m = part.match(/^([A-Za-z ]+):\s*(.*)$/);
        if (m) meta[m[1].trim()] = m[2].trim();
      }
      continue;
    }
    if (mode === "seo") {
      if (kv) seo[kv[1]] = kv[2];
      continue;
    }
    if (mode === "hero") {
      if (kv) hero[kv[1]] = kv[2];
      continue;
    }
    if (mode !== "section" || !cur) continue;

    // FAQ pairs (can appear in any section)
    if (t.startsWith("Q:")) {
      pendingQ = t.slice(2).trim();
      continue;
    }
    if (t.startsWith("A:") && pendingQ) {
      const a = t.slice(2).trim();
      if (keep(a) && keep(pendingQ)) faq.push({ q: pendingQ, a });
      pendingQ = null;
      continue;
    }

    if (t.startsWith(">")) {
      const q = t.replace(/^>\s*/, "");
      if (INTERNAL_QUOTE.test(q) || /\.md`/.test(q)) continue;
      if (!keep(q)) continue;
      if (cur.id === "faq") footnotes.push(q);
      else push({ type: "quote", text: q });
      continue;
    }

    if (/^[-*]\s+/.test(t)) {
      const item = t.replace(/^[-*]\s+/, "");
      if (keep(item)) push({ type: "ul", items: [item] });
      continue;
    }
    if (/^\d+\.\s+/.test(t)) {
      const item = t.replace(/^\d+\.\s+/, "");
      if (keep(item)) push({ type: "ol", items: [item] });
      continue;
    }

    // Pricing tiers: **Starter** - a · b · c
    const tier = t.match(/^\*\*([^*]+)\*\*\s*[-–-]\s*(.+)$/);
    if (tier && tier[2].split(" · ").length >= 3) {
      push({
        type: "tiers",
        items: [
          { name: tier[1], parts: tier[2].split(" · ").map((s) => s.trim()) },
        ],
      });
      continue;
    }

    if (t.startsWith("H2:")) {
      const h2 = t.slice(3).trim();
      if (h2.includes("→")) {
        push({ type: "journey", steps: h2.split("→").map((s) => s.trim()) });
      } else cur.title = h2;
      continue;
    }
    if (/^Supporting bullets:?$/i.test(t)) continue;
    if (t.startsWith("Body:")) {
      const b = t.slice(5).trim();
      if (b && keep(b)) push({ type: "p", text: b });
      continue;
    }
    if (kv && !/^(Note|Q|A)$/.test(kv[1])) {
      if (DROP_KV.has(kv[1])) continue;
      if (kv[1] === "Draws on") {
        cur.drawsOn = kv[2].split("+").map((x) => x.trim());
        continue;
      }
      const v = kv[2];
      if (keep(v)) push({ type: "kv", items: [{ k: kv[1], v }] });
      continue;
    }
    if (keep(t)) push({ type: "p", text: t });
  }
  flushTable();

  const url = unTick((meta["URL"] ?? "").split(/\s/)[0] ?? "");
  if (!url || url === "/") return null;

  const title = hero["H1"] || meta["Name"] || pageName;
  return {
    file,
    category: categoryOf(file),
    url,
    name: meta["Name"] || pageName,
    eyebrow: hero["Eyebrow"] ?? "",
    title,
    sub: keep(hero["Subheadline"] ?? "") ? (hero["Subheadline"] ?? "") : "",
    primaryCta: hero["Primary CTA"] || meta["Primary CTA"] || "Book a Demo",
    secondaryCta: hero["Secondary CTA"] || meta["Secondary CTA"] || "",
    seoTitle: seo["SEO Title"] || `${meta["Name"] || pageName} - Thosjod`,
    description: seo["Meta Description"] || hero["Subheadline"] || "",
    noindex: /noindex/i.test(meta["Meta robots"] ?? ""),
    nofollow: /nofollow/i.test(meta["Meta robots"] ?? ""),
    keywords: [seo["Primary Keyword"], ...(seo["Secondary Keywords"] ?? "").split(",")].map((k) => (k ?? "").trim()).filter(Boolean),
    notices: notices.filter(keep),
    footnotes,
    sections: sections.filter((s) => s.blocks.length > 0),
    faq,
    related: related.filter((u) => u !== url),
    draft: /^draft$/i.test(meta['Status'] ?? ''),
  };
}

export const pages: Page[] = Object.entries(raw)
  .filter(
    ([f]) =>
      !/\/(app|auth|faqs|seo|use-cases)\//.test(f) &&
      !/\/\d+-[^/]+\.md$/.test(f),
  )
  .map(([f, s]) => parse(f, s))
  .filter((p): p is Page => p !== null)
  .filter((p) => SHOW_GAPS || !p.draft) // drafts only exist in dev
  .sort((a, b) => a.url.localeCompare(b.url));

export const pageByUrl = new Map(pages.map((p) => [p.url, p]));

/** Hand-built routes that exist outside the content folder (see src/pages). */
export const extraRoutes: Record<string, string> = {
  "/demo": "Book a Demo",
  "/security": "Security",
  "/why-thosjod": "Why Thosjod",
  "/login": "Log in",
  "/signup": "Sign up",
  "/forgot-password": "Reset password",
  "/sso": "SSO login",
  "/guides": "Guides",
  "/case-studies": "Case Studies",
  "/docs": "Documentation",
  "/help": "Help Center",
  "/webinars": "Webinars",
  "/templates": "Templates",
  "/thank-you": "Thank you",
  "/integrations/crm": "CRM Integrations",
  "/reset-password": "Set a new password",
  "/verify-email": "Verify your email",
  "/invite": "Workspace invite",
  "/accept-invite": "Join your team",
  "/glossary": "Glossary",
  "/changelog": "Changelog",
  "/reports": "Reports",
};

export const nameForUrl = (url: string): string | undefined =>
  pageByUrl.get(url)?.name ?? extraRoutes[url];

export const isKnownUrl = (url: string) =>
  pageByUrl.has(url) || url in extraRoutes || url === "/";
