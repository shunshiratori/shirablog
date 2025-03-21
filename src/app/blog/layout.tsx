import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions, linkItems } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Header } from "@/components/header";
import { getLinks } from "fumadocs-ui/layouts/shared";
import { BlogLayout } from "@/components/docs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <DocsLayout tree={source.pageTree} {...baseOptions} tabMode="navbar">
    //   {children}
    // </DocsLayout>
    <BlogLayout
      tree={source.pageTree}
      sidebar={{ enabled: false }}
      nav={{
        enabled: false,
        // component: (
        //   <Header
        //     finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
        //     {...baseOptions}
        //   />
        // ),
      }}
    >
      {children}
    </BlogLayout>
  );
}
