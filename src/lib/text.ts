// Heading helpers - sentence case.
const KEEP_CASE = new Set([
  "Thosjod",
  "Drift",
  "Warmly",
  "Qualified",
  "Intercom",
  "Fin",
  "Expertise.ai",
  "HubSpot",
  "Salesforce",
  "India",
  "Google",
  "Gemini",
  "ChatGPT",
]);

/** "Where They Overlap" → "Where they overlap" (keeps acronyms and brand names). */
export const sentence = (s: string) =>
  s
    .split(" ")
    .map((w, i) =>
      i > 0 &&
      /^[A-Z][a-z]+[:?]?$/.test(w) &&
      !KEEP_CASE.has(w.replace(/[:?]$/, ""))
        ? w.toLowerCase()
        : w,
    )
    .join(" ");

/** Adds a closing period unless the heading already ends in punctuation. */
export const finish = (s: string) => (/[.?!)]$/.test(s) ? s : `${s}.`);

export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
