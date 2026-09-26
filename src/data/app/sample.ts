// Illustrative sample data for the /app product preview.
// Every company, person and number here is FICTIONAL and shown under a
// "sample data" banner - none of it is a customer, result or benchmark.

export const workspace = { name: 'Northwind Demo', plan: 'Growth', crm: 'HubSpot' };

export const reps = ['Aisha Kapoor', 'Daniel Brooks', 'Mei Tanaka', 'Rahul Verma'];

// ------------------------------------------------------------------ visitors
export type Visitor = {
  id: string; company: string | null; name: string | null; email: string | null; title: string | null;
  firstSeen: string; pages: number; status: 'Identified' | 'Anonymous' | 'Lead'; source: string; geo: string;
  icp: number | null; confidence: number | null; industry: string | null; size: string | null;
  sessions: { when: string; pages: string[]; duration: string }[];
};

export const visitors: Visitor[] = [
  { id: 'v-1042', company: 'Northwind Logistics', name: 'Priya Shah', email: 'priya.shah@northwind.example', title: 'Head of Revenue Operations', firstSeen: '2026-09-22', pages: 14, status: 'Lead', source: 'Organic search', geo: 'Mumbai, IN', icp: 92, confidence: 94, industry: 'Logistics', size: '500–1,000',
    sessions: [
      { when: '2026-09-26 10:14', pages: ['/pricing', '/integrations/salesforce', '/enterprise'], duration: '6m 40s' },
      { when: '2026-09-24 16:02', pages: ['/platform', '/features/qualification-routing'], duration: '4m 05s' },
      { when: '2026-09-22 09:31', pages: ['/', '/why-thosjod'], duration: '2m 12s' },
    ] },
  { id: 'v-1041', company: 'Bluepeak Health', name: 'Marcus Lee', email: 'm.lee@bluepeak.example', title: 'Director of Patient Access', firstSeen: '2026-09-25', pages: 9, status: 'Identified', source: 'Paid search', geo: 'Singapore, SG', icp: 81, confidence: 88, industry: 'Healthcare', size: '1,000–5,000',
    sessions: [{ when: '2026-09-25 13:44', pages: ['/industries/healthcare', '/features/conversational-ai-agents', '/pricing'], duration: '5m 18s' }] },
  { id: 'v-1040', company: 'Kestrel Software', name: null, email: null, title: null, firstSeen: '2026-09-25', pages: 6, status: 'Identified', source: 'LinkedIn', geo: 'Berlin, DE', icp: 74, confidence: 71, industry: 'SaaS', size: '50–200',
    sessions: [{ when: '2026-09-25 08:20', pages: ['/solutions/lead-generation', '/compare/thosjod-vs-drift'], duration: '3m 02s' }] },
  { id: 'v-1039', company: null, name: null, email: null, title: null, firstSeen: '2026-09-26', pages: 3, status: 'Anonymous', source: 'Direct', geo: 'Pune, IN', icp: null, confidence: null, industry: null, size: null,
    sessions: [{ when: '2026-09-26 11:02', pages: ['/', '/pricing', '/demo'], duration: '1m 48s' }] },
  { id: 'v-1038', company: 'Harbor & Vale Realty', name: 'Sofia Ramos', email: 'sofia@harborvale.example', title: 'Marketing Manager', firstSeen: '2026-09-21', pages: 11, status: 'Lead', source: 'Referral', geo: 'Dubai, AE', icp: 68, confidence: 90, industry: 'Real Estate', size: '200–500',
    sessions: [{ when: '2026-09-23 17:10', pages: ['/industries/real-estate', '/tools/ai-visibility-audit'], duration: '7m 55s' }] },
  { id: 'v-1037', company: null, name: null, email: null, title: null, firstSeen: '2026-09-26', pages: 2, status: 'Anonymous', source: 'Organic search', geo: 'London, UK', icp: null, confidence: null, industry: null, size: null,
    sessions: [{ when: '2026-09-26 09:47', pages: ['/ai-visibility', '/geo-aeo'], duration: '0m 58s' }] },
  { id: 'v-1036', company: 'Crestline Insurance', name: 'Omar Haddad', email: 'o.haddad@crestline.example', title: 'VP Digital', firstSeen: '2026-09-20', pages: 17, status: 'Lead', source: 'Paid search', geo: 'Bengaluru, IN', icp: 88, confidence: 92, industry: 'BFSI', size: '5,000+',
    sessions: [{ when: '2026-09-24 11:30', pages: ['/industries/bfsi', '/security', '/enterprise', '/pricing'], duration: '9m 12s' }] },
  { id: 'v-1035', company: 'Lumen EdTech', name: null, email: null, title: null, firstSeen: '2026-09-24', pages: 5, status: 'Identified', source: 'Organic search', geo: 'Hyderabad, IN', icp: 57, confidence: 66, industry: 'EdTech', size: '50–200',
    sessions: [{ when: '2026-09-24 19:05', pages: ['/industries/edtech', '/solutions/website-conversion'], duration: '2m 40s' }] },
];

