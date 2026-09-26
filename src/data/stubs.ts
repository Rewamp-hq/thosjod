// Routes rendered by [...slug].astro that are not content files, and content URLs with hand-built pages.
// Guides, Glossary, Docs, Help and Templates now have real content files in thosjod_content/content/resources/.
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
    url: "/changelog",
    title: "Changelog",
    sub: "Product updates and new capabilities, as they ship.",
    empty: "Release notes are coming soon.",
  },
  {
    url: "/webinars",
    title: "Webinars",
    sub: "Live and recorded sessions on website conversion and AI visibility.",
    empty: "Webinars are coming soon.",
  },
];
