// Inline markdown → safe HTML for content strings.
import { SHOW_GAPS, isKnownUrl, nameForUrl } from './content';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Pillar numbering from content/pages/features-index.md
const PILLAR_URLS = [
  '/features/discovery-engagement',
  '/features/identification-enrichment',
  '/features/qualification-routing',
  '/features/conversational-ai-agents',
  '/features/automation-outbound',
  '/features/integration-administration',
  '/features/analytics-intelligence',
  '/features/ai-visibility-geo-aeo',
];

const GAP_TAG = '<span class="gap" title="Needs founder input before launch">Needs input</span>';

const STATIC_FILE = /\.(png|jpe?g|svg|ico|pdf|txt|xml|zip)$/i;

const link = (url: string, label?: string) => {
  const clean = url.replace(/(?<!\.(?:png|jpe?g|svg|ico|pdf|txt|xml|zip))[.,;:]+$/i, '').replace(/[,;:]+$/, '');
  // Static files in public/ (logos, press kit, llms.txt) link as downloads, labelled by filename
  if (STATIC_FILE.test(clean)) return `<a class="ilink" href="${clean}">${esc(label ?? clean.split('/').pop()!)}</a>`;
  if (!isKnownUrl(clean)) return esc(label ?? prettyPath(clean));
  return `<a class="ilink" href="${clean}">${esc(label ?? nameForUrl(clean) ?? prettyPath(clean))}</a>`;
};

const prettyPath = (p: string) => {
  const last = p.split('/').filter(Boolean).pop() ?? p;
  return last.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

/** Converts one content string to HTML. */
export function md(input: string): string {
  let s = input
    // references to internal strategy files never render
    .replace(/\s*\((?:see |per |source: )?`[^`]*\.(?:md|csv|pdf)`[^)]*\)/gi, '')
    .replace(/,?\s*(?:see |per )?`[^`]*\.(?:md|csv|pdf)`/gi, '')
    .replace(/`\/[^`]*\*[^`]*`/g, '') // wildcard paths like `/industries/*`
    .replace(/\s*\(Source:[^)]*\)\.?/gi, '') // internal source attributions
    .trim();

  // tokenise so escaping doesn't touch generated HTML
  const tokens: string[] = [];
  const hold = (html: string) => `\u0000${tokens.push(html) - 1}\u0000`;

  s = s.replace(
    /\[(?:CONTENT GAP|LEGAL INPUT|PRICING INPUT|VERIFY BEFORE PUBLISHING|CASE STUDIES REQUIRED|TESTIMONIALS REQUIRED)[^\]]*\]|`?\{[^}]+\}`?|`\[[^\]`]+\]`/g,
    () => hold(SHOW_GAPS ? GAP_TAG : ''),
  );
  // (`/path`) and `/path`
  s = s.replace(/\(`(\/[^`\s]*)`\)/g, (_, u) => hold(`(${link(u)})`));
  s = s.replace(/`(\/[^`\s]*)`/g, (_, u) => hold(link(u)));
  // bare /known/paths in prose
  s = s.replace(/(^|[\s(])(\/[a-z0-9][a-z0-9/-]*)/g, (m, pre, u) =>
    isKnownUrl(u.replace(/[.,;:]+$/, '')) ? pre + hold(link(u)) : m,
  );
  s = s.replace(/`([^`]+)`/g, '$1');
  // "Pillar 6" → link to that pillar's feature page
  s = s.replace(/\bPillars? (\d)\b/g, (m, n) => {
    const url = PILLAR_URLS[Number(n) - 1];
    return url ? hold(`<a class="ilink" href="${url}">${esc(m)}</a>`) : m;
  });

  s = esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\u0000(\d+)\u0000/g, (_, i) => tokens[Number(i)]);
  return s.replace(/\s+([,.;])/g, '$1').replace(/\(\s*\)/g, '').trim();
}

/** Plain text (for meta tags, schema). */
export const plain = (s: string) => md(s).replace(/<[^>]+>/g, '').replace(/Needs input/g, '').replace(/\s+/g, ' ').trim();
