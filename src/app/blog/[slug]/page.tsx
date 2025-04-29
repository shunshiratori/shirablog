// import { source } from "@/lib/source";
// import {
//   DocsPage,
//   DocsBody,
//   DocsDescription,
//   DocsTitle,
// } from "fumadocs-ui/page";
// import { notFound } from "next/navigation";
// import defaultMdxComponents from "fumadocs-ui/mdx";

import { getPost, getPosts } from "@/lib/source";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import {
  ImageZoom,
  type ImageZoomProps,
} from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = getPost([params.slug]);

  if (post === undefined) {
    notFound();
  }

  const date = new Date(post.data.date).toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  const lastModified = post.data.lastModified;
  const lastUpdate = lastModified ? new Date(lastModified) : undefined;
  // const tags = post.data.tags ?? [];

  const path = `content/${post.file.path}`;

  const MDX = post.data.body;

  return (
    <DocsPage
      toc={post.data.toc}
      full={post.data.full}
      lastUpdate={lastUpdate}
      editOnGithub={{
        repo: "blog",
        owner: "RUNFUNRUN",
        sha: "main",
        path,
      }}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
    >
      <p className="text-right">{date}</p>
      <DocsTitle>{post.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {post.data.description}
      </DocsDescription>
      {/* <div className="flex gap-2 flex-wrap mb-8">
        {tags.map((tag) => (
          <TagCard name={tag} key={tag} />
        ))}
      </div> */}
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            img: (props: ImageZoomProps) => <ImageZoom {...props} />,
            pre: ({ ...props }) => (
              <CodeBlock
                {...props}
                viewportProps={{
                  className: "max-h-fit",
                }}
              >
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
          }}
        />
      </DocsBody>
      {/* <PostJsonLd post={post} /> */}
    </DocsPage>
  );
};

export default Page;

export const generateStaticParams = () => {
  return getPosts().map((page) => ({
    slug: page.slugs[0],
  }));
};

// export default async function Page(props: {
//   params: Promise<{ slug?: string[] }>;
// }) {
//   const params = await props.params;
//   const page = source.getPage(params.slug);
//   if (!page) notFound();

//   const MDX = page.data.body;

//   return (
//     <DocsPage toc={page.data.toc} full={page.data.full}>
//       <DocsTitle>{page.data.title}</DocsTitle>
//       <DocsDescription>{page.data.description}</DocsDescription>
//       <DocsBody>
//         <MDX components={{ ...defaultMdxComponents }} />
//       </DocsBody>
//     </DocsPage>
//   );
// }

// export async function generateStaticParams() {
//   return source.generateParams();
// }

// export async function generateMetadata(props: {
//   params: Promise<{ slug?: string[] }>;
// }) {
//   const params = await props.params;
//   const page = source.getPage(params.slug);
//   if (!page) notFound();

//   return {
//     title: page.data.title,
//     description: page.data.description,
//   };
// }
