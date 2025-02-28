import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import styles from "./post.module.css"; // <-- Import CSS Module
import { notFound } from "next/navigation";
import { Header } from "@/app/blog/_components/header";

type Params = Promise<{ post: string }>;

type Props = {
  params: Params;
};

export default async function Post({ params }: Props) {
  // Await the promise to get the resolved params object
  const { post: slug } = await params;
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

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};
