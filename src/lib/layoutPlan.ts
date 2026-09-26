// Decides how a content page's sections are laid out: short paragraph-only
// sections that follow each other are merged into one narrative row.
import type { Page, Section } from "./content";
import { isKnownUrl, nameForUrl, pages } from "./content";
import type { NarrativeItem } from "../components/page/Narrative.astro";
import { sentence } from "./text";

export type PlanItem =
  | { kind: "section"; section: Section }
  | {
      kind: "narrative";
      eyebrow: string;
      title: string;
      flow: boolean;
      items: NarrativeItem[];
    };

const isShort = (s: Section) =>
  s.id !== "faq" &&
  s.blocks.length > 0 &&
  s.blocks.some((b) => b.type === "p") &&
  s.blocks.every((b) => b.type === "p" || b.type === "quote") &&
  s.blocks.reduce((n, b) => n + ("text" in b ? b.text.length : 0), 0) < 700;

const HIGHLIGHT =
  /(Thosjod Solution|The Solution|Why Thosjod Fits|What Is Thosjod)/i;

function heading(
  page: Page,
  count: number,
  group = 0,
): { eyebrow: string; title: string; flow: boolean } {
  // A second story row on the same page needs its own heading
  if (group > 0) {
    return page.category === "compare"
      ? { eyebrow: "The difference", title: "Where each approach goes further.", flow: false }
      : { eyebrow: "More detail", title: "What else to know.", flow: false };
  }
  switch (page.category) {
    case "features":
      return {
        eyebrow: "Problem → solution",
        title: "Why this pillar matters.",
        flow: true,
      };
    case "solutions":
      return {
        eyebrow: "The workflow today",
        title: "Where it breaks - and how Thosjod fixes it.",
        flow: true,
      };
    case "industries":
      return {
        eyebrow: page.eyebrow || `Thosjod for ${page.name}`,
        title: "From today’s reality to the fix.",
        flow: true,
      };
    case "compare":
      return count >= 4
        ? {
            eyebrow: "At a glance",
            title: "Two products, side by side.",
            flow: false,
          }
        : {
            eyebrow: "At a glance",
            title: "Thosjod and the category, side by side.",
            flow: false,
          };
    default:
      return { eyebrow: "Overview", title: "In short.", flow: false };
  }
}

const GROUPED: Page["category"][] = [
  "features",
  "solutions",
  "industries",
  "compare",
];

export function plan(page: Page, sections: Section[]): PlanItem[] {
  const out: PlanItem[] = [];
  let run: Section[] = [];

  const flush = () => {
    if (run.length >= 2 && GROUPED.includes(page.category)) {
      const h = heading(page, run.length, out.filter((o) => o.kind === "narrative").length);
      out.push({
        kind: "narrative",
        ...h,
        items: run.map((s) => ({
          id: s.id,
          label: s.title ? s.eyebrow : "",
          title: s.title || sentence(s.eyebrow),
          paras: s.blocks
            .filter((b) => b.type === "p")
            .map((b) => (b as { text: string }).text),
          notes: s.blocks
            .filter((b) => b.type === "quote")
            .map((b) => (b as { text: string }).text),
          highlight: HIGHLIGHT.test(s.eyebrow),
          drawsOn: s.drawsOn,
        })),
      });
    } else run.forEach((s) => out.push({ kind: "section", section: s }));
    run = [];
  };

  for (const s of sections) {
    if (isShort(s)) run.push(s);
    else {
      flush();
      out.push({ kind: "section", section: s });
    }
  }
  flush();
  return out;
}

/** "Keep exploring" links from the file's INTERNAL LINKS table. */
export function relatedLinks(
  page: Page,
  exclude: string[] = [],
): { title: string; href: string }[] {
  const skip = new Set(["/demo", "/", page.url, ...exclude]);
  let urls = page.related.filter((u) => isKnownUrl(u) && !skip.has(u));
  // Fallback: sibling pages in the same section of the site
  if (urls.length < 2) {
    const siblings = pages
      .filter(
        (p) =>
          p.category === page.category &&
          !skip.has(p.url) &&
          p.url.split("/").length > 2,
      )
      .map((p) => p.url);
    urls = [...new Set([...urls, ...siblings])];
  }
  return urls.slice(0, 6).map((u) => ({ title: nameForUrl(u) ?? u, href: u }));
}