// ------------------------------------------------------------------ companies (rollup)
export const companies = visitors
  .filter((v) => v.company)
  .map((v) => ({ company: v.company!, domain: (v.email?.split('@')[1] ?? `${v.company!.toLowerCase().split(' ')[0]}.example`), sessions: v.sessions.length + Math.floor(v.pages / 4), icp: v.icp ?? 0, last: v.sessions[0].when.split(' ')[0], visitorId: v.id }));

// ------------------------------------------------------------------ sessions
export const sessions = visitors.flatMap((v, i) =>
  v.sessions.map((s, j) => ({
    id: `s-${8800 + i * 7 + j}`, visitor: v.name ?? v.company ?? 'Anonymous visitor', visitorId: v.id,
    start: s.when, duration: s.duration, pages: s.pages.length,
    outcome: j === 0 && v.status === 'Lead' ? 'Lead captured' : v.status === 'Anonymous' ? 'Bounced' : 'Engaged',
  })),
);

// ------------------------------------------------------------------ leads
export type Lead = {
  id: string; name: string; company: string; icp: number; status: 'New' | 'Routed' | 'Booked' | 'Lost';
  rep: string | null; created: string; visitorId: string; crmSynced: boolean; budget: string; timeline: string; useCase: string; conversationId: string;
};

export const leads: Lead[] = [
  { id: 'l-311', name: 'Priya Shah', company: 'Northwind Logistics', icp: 92, status: 'Booked', rep: 'Aisha Kapoor', created: '2026-09-26', visitorId: 'v-1042', crmSynced: true, budget: 'Scale tier', timeline: 'This quarter', useCase: 'Multi-brand lead routing into Salesforce', conversationId: 'c-5207' },
  { id: 'l-310', name: 'Omar Haddad', company: 'Crestline Insurance', icp: 88, status: 'Routed', rep: 'Daniel Brooks', created: '2026-09-24', visitorId: 'v-1036', crmSynced: true, budget: 'Enterprise', timeline: 'Next quarter', useCase: 'Compliance-safe product guidance', conversationId: 'c-5199' },
  { id: 'l-309', name: 'Sofia Ramos', company: 'Harbor & Vale Realty', icp: 68, status: 'New', rep: null, created: '2026-09-23', visitorId: 'v-1038', crmSynced: false, budget: 'Growth tier', timeline: 'Exploring', useCase: 'Capture listing-page inquiries', conversationId: 'c-5188' },
  { id: 'l-308', name: 'Marcus Lee', company: 'Bluepeak Health', icp: 81, status: 'New', rep: null, created: '2026-09-25', visitorId: 'v-1041', crmSynced: false, budget: 'Not stated', timeline: 'This quarter', useCase: 'Appointment booking assistant', conversationId: 'c-5203' },
  { id: 'l-307', name: 'Elena Petrova', company: 'Quanta Retail', icp: 45, status: 'Lost', rep: 'Mei Tanaka', created: '2026-09-18', visitorId: 'v-1035', crmSynced: true, budget: 'Starter tier', timeline: 'Next year', useCase: 'Cart-abandonment questions', conversationId: 'c-5150' },
];

// ------------------------------------------------------------------ conversations
export type Msg = { from: 'visitor' | 'agent' | 'human' | 'system'; text: string; grounded?: boolean; sentiment?: 'positive' | 'neutral' | 'negative'; source?: string };
export type Conversation = {
  id: string; visitor: string; visitorId: string; agent: 'Sales' | 'Support' | 'Voice'; sentiment: number; duration: string; outcome: string; date: string; messages: Msg[];
};

