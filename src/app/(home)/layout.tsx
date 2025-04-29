import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      nav={{
        enabled: false,
      }}
    >
      <div className="my-16 container mx-auto max-w-6xl">{children}</div>
    </HomeLayout>
  );
}
