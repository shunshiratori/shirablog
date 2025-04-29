import { getSortedByDatePosts } from "@/lib/source";
import Link from "next/link";
import { postsPerPage } from "../../../layout.config";
import { notFound } from "next/navigation";
import { Pagination } from "@/components/pagination";

export const dynamicParams = false;

const totalPosts = getSortedByDatePosts().length;
const pageCount = Math.ceil(totalPosts / postsPerPage);

// export default function HomePage() {
const Page = async (props: { params: Promise<{ slug?: string[] }> }) => {
  // const posts = source.getPages();
  const params = await props.params;
  const pageIndex = params.slug ? Number.parseInt(params.slug[0], 10) - 1 : 0;
  if (pageIndex < 0 || pageIndex >= pageCount) notFound();

  const startIndex = pageIndex * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = getSortedByDatePosts().slice(startIndex, endIndex);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-5xl mb-3 font-bold">記事一覧</h2>
      <p className="text-center text-lg">全{totalPosts}記事</p>

      <div className="grid gap-4 my-10">
        {posts.map((post, id) => {
          const date = new Date(post.data.date).toLocaleDateString("ja-JP", {
            timeZone: "Asia/Tokyo",
          });
          return (
            <article
              key={id}
              className="rounded-lg border bg-fd-card text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80 w-full p-5"
            >
              <Link className="block p-4" href={`/blog/${post.slugs}`}>
                <p className="text-xl">{post.data.title}</p>
                <p className="text-base m-2">{post.data.description}</p>
                <p className="text-right">{date}</p>
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-6">
        <Pagination current={pageIndex + 1} end={pageCount} path="/blog" />
      </div>
    </div>
  );
};

export default Page;
