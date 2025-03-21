import { Footer } from "@/components/footer";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { baseOptions, linkItems } from "./layout.config";
import { getLinks } from "fumadocs-ui/layouts/shared";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Header
            finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
            {...baseOptions}
          />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
