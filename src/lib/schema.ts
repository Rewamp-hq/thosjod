// JSON-LD builders. Every page emits ONE @graph with linked nodes (#organization, #website,
// #software, <url>#webpage, <url>#breadcrumb) so search and answer engines see one consistent entity.
import type { Block } from './content';
import { pageByUrl } from './content';
import { site } from '../data/site';
import { SITE, abs } from './seo';

export type Node = Record<string, unknown>;

export const ids = {
  org: `${SITE}/#organization`,
  website: `${SITE}/#website`,
  software: `${SITE}/#software`,
  page: (url: string) => `${abs(url)}#webpage`,
  crumbs: (url: string) => `${abs(url)}#breadcrumb`,
};

export const organization = (): Node => ({
  '@type': 'Organization',
  '@id': ids.org,
  name: site.name.charAt(0) + site.name.slice(1).toLowerCase(),
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: abs('/thosjod.png'), width: 1098, height: 268 },
  description: site.description,
  slogan: site.tagline,
  ...(import.meta.env.PUBLIC_SOCIAL_LINKS ? { sameAs: String(import.meta.env.PUBLIC_SOCIAL_LINKS).split(',').map((s) => s.trim()) } : {}),
});

export const website = (): Node => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${SITE}/`,
  name: 'Thosjod',
  description: site.description,
  publisher: { '@id': ids.org },
  inLanguage: 'en',
});

/** Offers built from the tiers in content/pages/pricing.md (monthly platform fee, INR, "from" prices). */
function offers(): Node[] {
  const tiers = pageByUrl.get('/pricing')?.sections.flatMap((s) => s.blocks).find((b) => b.type === 'tiers') as Extract<Block, { type: 'tiers' }> | undefined;
  if (!tiers) return [];
  return tiers.items.flatMap((t) => {
    const monthly = t.parts.find((p) => /\/mo/.test(p));
    const amount = monthly ? Number(monthly.replace(/[^\d]/g, '')) : NaN;
    if (!Number.isFinite(amount) || amount <= 0) return [];
    const setup = t.parts.find((p) => /^setup/i.test(p));
    return [{
      '@type': 'Offer',
      name: `${t.name} plan`,
      url: abs('/pricing'),
      priceCurrency: 'INR',
      price: amount,
      priceSpecification: { '@type': 'UnitPriceSpecification', price: amount, priceCurrency: 'INR', unitText: 'MONTH', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
      description: `Starting price per month${setup ? `; ${setup.replace(/^setup/i, 'one-time setup')}` : ''}. Usage credits included.`,
      seller: { '@id': ids.org },
    }];
  });
}

export const software = (): Node => ({
  '@type': 'SoftwareApplication',
  '@id': ids.software,
  name: 'Thosjod',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'AI Website Discovery & Lead Engine',
  operatingSystem: 'Web',
  url: `${SITE}/`,
  description: site.description,
  publisher: { '@id': ids.org },
  featureList: [
    'Discovery & Engagement', 'Identification & Enrichment', 'Qualification & Routing', 'Conversational AI Agents',
    'Automation & Outbound', 'Integration & Administration', 'Analytics & Intelligence', 'AI Visibility & GEO/AEO',
  ],
  offers: offers(),
});

export const webPage = (opts: { url: string; title: string; description: string; type?: string; image?: string | null; crumbs?: boolean; about?: boolean }): Node => ({
  '@type': opts.type ?? 'WebPage',
  '@id': ids.page(opts.url),
  url: abs(opts.url),
  name: opts.title,
  description: opts.description,
  isPartOf: { '@id': ids.website },
  inLanguage: 'en',
  ...(opts.about ? { about: { '@id': ids.software } } : {}),
  ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: opts.image } } : {}),
  ...(opts.crumbs ? { breadcrumb: { '@id': ids.crumbs(opts.url) } } : {}),
  // AEO: the headline and summary are the parts an assistant should read aloud / quote
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.ph-sub', '.hero-sub'] },
});

export const breadcrumbs = (url: string, crumbs: { label: string; href: string }[]): Node => ({
  '@type': 'BreadcrumbList',
  '@id': ids.crumbs(url),
  itemListElement: [{ label: 'Home', href: '/' }, ...crumbs].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: abs(c.href) })),
});

export const faqPage = (url: string, items: { q: string; a: string }[]): Node => ({
  '@type': 'FAQPage',
  '@id': `${abs(url)}#faq`,
  isPartOf: { '@id': ids.page(url) },
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const itemList = (url: string, name: string, links: { name: string; url: string }[]): Node => ({
  '@type': 'ItemList',
  '@id': `${abs(url)}#itemlist`,
  name,
  numberOfItems: links.length,
  itemListElement: links.map((l, i) => ({ '@type': 'ListItem', position: i + 1, name: l.name, url: abs(l.url) })),
});

export const freeTool = (url: string, name: string, description: string): Node => ({
  '@type': 'WebApplication',
  '@id': `${abs(url)}#tool`,
  name,
  url: abs(url),
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'INR' },
  provider: { '@id': ids.org },
});
