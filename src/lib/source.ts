import { blog } from ".source";
import { PageTree } from "fumadocs-core/server";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const source = loader({
  baseUrl: "/blog",
  source: createMDXSource(blog),
});

export const {
  getPage: getPost,
  getPages: getPosts,
  pageTree,
} = loader({
  baseUrl: "/blog",
  source: createMDXSource(blog),
});

const getDate = (url: string) => {
  const slugs = url.replace(/^\/posts\//, "").split("/");
  const post = getPost(slugs);
  if (post === undefined) return 0;
  return post.data.date.getTime();
};

export const sortedByDatePageTree: PageTree.Root = {
  name: "Posts",
  children: pageTree.children
    .filter((node) => node.type === "page")
    .toSorted((a, b) => getDate(a.url) - getDate(b.url)),
};

const posts = getPosts();

export const getSortedByDatePosts = () =>
  posts.toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());