export const conversations: Conversation[] = [
  { id: 'c-5207', visitor: 'Priya Shah · Northwind Logistics', visitorId: 'v-1042', agent: 'Sales', sentiment: 0.82, duration: '6m 10s', outcome: 'Meeting booked', date: '2026-09-26',
    messages: [
      { from: 'visitor', text: 'Does this work with Salesforce? We run three brands.', sentiment: 'neutral' },
      { from: 'agent', text: 'Yes - Salesforce sync is native on Scale and Enterprise. For multiple brands you can run isolated agents, each with its own knowledge base.', grounded: true, source: 'Integrations · Enterprise' },
      { from: 'visitor', text: 'Great. Can routing depend on which brand site they came from?', sentiment: 'positive' },
      { from: 'agent', text: 'It can - rule-based routing assigns each qualified lead to the right rep or team based on the rules you configure.', grounded: true, source: 'Qualification & Routing' },
      { from: 'agent', text: 'Would a 20-minute walkthrough on Tuesday work?', grounded: true, source: 'Meeting booking' },
      { from: 'visitor', text: 'Tuesday morning works.', sentiment: 'positive' },
      { from: 'system', text: 'Meeting booked with Aisha Kapoor · Tue 10:30 · synced to HubSpot' },
    ] },
  { id: 'c-5203', visitor: 'Marcus Lee · Bluepeak Health', visitorId: 'v-1041', agent: 'Sales', sentiment: 0.64, duration: '4m 32s', outcome: 'Lead captured', date: '2026-09-25',
    messages: [
      { from: 'visitor', text: 'Can your agent help patients find the right department?', sentiment: 'neutral' },
      { from: 'agent', text: 'Yes - the agent can guide visitors to the right department and book appointments directly in the conversation.', grounded: true, source: 'Industries · Healthcare' },
      { from: 'visitor', text: 'What about questions the agent can’t answer?', sentiment: 'neutral' },
      { from: 'agent', text: 'It hands the conversation to your team with full context instead of guessing.', grounded: true, source: 'Responsible AI' },
    ] },
  { id: 'c-5199', visitor: 'Omar Haddad · Crestline Insurance', visitorId: 'v-1036', agent: 'Sales', sentiment: 0.58, duration: '8m 04s', outcome: 'Handed off to human', date: '2026-09-24',
    messages: [
      { from: 'visitor', text: 'Which compliance certifications do you hold?', sentiment: 'neutral' },
      { from: 'agent', text: 'I don’t have a verified answer for that in my knowledge base - let me connect you with our team.', grounded: false },
      { from: 'human', text: 'Hi Omar, Daniel here - I’ll send our current security documentation today.' },
    ] },
  { id: 'c-5188', visitor: 'Sofia Ramos · Harbor & Vale Realty', visitorId: 'v-1038', agent: 'Sales', sentiment: 0.71, duration: '3m 40s', outcome: 'Lead captured', date: '2026-09-23',
    messages: [
      { from: 'visitor', text: 'Most people browse our listings without ever inquiring. Can you help?', sentiment: 'negative' },
      { from: 'agent', text: 'Thosjod engages visitors in real time on listing pages and identifies high-intent browsers who never submit an inquiry form.', grounded: true, source: 'Industries · Real Estate' },
    ] },
  { id: 'c-5176', visitor: 'Anonymous visitor', visitorId: 'v-1039', agent: 'Support', sentiment: 0.35, duration: '2m 15s', outcome: 'Resolved', date: '2026-09-22',
    messages: [
      { from: 'visitor', text: 'My invoice shows more credits than I expected.', sentiment: 'negative' },
      { from: 'agent', text: 'Each AI conversation turn uses 1 credit, each identified visitor 2, and each AI-visibility prompt check 3 per engine. I can break down this cycle for you.', grounded: true, source: 'Pricing · How credits work' },
      { from: 'visitor', text: 'That explains it, thanks.', sentiment: 'positive' },
    ] },
  { id: 'c-5150', visitor: 'Elena Petrova · Quanta Retail', visitorId: 'v-1035', agent: 'Voice', sentiment: 0.49, duration: '5m 02s', outcome: 'No outcome', date: '2026-09-18',
    messages: [
      { from: 'visitor', text: 'Do you support Hindi and Tamil?', sentiment: 'neutral' },
      { from: 'agent', text: 'Multilingual support is available - up to 10 languages on Growth and 175+ on Scale.', grounded: true, source: 'Pricing' },
    ] },
];

