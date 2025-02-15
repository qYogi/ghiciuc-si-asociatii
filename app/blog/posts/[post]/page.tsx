import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import styles from "./post.module.css"; // <-- Import CSS Module
import { notFound } from "next/navigation";
import { Header } from "@/app/blog/components/header";

type Props = {
  params: {
    post: string;
  };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.postBody}>
      <div
        className={`${styles.postContainer} font-serif align-top flex flex-col p-8`}
      >
        <Header />
        <div>
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <div className={`${styles.dateAuth} text-lg mb-4`}>
            {post.date && (
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("ro-RO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            <span className="mx-2">•</span>
            <span>{post.authorName}</span>
          </div>
          <div className={`${styles.content} text-xl text-justify`}>
            <PortableText value={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
