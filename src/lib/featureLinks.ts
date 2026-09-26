// Maps a feature / capability name to the pillar page that documents it.
// Order matters: the first matching rule wins.
const RULES: [RegExp, string][] = [
  [/visib|geo\b|aeo|ai engine|chatgpt|gemini|perplexity|prompt|competitor mention|ai seo/i, '/features/ai-visibility-geo-aeo'],
  [/deanonym|identif|enrich|identity|cross-session|recogni/i, '/features/identification-enrichment'],
  [/icp|scor|qualif|rout|meeting|booking|calendar|structured data|flow control|data capture/i, '/features/qualification-routing'],
  [/agent|voice|multiling|hallucin|grounded|rag|knowledge base|human handoff|escalat/i, '/features/conversational-ai-agents'],
  [/playbook|follow-?up|outbound|sdr|nurtur|sequence|automat/i, '/features/automation-outbound'],
  [/crm|sso|integrat|no-code|setup|webhook|api|admin|configur/i, '/features/integration-administration'],
  [/analytic|funnel|sentiment|heat ?map|attribution|knowledge.gap|a\/b|report|insight/i, '/features/analytics-intelligence'],
  [/personaliz|proactive|engag|dynamic content|discover|real-time|on-brand/i, '/features/discovery-engagement'],
];

export const featureHref = (label: string): string | undefined =>
  RULES.find(([re]) => re.test(label))?.[1];

const PILLARS: Record<string, string> = {
  'discovery & engagement': '/features/discovery-engagement',
  'identification & enrichment': '/features/identification-enrichment',
  'qualification & routing': '/features/qualification-routing',
  'conversational ai agents': '/features/conversational-ai-agents',
  'automation & outbound': '/features/automation-outbound',
  'integration & administration': '/features/integration-administration',
  'analytics & intelligence': '/features/analytics-intelligence',
  'ai visibility & geo/aeo': '/features/ai-visibility-geo-aeo',
};

/** Exact pillar-name lookup (used for "Draws on: A + B"). */
export const pillarHref = (name: string): string | undefined =>
  PILLARS[name.trim().toLowerCase()] ?? featureHref(name);
