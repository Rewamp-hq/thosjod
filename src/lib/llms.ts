// Plain-text renderings of pages for llms.txt / llms-full.txt (GEO: give AI engines one clean,
// canonical source per question - see 31-geo-aeo-strategy.md).
import type { Block, Page } from './content';
import { pageByUrl } from './content';
import { plain } from './inline';

const clean = (s: string) =>
  plain(s)
    .replace(/\(source: 62-feature PDF\)/gi, '(product documentation)')
    .replace(/\s+/g, ' ')
    .trim();

function blockText(b: Block): string {
  switch (b.type) {
    case 'p': return clean(b.text);
    case 'quote': return `> ${clean(b.text)}`;
    case 'ul': return b.items.map((i) => `- ${clean(i)}`).join('\n');
    case 'ol': return b.items.map((i, n) => `${n + 1}. ${clean(i)}`).join('\n');
    case 'journey': return b.steps.join(' -> ');
    case 'kv': return b.items.filter((i) => !/^(Fields|User Input)$/.test(i.k)).map((i) => `${i.k}: ${clean(i.v)}`).join('\n');
    case 'tiers': return b.items.map((t) => `- ${t.name}: ${t.parts.map(clean).join('; ')}`).join('\n');
    case 'table': {
      const keep = b.head.map((h, i) => (/^(source|link)$/i.test(h) ? -1 : i)).filter((i) => i >= 0);
      const row = (cells: string[]) => `| ${keep.map((i) => clean(cells[i] ?? '')).join(' | ')} |`;
      return [row(b.head), `|${keep.map(() => '---').join('|')}|`, ...b.rows.map(row)].join('\n');
    }
  }
}

/** Full plain-text/markdown body of one content page. */
export function pageText(p: Page): string {
  const out: string[] = [];
  if (p.eyebrow) out.push(clean(p.eyebrow));
  out.push(`# ${clean(p.title)}`);
  if (p.sub) out.push(clean(p.sub));
  for (const s of p.sections) {
    if (s.id === 'faq') continue;
    out.push(`## ${clean(s.title || s.eyebrow)}`);
    for (const b of s.blocks) {
      const t = blockText(b);
      if (t) out.push(t);
    }
  }
  if (p.faq.length) {
    out.push('## FAQ');
    for (const f of p.faq) out.push(`Q: ${clean(f.q)}\nA: ${clean(f.a)}`);
  }
  for (const f of p.footnotes) out.push(`> ${clean(f)}`);
  return out.join('\n\n');
}

/** Canonical "entity facts" for the top of llms.txt, drawn only from existing content. */
export function keyFacts(): string[] {
  const facts = [
    'Thosjod is an AI Website Discovery & Lead Engine: it identifies, engages, and qualifies every website visitor in real time, then routes sales-ready leads into the CRM.',
    'It also tracks how a brand appears in AI answer engines (AI visibility / GEO / AEO), with one-click access to ChatGPT, Claude, Gemini, Grok, Perplexity and Google AI, live Gemini tracking with Google Search grounding, and a rule-based, explainable GEO/AEO audit.',
    'Capabilities: 62 features across 8 pillars - Discovery & Engagement, Identification & Enrichment, Qualification & Routing, Conversational AI Agents, Automation & Outbound, Integration & Administration, Analytics & Intelligence, AI Visibility & GEO/AEO.',
    'AI answers are grounded in the customer\'s approved knowledge base, with human handoff instead of a guess.',
    'Integrations: HubSpot, Salesforce (Scale and Enterprise), Google Calendar, Microsoft Outlook / Office 365, webhooks and API (Scale and Enterprise).',
    'Built for 14 industries, including SaaS, e-commerce, BFSI, healthcare, real estate, higher education, government, manufacturing and telecom.',
  ];
  const pricing = pageByUrl.get('/pricing');
  const tiers = pricing?.sections.flatMap((s) => s.blocks).find((b) => b.type === 'tiers') as Extract<Block, { type: 'tiers' }> | undefined;
  if (tiers) {
    const summary = tiers.items.map((t) => {
      const monthly = t.parts.find((p) => /\/mo/.test(p));
      return monthly ? `${t.name} ${monthly}` : `${t.name} custom`;
    }).join(', ');
    facts.push(`Pricing (usage-based: one-time setup + monthly platform fee + credits): ${summary}. Details: https://thosjod.com/pricing`);
  }
  return facts;
}
