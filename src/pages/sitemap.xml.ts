// Dynamic sitemap: generated at build time from every indexable route in src/lib/seo.ts.
// lastmod comes from each page's source file, so editing a content file updates its date.
import type { APIRoute } from 'astro';
import { seoRoutes, abs } from '../lib/seo';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
  const urls = seoRoutes()
    .map((r) => [
      '  <url>',
      `    <loc>${esc(abs(r.url))}</loc>`,
      `    <lastmod>${r.lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority.toFixed(1)}</priority>`,
      r.image ? `    <image:image><image:loc>${esc(r.image.replace('w=2000', 'w=1200'))}</image:loc></image:image>` : '',
      '  </url>',
    ].filter(Boolean).join('\n'))
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
