import { getSortedByDatePosts } from "@/lib/source";
import Link from "next/link";

const Page = () => {
  // const posts = source.getPages();
  const posts = getSortedByDatePosts().slice(0, 3);
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-5xl mb-3 font-bold">しらブログ</h2>
      <p className="text-center text-lg">最新の記事</p>

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
                <p className="text-base mt-2">{post.data.description}</p>
                <p className="text-right">{date}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
