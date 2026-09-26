// /llms.txt - curated site index for AI assistants (https://llmstxt.org format).
import type { APIRoute } from 'astro';
import { seoRoutes, abs } from '../lib/seo';
import { keyFacts } from '../lib/llms';
import { site } from '../data/site';

const ORDER = ['Product', 'Features', 'Solutions', 'Industries', 'Compare', 'AI Visibility', 'GEO/AEO', 'Integrations', 'Free tools', 'Resources', 'Company', 'Legal'];

export const GET: APIRoute = () => {
  const routes = seoRoutes();
  const groups = new Map<string, typeof routes>();
  for (const r of routes) groups.set(r.group, [...(groups.get(r.group) ?? []), r]);

  const section = (name: string) => {
    const list = (groups.get(name) ?? []).sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
    if (!list.length) return '';
    return [`## ${name === 'Legal' ? 'Optional' : name}`, '', ...list.map((r) => `- [${r.title.replace(/\s*[-|]\s*Thosjod.*$/, '') || r.title}](${abs(r.url)}): ${r.description}`), ''].join('\n');
  };

  const body = [
    '# Thosjod',
    '',
    `> ${site.description}`,
    '',
    'Key facts:',
    '',
    ...keyFacts().map((f) => `- ${f}`),
    '',
    `Full text of every page: ${abs('/llms-full.txt')}`,
    '',
    ...ORDER.map(section).filter(Boolean),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
