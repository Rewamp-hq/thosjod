// SEO metadata for pages that are built by hand (not generated from a content file).
// The page files import from here, and so do sitemap.xml / llms.txt, so they can never drift apart.
import { seo as homeSeo } from './home';

export type HandRoute = {
  url: string;
  title: string;
  description: string;
  /** Source file used for the sitemap's lastmod date */
  source: string;
  keywords?: string[];
};

export const handRoutes: Record<string, HandRoute> = {
  '/': {
    url: '/',
    title: homeSeo.title,
    description: homeSeo.description,
    source: 'thosjod_content/content/pages/home.md',
    keywords: ['AI website lead engine', 'identify anonymous website visitors', 'AI visitor identification', 'AI lead qualification', 'GEO AEO tracking'],
  },
  '/why-thosjod': {
    url: '/why-thosjod',
    title: 'Why Thosjod - One Engine, Not a Stitched-Together Stack',
    description: 'Why teams choose Thosjod: one AI engine that identifies, engages, and qualifies every visitor, with native AI-visibility (GEO/AEO) tracking built in.',
    source: 'thosjod_content/00-strategy/03-product-positioning.md',
    keywords: ['AI website lead engine', 'website chatbot alternative', 'AI visibility tracking'],
  },
  '/security': {
    url: '/security',
    title: 'Security & Governance - Thosjod',
    description: 'SSO, full configuration and audit trails, grounded AI responses, and dedicated hosting options - how Thosjod keeps visitor data and AI conversations under control.',
    source: 'thosjod_content/content/pages/enterprise.md',
    keywords: ['AI chatbot security', 'enterprise AI website agent', 'SSO audit trail'],
  },
  '/demo': {
    url: '/demo',
    title: 'Book a Demo - Thosjod',
    description: 'Book a 20-minute walkthrough and see Thosjod identify, qualify, and route a real visitor session live.',
    source: 'src/pages/demo.astro',
  },
  '/blog': {
    url: '/blog',
    title: 'Blog - Thosjod',
    description: 'Articles on website conversion, AI sales agents, visitor intelligence, and AI visibility (GEO/AEO).',
    source: 'thosjod_content/content/resources/blog-architecture.md',
  },
  '/integrations/crm': {
    url: '/integrations/crm',
    title: 'CRM Integrations - HubSpot & Salesforce | Thosjod',
    description: 'Thosjod syncs qualified leads, conversation transcripts, and enrichment data into HubSpot and Salesforce in real time - and reads CRM data back to inform routing.',
    source: 'thosjod_content/content/integrations/index.md',
    keywords: ['HubSpot AI chatbot integration', 'Salesforce lead routing', 'AI agent CRM integration'],
  },
};
