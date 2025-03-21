import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/app/layout.config";
import { Header } from "@/components/header";
import { getLinks } from "fumadocs-ui/layouts/shared";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      nav={{
        enabled: false,
        // component:
        // <Header
        //   finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
        //   {...baseOptions}
        // />
      }}
    >
      <div className="my-16 container mx-auto max-w-6xl">{children}</div>
    </HomeLayout>
  );
}
