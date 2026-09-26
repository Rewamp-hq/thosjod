// One registry of every public, indexable route. sitemap.xml, llms.txt and llms-full.txt are
// generated from it, so a new content file appears in all three automatically on the next build.
import fs from 'node:fs';
import path from 'node:path';
import { pages, type Page, type Category } from './content';
import { handRoutes } from '../data/handRoutes';
import { heroImage } from '../data/pageMedia';
import { plain } from './inline';

export const SITE = 'https://thosjod.com';
export const abs = (url: string) => new URL(url, SITE).toString();

export type SeoRoute = {
  url: string;
  title: string;
  description: string;
  lastmod: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  image: string | null;
  group: string;
  keywords: string[];
  page?: Page;
};

const buildDate = new Date().toISOString().slice(0, 10);
const mtime = (file: string) => {
  try { return fs.statSync(path.resolve(process.cwd(), file)).mtime.toISOString().slice(0, 10); }
  catch { return buildDate; }
};
const contentFile = (p: Page) => p.file.replace(/^(\.\.\/)+/, '');

const GROUP: Record<Category, string> = {
  pages: 'Product', features: 'Features', solutions: 'Solutions', industries: 'Industries', compare: 'Compare',
  integrations: 'Integrations', 'ai-visibility': 'AI Visibility', 'geo-aeo': 'GEO/AEO', tools: 'Free tools',
  resources: 'Resources', company: 'Company', legal: 'Legal',
};

const CORE = new Set(['/platform', '/pricing', '/features', '/enterprise', '/why-thosjod', '/demo']);
function priority(url: string, cat: Category | 'hand'): number {
  if (url === '/') return 1.0;
  if (CORE.has(url)) return 0.9;
  if (['features', 'solutions', 'industries', 'compare'].includes(cat) || ['/solutions', '/industries', '/compare'].includes(url)) return 0.8;
  if (['ai-visibility', 'geo-aeo', 'integrations', 'tools'].includes(cat) || url === '/security' || url === '/integrations/crm') return 0.7;
  if (cat === 'legal') return 0.3;
  return 0.5;
}
const changefreq = (url: string, cat: Category | 'hand'): SeoRoute['changefreq'] =>
  url === '/' || url === '/pricing' || cat === 'compare' ? 'weekly' : cat === 'legal' ? 'yearly' : 'monthly';

/** Every indexable route, sorted by priority then URL. */
export function seoRoutes(): SeoRoute[] {
  const out = new Map<string, SeoRoute>();

  for (const p of pages) {
    if (p.noindex || p.draft) continue;
    const empty = p.sections.length === 0 && p.faq.length === 0; // "coming soon" company pages stay out of the index
    if (empty) continue;
    out.set(p.url, {
      url: p.url,
      title: p.seoTitle,
      description: plain(p.description),
      lastmod: mtime(contentFile(p)),
      priority: priority(p.url, p.category),
      changefreq: changefreq(p.url, p.category),
      image: heroImage(p.url, p.category),
      group: GROUP[p.category],
      keywords: p.keywords,
      page: p,
    });
  }

  for (const r of Object.values(handRoutes)) {
    const existing = out.get(r.url);
    out.set(r.url, {
      url: r.url,
      title: r.title,
      description: r.description,
      lastmod: mtime(r.source),
      priority: priority(r.url, 'hand'),
      changefreq: changefreq(r.url, 'hand'),
      image: existing?.image ?? heroImage(r.url, 'pages'),
      group: r.url === '/blog' ? 'Resources' : r.url.startsWith('/integrations') ? 'Integrations' : 'Product',
      keywords: r.keywords ?? existing?.keywords ?? [],
      page: existing?.page,
    });
  }

  return [...out.values()].sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
}