// ------------------------------------------------------------------ agents
export const agents = [
  { name: 'Website Sales Agent', type: 'Sales', status: 'Active', conversations: 412, href: '/app/agents/sales' },
  { name: 'Help Center Support Agent', type: 'Support', status: 'Active', conversations: 268, href: '/app/agents/support' },
  { name: 'Inbound Voice Line', type: 'Voice', status: 'Paused', conversations: 37, href: '/app/agents/sales' },
];

// ------------------------------------------------------------------ automation
export const playbooks = [
  { name: 'Follow up with pricing-page visitors who didn’t book', trigger: 'Visited /pricing twice, no meeting', status: 'Active', lastRun: '2026-09-26 09:00' },
  { name: 'Nurture high-ICP anonymous companies', trigger: 'Company identified, ICP ≥ 80', status: 'Active', lastRun: '2026-09-26 08:30' },
  { name: 'Re-engage lost leads after 30 days', trigger: 'Lead status = Lost for 30 days', status: 'Draft', lastRun: '-' },
];

export const workflows = [
  { name: 'Enterprise routing', rule: 'If ICP ≥ 85 and company size ≥ 1,000 → Enterprise AE team', status: 'Active' },
  { name: 'Regional routing - APAC', rule: 'If geography in APAC → Aisha Kapoor', status: 'Active' },
  { name: 'Support escalation', rule: 'If sentiment < 0.3 or handoff requested → Support queue', status: 'Active' },
];

export const outreach = [
  { recipient: 'Priya Shah', channel: 'Email', sent: '2026-09-26 11:05', opened: 'Yes', replied: 'Yes' },
  { recipient: 'Marcus Lee', channel: 'Email', sent: '2026-09-25 15:10', opened: 'Yes', replied: 'No' },
  { recipient: 'Kestrel Software (team page)', channel: 'Social', sent: '2026-09-25 10:00', opened: '-', replied: 'No' },
  { recipient: 'Sofia Ramos', channel: 'Email', sent: '2026-09-24 09:20', opened: 'No', replied: 'No' },
  { recipient: 'Omar Haddad', channel: 'Social', sent: '2026-09-23 18:45', opened: '-', replied: 'Yes' },
];

// ------------------------------------------------------------------ knowledge
export const knowledge = [
  { source: 'thosjod.example/pricing', type: 'Page', synced: '2026-09-26 06:00', status: 'Synced' },
  { source: 'Security overview.pdf', type: 'PDF', synced: '2026-09-25 18:12', status: 'Synced' },
  { source: 'thosjod.example/sitemap.xml', type: 'Sitemap', synced: '2026-09-26 06:00', status: 'Synced' },
  { source: 'Onboarding guide (Google Doc)', type: 'Doc', synced: '2026-09-19 10:40', status: 'Needs re-sync' },
];

export const gaps = [
  { question: 'Which compliance certifications do you hold?', frequency: 14, quality: 'Handed off' },
  { question: 'Do unused credits roll over?', frequency: 9, quality: 'Handed off' },
  { question: 'Is there a free trial?', frequency: 7, quality: 'Partial answer' },
  { question: 'Can we self-host?', frequency: 3, quality: 'Partial answer' },
];

