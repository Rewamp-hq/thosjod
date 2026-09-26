// Hero photography per URL (Unsplash placeholders - replace before launch).
// Pages not listed here with a light category render a light, photo-less hero.
import type { Category } from '../lib/content';
import { industriesSection } from './home';

export const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const byUrl: Record<string, string> = {
  // features
  '/features/discovery-engagement': '1600880292203-757bb62b4baf',
  '/features/identification-enrichment': '1504384308090-c894fdcc538d',
  '/features/qualification-routing': '1522071820081-009f0129c71c',
  '/features/conversational-ai-agents': '1531482615713-2afd69097998',
  '/features/automation-outbound': '1557804506-669a67965ba0',
  '/features/integration-administration': '1558494949-ef010cbdcc31',
  '/features/analytics-intelligence': '1551288049-bebda4e38f71',
  '/features/ai-visibility-geo-aeo': '1677442136019-21780ecad995',
  // solutions
  '/solutions/website-conversion': '1460925895917-afdab827c52f',
  '/solutions/lead-generation': '1521737604893-d14cc237f11d',
  '/solutions/sales-automation': '1517245386807-bb43f82c33c4',
  '/solutions/visitor-intelligence': '1497366216548-37526070297c',
  '/solutions/ai-sales': '1542744173-8e7e53415bb0',
  '/solutions/ai-support': '1573164713988-8665fc963095',
  '/solutions/customer-engagement': '1600880292203-757bb62b4baf',
  '/solutions/website-personalization': '1519389950473-47ba0277781c',
  '/solutions/ai-visibility': '1531297484001-80022131f5a1',
  '/solutions/geo-aeo': '1677442136019-21780ecad995',
  // core pages
  '/platform': '1558494949-ef010cbdcc31',
  '/pricing': '1497215728101-856f4ea42174',
  '/enterprise': '1486406146926-c627a92ad1ab',
  '/features': '1551434678-e076c223a692',
  '/solutions': '1522071820081-009f0129c71c',
  '/industries': '1504384308090-c894fdcc538d',
  '/compare': '1553877522-43269d4ea984',
  '/why-thosjod': '1542744173-8e7e53415bb0',
  '/security': '1558494949-ef010cbdcc31',
};

const byCategory: Partial<Record<Category, string>> = {
  compare: '1553877522-43269d4ea984',
  integrations: '1460925895917-afdab827c52f',
  'ai-visibility': '1531297484001-80022131f5a1',
  'geo-aeo': '1677442136019-21780ecad995',
  tools: '1531297484001-80022131f5a1',
};

const DARK: Category[] = ['features', 'solutions', 'industries', 'compare', 'pages', 'integrations', 'ai-visibility', 'geo-aeo', 'tools'];

export function heroImage(url: string, category: Category): string | null {
  const ind = industriesSection.items.find((i) => i.href === url);
  if (ind) return ind.image.replace('w=900', 'w=2000');
  if (byUrl[url]) return img(byUrl[url]);
  if (!DARK.includes(category)) return null;
  return img(byCategory[category] ?? '1542744173-8e7e53415bb0');
}

/** Small card image for listing grids. */
export function cardImage(url: string): string | null {
  const ind = industriesSection.items.find((i) => i.href === url);
  if (ind) return ind.image;
  return byUrl[url] ? img(byUrl[url], 900) : null;
}
