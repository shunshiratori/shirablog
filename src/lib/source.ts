import { blog } from ".source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const source = loader({
  baseUrl: "/blog",
  source: createMDXSource(blog),
});
