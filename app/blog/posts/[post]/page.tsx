import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import styles from "./post.module.css"; // <-- Import CSS Module
import { notFound } from "next/navigation";
import { Header } from "@/app/blog/_components/header";
import { Footer } from "@/app/_components/footer/footer";

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

  const portableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <img
            src={value.asset.url}
            alt={value.caption || " "}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {value.caption && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              {value.caption}
            </p>
          )}
        </div>
      ),
    },
    block: {
      normal: ({ children }: any) => (
        <p className="mb-6 leading-relaxed">{children}</p>
      ),
      h1: ({ children }: any) => (
        <h2 className="text-4xl font-bold mb-6 mt-12">{children}</h2>
      ),
      h2: ({ children }: any) => (
        <h3 className="text-3xl font-bold mb-5 mt-10">{children}</h3>
      ),
      h3: ({ children }: any) => (
        <h4 className="text-2xl font-semibold mb-4 mt-8">{children}</h4>
      ),
      h4: ({ children }: any) => (
        <h5 className="text-xl font-semibold mb-3 mt-6">{children}</h5>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary pl-4 my-6 text-gray-600 italic">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }: any) => <em className="italic">{children}</em>,
      underline: ({ children }: any) => <u className="underline">{children}</u>,
      link: ({ value, children }: any) => (
        <a
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <div className={`${styles.postBody} md:pr-64 `}>
        <div
          className={`${styles.postContainer} bg-tertiary font-serif align-top flex flex-col p-8`}
        >
          <Header />
          <div className={`md:px-10`}>
            <h1 className="text-4xl md:text-6xl font-[1000] text-secondary mb-4">
              {post.title}
            </h1>
            <div className={`${styles.dateAuth} text-lg text-gray-500 mb-4`}>
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
            <div
              className={`${styles.content} p-5 text-secondary text-lg md:text-xl text-justify  max-w-5xl leading-relaxed mx-auto`}
            >
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};
