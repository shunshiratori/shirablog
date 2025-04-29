import type { ReactNode } from "react";
import { sortedByDatePageTree } from "@/lib/source";
import { BlogLayout } from "@/components/docs";
import { baseOptions, linkItems } from "../layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <BlogLayout {...baseOptions} tree={sortedByDatePageTree} links={linkItems}>
      {children}
    </BlogLayout>
  );
}
