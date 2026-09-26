// Homepage content - source: thosjod_content/content/pages/home.md
// Images are Unsplash placeholders; swap for owned imagery before launch.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const seo = {
  title: "Thosjod: AI Website Lead Engine with AI Visibility Tracking",
  description: "Thosjod identifies anonymous website visitors, qualifies leads with grounded AI agents, and tracks your brand's visibility in ChatGPT, Gemini and other AI engines.",
};

export const heroSlides = [
  {
    tab: "Platform",
    badge: "logo",
    title: ["Turn every website visitor", "into a qualified conversation."],
    sub: "Thosjod identifies, engages, and qualifies visitors in real time - form or no form - then tracks how your brand actually shows up when buyers ask AI instead of Google.",
    primary: { label: "Book a Demo", href: "/demo" },
    secondary: { label: "See It In Action", href: "#how-it-works" },
    image: u("1542744173-8e7e53415bb0", 2000),
  },
  {
    tab: "Visitor Identification",
    badge: "ID",
    tone: "teal",
    title: ["Meet the buyers", "who never fill a form."],
    sub: "Identify anonymous visitors, enrich data on the fly, and recognize them across every session.",
    primary: {
      label: "Explore ID",
      href: "/features/identification-enrichment",
    },
    secondary: { label: "Book a Demo", href: "/demo" },
    image: u("1504384308090-c894fdcc538d", 2000),
  },
  {
    tab: "AI Agents",
    badge: "AI",
    tone: "orange",
    title: ["Sales, support and voice.", "Grounded and multilingual."],
    sub: "Every response is grounded in your approved knowledge base - with human handoff instead of a guess.",
    primary: {
      label: "Explore Agents",
      href: "/features/conversational-ai-agents",
    },
    secondary: { label: "Book a Demo", href: "/demo" },
    image: u("1519389950473-47ba0277781c", 2000),
  },
  {
    tab: "AI Visibility & GEO/AEO",
    badge: "AV",
    tone: "violet",
    title: ["Be found by AI,", "not just Google."],
    sub: "Live Gemini tracking with Search grounding, competitor mention tracking, and an explainable GEO/AEO audit.",
    primary: {
      label: "Explore AI Visibility",
      href: "/features/ai-visibility-geo-aeo",
    },
    secondary: {
      label: "Free AI Visibility Audit",
      href: "/tools/ai-visibility-audit",
    },
    image: u("1531297484001-80022131f5a1", 2000),
  },
];

// "Works with" strip - integrations + AI engines named in the content (no customer logos yet)
export const worksWith = [
  "HubSpot",
  "Salesforce",
  "Google Calendar",
  "Webhooks & API",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Claude",
];

