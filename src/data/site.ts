// Global navigation & footer - source: thosjod_content/00-strategy/00-nav-footer.md

export const site = {
  name: "Thosjod",
  tagline: "The AI Website Discovery & Lead Engine",
  description:
    "Thosjod identifies, engages, and qualifies every website visitor in real time, then tracks and improves how your brand appears in ChatGPT, Gemini, and other AI answer engines.",
  demoHref: "/demo",
  signInHref: "/login",
};

export type NavLink = {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  tone?: string;
};
export type NavItem = {
  label: string;
  href?: string;
  columns?: { title: string; links: NavLink[] }[];
};

export const features: NavLink[] = [
  {
    label: "Discovery & Engagement",
    href: "/features/discovery-engagement",
    desc: "Real-time, personalized visitor experience",
    badge: "DE",
    tone: "teal",
  },
  {
    label: "Identification & Enrichment",
    href: "/features/identification-enrichment",
    desc: "Deanonymize visitors who never fill a form",
    badge: "IE",
    tone: "orange",
  },
  {
    label: "Qualification & Routing",
    href: "/features/qualification-routing",
    desc: "ICP scoring, routing and meeting booking",
    badge: "QR",
    tone: "orange",
  },
  {
    label: "Conversational AI Agents",
    href: "/features/conversational-ai-agents",
    desc: "Sales, support and voice - grounded, multilingual",
    badge: "AI",
    tone: "teal",
  },
  {
    label: "Automation & Outbound",
    href: "/features/automation-outbound",
    desc: "AI playbooks, follow-up and social SDR",
    badge: "AO",
    tone: "ink",
  },
  {
    label: "Integration & Administration",
    href: "/features/integration-administration",
    desc: "CRM sync, SSO and no-code launch",
    badge: "IA",
    tone: "ink",
  },
  {
    label: "Analytics & Intelligence",
    href: "/features/analytics-intelligence",
    desc: "Funnels, sentiment and revenue attribution",
    badge: "AN",
    tone: "ink",
  },
  {
    label: "AI Visibility & GEO/AEO",
    href: "/features/ai-visibility-geo-aeo",
    desc: "Be found by ChatGPT, Gemini and Perplexity",
    badge: "AV",
    tone: "violet",
  },
];

export const solutions: NavLink[] = [
  { label: "Website Conversion", href: "/solutions/website-conversion" },
  { label: "Lead Generation", href: "/solutions/lead-generation" },
  { label: "Visitor Intelligence", href: "/solutions/visitor-intelligence" },
  { label: "Sales Automation", href: "/solutions/sales-automation" },
  { label: "AI Sales", href: "/solutions/ai-sales" },
  { label: "AI Support", href: "/solutions/ai-support" },
  { label: "Customer Engagement", href: "/solutions/customer-engagement" },
  {
    label: "Website Personalization",
    href: "/solutions/website-personalization",
  },
  { label: "AI Visibility", href: "/solutions/ai-visibility" },
  { label: "GEO/AEO", href: "/solutions/geo-aeo" },
];

export const industries: NavLink[] = [
  { label: "SaaS", href: "/industries/saas" },
  { label: "Non-Tech SMB", href: "/industries/smb" },
  { label: "E-commerce & D2C", href: "/industries/ecommerce" },
  { label: "Higher Education", href: "/industries/education" },
  { label: "Government & PSU", href: "/industries/government" },
  { label: "BFSI", href: "/industries/bfsi" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  {
    label: "Legal & Professional",
    href: "/industries/legal-professional-services",
  },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Media & Publishing", href: "/industries/media-publishing" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "EdTech", href: "/industries/edtech" },
];

export const mainNav: NavItem[] = [
  {
    label: "Product",
    columns: [
      {
        title: "Product",
        links: [
          {
            label: "Platform",
            href: "/platform",
            desc: "One engine, nine connected capabilities",
            badge: "TJ",
            tone: "ink",
          },
          {
            label: "All features",
            href: "/features",
            desc: "62 features across 8 capability pillars",
            badge: "62",
            tone: "teal",
          },
          {
            label: "AI Visibility & GEO",
            href: "/ai-visibility",
            desc: "Track how AI answer engines see your brand",
            badge: "AV",
            tone: "violet",
          },
          {
            label: "Integrations",
            href: "/integrations",
            desc: "HubSpot, Salesforce, calendars, API",
            badge: "IN",
            tone: "orange",
          },
        ],
      },
      { title: "Capabilities", links: features },
    ],
  },
  {
    label: "Solutions",
    columns: [
      { title: "By workflow", links: solutions },
      { title: "By industry", links: industries },
    ],
  },
  { label: "Compare", href: "/compare" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  {
    label: "Resources",
    columns: [
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Guides", href: "/guides" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Documentation", href: "/docs" },
          { label: "Help Center", href: "/help" },
        ],
      },
      {
        title: "Free tools",
        links: [
          { label: "AI Visibility Audit", href: "/tools/ai-visibility-audit" },
          { label: "GEO/AEO Audit", href: "/tools/geo-aeo-audit" },
          {
            label: "Website Conversion Audit",
            href: "/tools/website-conversion-audit",
          },
        ],
      },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Features", href: "/features" },
      { label: "AI Visibility & GEO/AEO", href: "/ai-visibility" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Website Conversion", href: "/solutions/website-conversion" },
      { label: "Lead Generation", href: "/solutions/lead-generation" },
      { label: "Sales Automation", href: "/solutions/sales-automation" },
      { label: "By industry", href: "/industries" },
      { label: "View all", href: "/solutions" },
    ],
  },
  {
    title: "Compare",
    links: [
      {
        label: "AI Website Sales Agents",
        href: "/compare/ai-website-sales-agents",
      },
      { label: "No-Code Chatbots", href: "/compare/no-code-chatbots" },
      {
        label: "AI SDR / Outbound",
        href: "/compare/ai-sdr-outbound-automation",
      },
      {
        label: "Enterprise Conv. AI (India)",
        href: "/compare/enterprise-conversational-ai-india",
      },
      { label: "AI Visibility & GEO Tools", href: "/compare/ai-visibility-tools" },
      { label: "View all", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Glossary", href: "/glossary" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/press" },
      { label: "Status", href: "/status" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Sub-processors", href: "/subprocessors" },
  { label: "SLA", href: "/sla" },
  { label: "DPA", href: "/data-processing" },
];
