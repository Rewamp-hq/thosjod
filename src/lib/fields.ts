import type { Field } from '../components/page/LeadForm.astro';
import { slugify } from './content';

/** "Full Name, Work Email, "I'm interested in" (A, B), Message." → form fields */
export function parseFields(spec: string, opts: { needEmail?: boolean } = {}): Field[] {
  const parts: string[] = [];
  let depth = 0, buf = '';
  for (const ch of spec.replace(/\.$/, '')) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { parts.push(buf); buf = ''; } else buf += ch;
  }
  if (buf.trim()) parts.push(buf);

  const fields = parts.map((p): Field => {
    const m = p.trim().match(/^(.*?)\s*(?:\(([^)]*)\))?$/)!;
    const label = m[1].replace(/["“”]/g, '').trim();
    const paren = m[2]?.trim();
    const cap = label.charAt(0).toUpperCase() + label.slice(1);
    const f: Field = { name: slugify(label), label: cap, type: 'text', required: true };
    if (paren && /optional/i.test(paren)) f.required = false;
    else if (paren) {
      f.type = 'select';
      f.options = (paren.includes(',') ? paren.split(/,\s*/) : paren.split('/')).map(
        (o) => o.trim().charAt(0).toUpperCase() + o.trim().slice(1),
      );
    }
    if (f.type !== 'select') {
      if (/email/i.test(label)) f.type = 'email';
      else if (/url|website/i.test(label)) { f.type = 'url'; f.placeholder = 'https://'; }
      else if (/message/i.test(label)) f.type = 'textarea';
      else if (/competitor/i.test(label)) f.placeholder = 'e.g. three competitor names, comma-separated';
      else if (/traffic/i.test(label)) f.placeholder = 'e.g. 50,000 visits / month';
    }
    return f;
  });
  if (opts.needEmail && !fields.some((f) => f.type === 'email')) {
    fields.push({ name: 'work-email', label: 'Work email', type: 'email', required: true });
  }
  return fields;
}