export const problem = {
  eyebrow: "The problem",
  title: "Your website is full of buyers you'll never meet.",
  items: [
    {
      title: "98% of visitors leave unseen",
      body: "They research, compare, and decide - then bounce before ever filling a form.",
    },
    {
      title: "Forms kill intent",
      body: "The moment you ask for an email, most best-fit visitors disappear.",
    },
    {
      title: "Blind sales outreach",
      body: "Reps chase cold leads with no idea what a prospect actually needed.",
    },
    {
      title: "Invisible in AI answers",
      body: "When buyers ask ChatGPT or Gemini instead of Google, brands have zero visibility and zero way to fix it.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "Engage. Identify. Convert.",
  title: "From an anonymous click to a booked meeting.",
  signals: [
    { label: "Page visits", icon: "page", color: "#ca7b57" },
    { label: "Pricing intent", icon: "tag", color: "#208374" },
    { label: "Chat messages", icon: "chat", color: "#594aff" },
    { label: "Company data", icon: "building", color: "#1a1814" },
    { label: "CRM records", icon: "db", color: "#f99d72" },
    { label: "Calendars", icon: "cal", color: "#208374" },
  ],
  steps: [
    {
      n: "01",
      title: "Visitor arrives",
      body: "On any page, with or without prior identity.",
    },
    {
      n: "02",
      title: "Thosjod engages",
      body: "Real-time, personalized conversation - no waiting.",
    },
    {
      n: "03",
      title: "Identifies & qualifies",
      body: "Deanonymizes, enriches, and scores against your ICP.",
    },
    {
      n: "04",
      title: "Pipeline & revenue",
      body: "Routes to the right rep, books the meeting, syncs the CRM.",
    },
  ],
};

export const engine = {
  eyebrow: "A new category. One continuous engine.",
  title: ["One engine, nine", "connected capabilities."],
  sub: "Chatbots answer questions. Visitor-ID tools flag traffic. AI SDRs automate outbound. AI-visibility tools track AI answers. Thosjod connects these stages in one engine - converting your visitors and tracking your AI visibility in the same place.",
  cards: [
    {
      tag: "Discovery & Engagement",
      badge: "DE",
      tone: "teal",
      title: "Discovery & Engagement",
      body: "Real-time engagement, dynamic content serving, and a custom on-brand agent that greets every visitor.",
      status: "5 features · Pillar 01",
      href: "/features/discovery-engagement",
      image: u("1600880292203-757bb62b4baf", 900),
    },
    {
      tag: "Identification & Qualification",
      badge: "IQ",
      tone: "orange",
      title: "Identification & Qualification",
      body: "Deanonymize, enrich, and score every visitor against your ICP - then route them to the right rep.",
      status: "13 features · Pillars 02–03",
      href: "/features/identification-enrichment",
      image: u("1486406146926-c627a92ad1ab", 900),
    },
    {
      tag: "AI Visibility & GEO/AEO",
      badge: "AV",
      tone: "violet",
      title: "AI Visibility & GEO/AEO",
      body: "Track and improve how ChatGPT, Gemini, and Perplexity describe your brand - with an explainable audit.",
      status: "9 features · Pillar 08",
      href: "/features/ai-visibility-geo-aeo",
      engines: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Grok",
        "Perplexity",
        "Google AI",
      ],
    },
  ],
};

// Primefold's testimonial carousel, repurposed as an honest pillar showcase
export const showcase = [
  {
    tag: "Qualification & Routing",
    tone: "orange",
    quote: "The right lead, to the right rep, automatically.",
    cta: { label: "Explore Routing", href: "/features/qualification-routing" },
    name: "ICP scoring · Rule-based routing",
    role: "Meeting booking and CRM context",
    count: "7",
    image: u("1522071820081-009f0129c71c"),
  },
  {
    tag: "Automation & Outbound",
    tone: "ink",
    quote: "AI-driven playbooks that replicate your best reps.",
    cta: { label: "Explore Automation", href: "/features/automation-outbound" },
    name: "Natural-language playbooks",
    role: "Automated follow-up · Social SDR",
    count: "6",
    image: u("1517245386807-bb43f82c33c4"),
  },
  {
    tag: "Analytics & Intelligence",
    tone: "teal",
    quote: "See exactly what's working - and what isn't.",
    cta: {
      label: "Explore Analytics",
      href: "/features/analytics-intelligence",
    },
    name: "Revenue attribution · Funnels",
    role: "Sentiment and knowledge-gap insights",
    count: "9",
    image: u("1551288049-bebda4e38f71"),
  },
  {
    tag: "Discovery & Engagement",
    tone: "teal",
    quote: "A hyper-personalized discovery experience on every page.",
    cta: { label: "Explore Discovery", href: "/features/discovery-engagement" },
    name: "Real-time engagement",
    role: "Dynamic content · On-brand agent",
    count: "5",
    image: u("1553877522-43269d4ea984"),
  },
];

export const industriesSection = {
  eyebrow: "Industries",
  title: "Built for any website where traffic matters.",
  sub: "14 industries mapped - same underlying problem: traffic without conversion.",
  items: [
    {
      title: "SaaS",
      body: "Anonymous PLG traffic never reaches sales.",
      href: "/industries/saas",
      image: u("1551434678-e076c223a692", 900),
    },
    {
      title: "E-commerce & D2C",
      body: "Pre-purchase questions go unanswered, carts abandon.",
      href: "/industries/ecommerce",
      image: u("1441986300917-64674bd600d8", 900),
    },
    {
      title: "BFSI",
      body: "Compliance risk in unscripted human chat.",
      href: "/industries/bfsi",
      image: u("1450101499163-c8848c66ca85", 900),
    },
    {
      title: "Healthcare",
      body: "Patients can't find the right specialist or book quickly.",
      href: "/industries/healthcare",
      image: u("1576091160399-112ba8d25d1d", 900),
    },
    {
      title: "Real Estate",
      body: "High-intent anonymous browsers never inquire.",
      href: "/industries/real-estate",
      image: u("1560518883-ce09059eeffa", 900),
    },
    {
      title: "Higher Education",
      body: "Admissions can't respond to seasonal inquiry volume.",
      href: "/industries/education",
      image: u("1541339907198-e08756dedf3f", 900),
    },
    {
      title: "Manufacturing",
      body: "Buying committees browse anonymously for months.",
      href: "/industries/manufacturing",
      image: u("1581091226825-a6a2a5aee158", 900),
    },
    {
      title: "Travel & Hospitality",
      body: "Comparison shoppers need real-time nudges to book.",
      href: "/industries/travel-hospitality",
      image: u("1436491865332-7a61a109cc05", 900),
    },
    {
      title: "Legal & Professional",
      body: "Prospects want answers before a costly consult call.",
      href: "/industries/legal-professional-services",
      image: u("1589829545856-d10d557cf95f", 900),
    },
    {
      title: "Telecom",
      body: "Support volume overwhelms agents.",
      href: "/industries/telecom",
      image: u("1558494949-ef010cbdcc31", 900),
    },
    {
      title: "Media & Publishing",
      body: "Low subscription conversion from readers.",
      href: "/industries/media-publishing",
      image: u("1504711434969-e33886168f5c", 900),
    },
    {
      title: "EdTech",
      body: "High bounce on course pages before questions are answered.",
      href: "/industries/edtech",
      image: u("1501504905252-473c47e087f8", 900),
    },
    {
      title: "Government & PSU",
      body: "Citizens can't find the right service or form.",
      href: "/industries/government",
      image: u("1497366216548-37526070297c", 900),
    },
    {
      title: "Non-Tech SMB",
      body: "No 24/7 sales team; form leads go cold.",
      href: "/industries/smb",
      image: u("1556745757-8d76bdb6984b", 900),
    },
  ],
};

export const trust = {
  eyebrow: "Trust",
  title: "Trust, built into every layer.",
  sub: "Every conversation passes through three layers of control before it reaches a visitor - or your CRM.",
  items: [
    {
      title: "Grounded answers, not guesses",
      body: "Every response is grounded in your approved knowledge base, with no-hallucination guardrails.",
    },
    {
      title: "Human handoff instead of a guess",
      body: "When the agent isn't certain, it hands the conversation to your team - with full context.",
    },
    {
      title: "Fits the stack you already run",
      body: "Syncs into HubSpot, Salesforce and your calendars. No rip-and-replace, full configuration audit trail.",
    },
  ],
  layers: ["Knowledge base", "Guardrails", "Human handoff"],
};

// Pillar 9 outcome metrics - framed as the questions the dashboard answers, never invented numbers
export const outcomes = {
  eyebrow: "Outcomes",
  title: ["What changes when your website", "starts qualifying itself."],
  sub: "Every pillar rolls up into the outcome metrics leadership actually tracks.",
  items: [
    {
      big: "Meetings",
      body: "How many inbound meetings is the website generating?",
      label: "Inbound meeting volume",
      image: u("1557804506-669a67965ba0", 1200),
    },
    {
      big: "Acquisition",
      body: "How much of direct customer acquisition traces back to the website?",
      label: "Direct customer acquisition",
      image: u("1460925895917-afdab827c52f", 1200),
    },
    {
      big: "Conversion",
      body: "How much has chat-to-lead conversion improved since deployment?",
      label: "Chat-to-lead conversion lift",
      image: u("1519389950473-47ba0277781c", 1200),
    },
    {
      big: "Close rate",
      body: "Is consultation close rate improving?",
      label: "Consultation close rate",
      image: u("1531482615713-2afd69097998", 1200),
    },
    {
      big: "Churn",
      body: "Is churn trending down?",
      label: "Churn rate",
      image: u("1497215728101-856f4ea42174", 1200),
    },
    {
      big: "Engagement",
      body: "Is engagement and CTA click-through increasing?",
      label: "Engagement & CTA click-through",
      image: u("1521737604893-d14cc237f11d", 1200),
    },
  ],
};

export const faq = [
  {
    q: "What makes Thosjod different from a chatbot?",
    a: "Chatbots answer questions from visitors who choose to open the widget. Thosjod also identifies and engages the visitors who never open it at all.",
  },
  {
    q: "Does Thosjod replace our CRM?",
    a: "No - it syncs into your existing CRM (HubSpot, Salesforce) rather than replacing it.",
  },
  {
    q: "Can the AI agent give wrong answers?",
    a: "Every response is grounded in your approved knowledge base, with human handoff instead of a guess.",
  },
  {
    q: "What is AI Visibility / GEO/AEO?",
    a: "The practice of tracking and improving how your brand is represented in AI-generated answers (ChatGPT, Gemini, Perplexity, etc.), the way SEO tracks and improves search-engine visibility.",
  },
];

export const finalCta = {
  title: ["Give your website a voice", "worth talking to."],
  body: "Book a 20-minute walkthrough and see Thosjod identify, qualify, and route a real visitor session live.",
  cta: { label: "Book a Demo", href: "/demo" },
};
