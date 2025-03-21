import type { PageTree } from "fumadocs-core/server";
import { cn } from "fumadocs-ui/components/api";
import { NavProvider } from "fumadocs-ui/components/layout/nav";
import {
  type SidebarOptions,
  checkPageTree,
  layoutVariables,
} from "fumadocs-ui/layouts/docs/shared";
import { type BaseLayoutProps, getLinks } from "fumadocs-ui/layouts/shared";
import {
  type PageStyles,
  StylesProvider,
  TreeContextProvider,
} from "fumadocs-ui/provider";
import type { HTMLAttributes, ReactNode } from "react";
import { Header } from "./header";

export interface DocsLayoutProps extends BaseLayoutProps {
  tree: PageTree.Root;

  sidebar?: Omit<Partial<SidebarOptions>, "component" | "enabled">;

  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export const BlogLayout = ({
  nav: { transparentMode, ...nav } = {},
  i18n = false,
  ...props
}: DocsLayoutProps): ReactNode => {
  checkPageTree(props.tree);
  const links = getLinks(props.links ?? [], props.githubUrl);

  const variables = cn(
    "[--fd-nav-height:3.5rem] [--fd-tocnav-height:36px] xl:[--fd-toc-width:268px] xl:[--fd-tocnav-height:0px]"
  );

  const pageStyles: PageStyles = {
    tocNav: cn("lg:px-4 xl:hidden"),
    toc: cn("max-xl:hidden"),
    page: cn("mt-[var(--fd-nav-height)]"),
    article: cn("mx-auto"),
  };

  return (
    <TreeContextProvider tree={props.tree}>
      <NavProvider transparentMode={transparentMode}>
        <main
          id="nd-docs-layout"
          {...props.containerProps}
          className={cn(
            "flex w-full flex-1 flex-row pe-[var(--fd-layout-offset)] pb-8",
            variables,
            props.containerProps?.className
          )}
          style={{
            ...layoutVariables,
            ...props.containerProps?.style,
          }}
        >
          {/* <Header finalLinks={links} nav={nav} /> */}
          <StylesProvider {...pageStyles}>{props.children}</StylesProvider>
        </main>
      </NavProvider>
    </TreeContextProvider>
  );
};
