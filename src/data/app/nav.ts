// App navigation - main sidebar from application-ia-ux-copy.md (/app/dashboard "Navigation"),
// with each section's related routes nested beneath it.
export type AppNavItem = { label: string; href: string; icon: string; children?: { label: string; href: string }[] };

export const appNav: AppNavItem[] = [
  { label: 'Dashboard', href: '/app/dashboard', icon: 'grid' },
  { label: 'Visitors', href: '/app/visitors', icon: 'user', children: [
    { label: 'All visitors', href: '/app/visitors' },
    { label: 'Companies', href: '/app/companies' },
    { label: 'Sessions', href: '/app/sessions' },
  ] },
  { label: 'Leads', href: '/app/leads', icon: 'spark' },
  { label: 'Conversations', href: '/app/conversations', icon: 'chat' },
  { label: 'Agents', href: '/app/agents', icon: 'agent', children: [
    { label: 'All agents', href: '/app/agents' },
    { label: 'Sales Agent', href: '/app/agents/sales' },
    { label: 'Support Agent', href: '/app/agents/support' },
    { label: 'Playbooks', href: '/app/playbooks' },
    { label: 'Workflows', href: '/app/workflows' },
    { label: 'Outreach', href: '/app/outreach' },
  ] },
  { label: 'Analytics', href: '/app/analytics', icon: 'chart' },
  { label: 'Knowledge', href: '/app/knowledge', icon: 'book', children: [
    { label: 'Sources', href: '/app/knowledge' },
    { label: 'Knowledge gaps', href: '/app/knowledge/gaps' },
  ] },
  { label: 'AI Visibility', href: '/app/ai-visibility', icon: 'eye' },
  { label: 'Integrations', href: '/app/integrations', icon: 'plug' },
  { label: 'Settings', href: '/app/settings', icon: 'gear' },
];

// Sub-navs from the spec
export const analyticsNav = [
  { label: 'Overview', href: '/app/analytics' },
  { label: 'Revenue', href: '/app/analytics/revenue' },
  { label: 'Funnel', href: '/app/analytics/funnel' },
  { label: 'Conversations', href: '/app/analytics/conversations' },
  { label: 'Sentiment', href: '/app/analytics/sentiment' },
  { label: 'Heatmaps', href: '/app/analytics/heatmaps' },
];

export const settingsNav = [
  { label: 'Overview', href: '/app/settings' },
  { label: 'Team', href: '/app/settings/team' },
  { label: 'Permissions', href: '/app/settings/permissions' },
  { label: 'Billing', href: '/app/settings/billing' },
  { label: 'Security', href: '/app/settings/security' },
  { label: 'Notifications', href: '/app/settings/notifications' },
  { label: 'API', href: '/app/settings/api' },
  { label: 'Audit Log', href: '/app/settings/audit-log' },
];

export const visibilityNav = [
  { label: 'Dashboard', href: '/app/ai-visibility' },
  { label: 'Prompt Library', href: '/app/ai-visibility/prompts' },
  { label: 'Competitors', href: '/app/ai-visibility/competitors' },
  { label: 'GEO/AEO Audit', href: '/app/ai-visibility/audit' },
];
