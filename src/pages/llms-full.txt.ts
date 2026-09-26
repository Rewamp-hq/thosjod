// /llms-full.txt - the full plain text of every indexable page, for AI assistants and answer engines.
import type { APIRoute } from 'astro';
import { seoRoutes, abs } from '../lib/seo';
import { pageText, keyFacts } from '../lib/llms';
import { heroSlides, problem, howItWorks, faq } from '../data/home';
import { site } from '../data/site';

// The homepage is hand-built, so render its canonical copy from src/data/home.ts
function homeText(): string {
  const h = heroSlides[0];
  return [
    `# ${h.title.join(' ')}`,
    h.sub,
    `## ${problem.title}`,
    problem.items.map((i) => `- ${i.title}: ${i.body}`).join('\n'),
    `## ${howItWorks.title}`,
    howItWorks.steps.map((s, n) => `${n + 1}. ${s.title}: ${s.body}`).join('\n'),
    '## FAQ',
    faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n'),
  ].join('\n\n');
}

export const GET: APIRoute = () => {
  const parts = seoRoutes().map((r) => {
    const body = r.url === '/' ? homeText() : r.page ? pageText(r.page) : `# ${r.title}\n\n${r.description}`;
    return `URL: ${abs(r.url)}\nLast updated: ${r.lastmod}\n\n${body}`;
  });

  const text = [
    '# Thosjod - full site text',
    '',
    `> ${site.description}`,
    '',
    ...keyFacts().map((f) => `- ${f}`),
    '',
    ...parts.map((p) => `${'-'.repeat(72)}\n\n${p}\n`),
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