// ------------------------------------------------------------------ AI visibility
// Competitor names are deliberately fictional.
export const trackedCompetitors = ['Acme Chat', 'LeadBeam', 'VisitIQ'];
export const prompts = [
  'best AI tool to identify anonymous website visitors',
  'how to qualify website leads automatically',
  'AI chatbot that books meetings and syncs to Salesforce',
  'tools to track brand visibility in ChatGPT',
];
export const engines = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude', 'Grok', 'Google AI'];
export const visibility = [
  { prompt: prompts[0], engine: 'Gemini', brand: 'Yes', competitor: 'VisitIQ', checked: '2026-09-26 06:00' },
  { prompt: prompts[0], engine: 'ChatGPT', brand: 'No', competitor: 'VisitIQ, LeadBeam', checked: '2026-09-26 06:00' },
  { prompt: prompts[1], engine: 'Gemini', brand: 'Yes', competitor: '-', checked: '2026-09-26 06:00' },
  { prompt: prompts[1], engine: 'ChatGPT', brand: 'No', competitor: 'Acme Chat', checked: '2026-09-25 06:00' },
  { prompt: prompts[2], engine: 'ChatGPT', brand: 'Yes', competitor: 'Acme Chat', checked: '2026-09-26 06:00' },
  { prompt: prompts[3], engine: 'Gemini', brand: 'No', competitor: '-', checked: '2026-09-26 06:00' },
];
export const auditIssues = [
  { page: '/pricing', issue: 'FAQ section has no FAQPage structured data', points: 6, severity: 'High' },
  { page: '/features/qualification-routing', issue: 'Answer to “How is the ICP score calculated?” is under 40 words', points: 3, severity: 'Medium' },
  { page: '/industries/bfsi', issue: 'No Organization schema on page', points: 2, severity: 'Low' },
  { page: '/compare', issue: 'Heading hierarchy skips from H1 to H3', points: 2, severity: 'Low' },
];

// ------------------------------------------------------------------ integrations & settings
export const integrations = [
  { name: 'HubSpot', kind: 'CRM', status: 'Connected', synced: '2026-09-26 11:06' },
  { name: 'Google Calendar', kind: 'Calendar', status: 'Connected', synced: '2026-09-26 11:00' },
  { name: 'Webhooks', kind: 'Developer', status: 'Connected', synced: '2026-09-26 10:58' },
  { name: 'Salesforce', kind: 'CRM', status: 'Not connected (Scale+)', synced: '-' },
  { name: 'Microsoft Outlook / Office 365', kind: 'Calendar', status: 'Not connected', synced: '-' },
];

export const team = [
  { name: 'Aisha Kapoor', email: 'aisha@northwind.example', role: 'Admin', status: 'Active' },
  { name: 'Daniel Brooks', email: 'daniel@northwind.example', role: 'Editor', status: 'Active' },
  { name: 'Mei Tanaka', email: 'mei@northwind.example', role: 'Editor', status: 'Active' },
  { name: 'Rahul Verma', email: 'rahul@northwind.example', role: 'Viewer', status: 'Invited' },
];

export const auditLog = [
  { ts: '2026-09-26 10:02', user: 'Aisha Kapoor', action: 'Routing rule updated', details: 'Enterprise routing: ICP threshold 80 → 85' },
  { ts: '2026-09-25 17:40', user: 'Daniel Brooks', action: 'Knowledge source added', details: 'Security overview.pdf' },
  { ts: '2026-09-25 09:15', user: 'Aisha Kapoor', action: 'Agent scope changed', details: 'Website Sales Agent: scope narrowed to product & pricing' },
  { ts: '2026-09-24 14:22', user: 'Mei Tanaka', action: 'Team member invited', details: 'rahul@northwind.example (Viewer)' },
  { ts: '2026-09-23 11:08', user: 'Aisha Kapoor', action: 'Integration connected', details: 'HubSpot' },
];

// Plan data from content/pages/pricing.md (Growth tier)
export const billing = { plan: 'Growth', included: 20000, used: 12480, nextInvoice: '2026-10-01' };

// ------------------------------------------------------------------ analytics (sample series)
export const weekly = {
  labels: ['Aug 31', 'Sep 7', 'Sep 14', 'Sep 21'],
  meetings: [6, 9, 8, 13],
  leads: [21, 27, 25, 34],
  conversations: [310, 344, 362, 401],
};
export const funnel = [
  { stage: 'Visitors', value: 18240 },
  { stage: 'Engaged', value: 3120 },
  { stage: 'Identified', value: 1480 },
  { stage: 'Qualified', value: 212 },
  { stage: 'Meeting booked', value: 36 },
];
export const sentimentTrend = [0.52, 0.55, 0.61, 0.58, 0.64, 0.67, 0.66, 0.71];
