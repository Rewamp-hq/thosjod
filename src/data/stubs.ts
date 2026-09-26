// Routes rendered by [...slug].astro that are not content files, and content URLs with hand-built pages.
export const HAND_BUILT = new Set(["/blog", "/resources"]);

export type Stub = {
  url: string;
  title: string;
  sub: string;
  empty: string;
  crumb?: { label: string; href: string };
};
export const stubs: Stub[] = [
  {
    url: "/guides",
    title: "Guides",
    sub: "Long-form how-tos on turning website traffic into pipeline.",
    empty: "The first guides are coming soon.",
  },
  {
    url: "/reports",
    title: "Reports",
    sub: "Original research on website conversion and AI visibility.",
    empty: "Reports will be published once there is real data to share.",
  },
  {
    url: "/case-studies",
    title: "Case Studies",
    sub: "How teams use Thosjod in practice.",
    empty: "Customer stories are coming soon.",
  },
  {
    url: "/glossary",
    title: "Glossary",
    sub: "Plain-language definitions of GEO, AEO, deanonymization, and the rest of the vocabulary.",
    empty: "The glossary is coming soon.",
  },
  {
    url: "/changelog",
    title: "Changelog",
    sub: "Product updates and new capabilities, as they ship.",
    empty: "Release notes are coming soon.",
  },
  {
    url: "/docs",
    title: "Documentation",
    sub: "Technical and product documentation for Thosjod.",
    empty: "Documentation is coming soon.",
  },
  {
    url: "/webinars",
    title: "Webinars",
    sub: "Live and recorded sessions on website conversion and AI visibility.",
    empty: "Webinars are coming soon.",
  },
  {
    url: "/templates",
    title: "Templates",
    sub: "Ready-to-use playbooks, prompts, and checklists.",
    empty: "Templates are coming soon.",
  },
  {
    url: "/help",
    title: "Help Center",
    sub: "Answers to account, setup, and billing questions.",
    empty:
      "The help center is coming soon. For now, reach us through the contact page.",
  },
];
