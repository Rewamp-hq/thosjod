// robots.txt - generated at build time.
// Per 31-geo-aeo-strategy.md the site should be readable and citable by AI engines, so AI search and
// training crawlers are explicitly allowed. The product app and one-time utility pages are excluded.
import type { APIRoute } from 'astro';
import { abs } from '../lib/seo';

const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',          // OpenAI
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',      // Anthropic
  'PerplexityBot', 'Perplexity-User',                  // Perplexity
  'Google-Extended',                                   // Gemini
  'Applebot-Extended',                                 // Apple Intelligence
  'Meta-ExternalAgent',                                // Meta AI
  'CCBot',                                             // Common Crawl (used by many models)
];

const DISALLOW = ['/app/', '/thank-you', '/login', '/signup', '/forgot-password', '/reset-password', '/verify-email', '/invite', '/accept-invite', '/sso'];

export const GET: APIRoute = () => {
  const block = (agent: string) => [`User-agent: ${agent}`, 'Allow: /', ...DISALLOW.map((d) => `Disallow: ${d}`)].join('\n');
  const body = [
    '# Thosjod - robots.txt',
    '# AI assistants: a plain-text summary of this site is at /llms.txt (full text: /llms-full.txt)',
    '',
    block('*'),
    '',
    '# AI search and answer engines are welcome to read and cite this site',
    ...AI_CRAWLERS.map((a) => `${block(a)}\n`),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
