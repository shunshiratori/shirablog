import { LinkItemType } from "fumadocs-ui/layouts/links";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <p className="text-2xl font-bold">ShiraBlog</p>,
  },
  links: [
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/shunshiratori",
};

export const linkItems: LinkItemType[] = [
  {
    text: "Blog",
    url: "/blog",
    active: "nested-url",
  },
];
