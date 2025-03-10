import { getPost } from "@/sanity/sanity-utils";
import {
  PortableText,
  PortableTextComponents,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import { TypedObject, PortableTextBlock } from "@portabletext/types";

import styles from "./post.module.css";
import { notFound } from "next/navigation";
import { Header } from "@/app/blog/_components/header";
import { Footer } from "@/app/_components/footer/footer";
import Image from "next/image";
import React from "react";

type Params = Promise<{ post: string }>;

type Props = {
  params: Params;
};

interface ImageValue {
  asset: { url: string };
  caption?: string;
}

interface LinkValue extends TypedObject {
  _type: string;
  href: string;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: (props: { value: ImageValue }) => {
      const { value } = props;
      return (
        <div className="my-8">
          <Image
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
      );
    },
  },
  block: {
    normal: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <p className="mb-6 leading-relaxed">{children}</p>;
    },
    h1: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <h2 className="text-4xl font-bold mb-6 mt-12">{children}</h2>;
    },
    h2: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <h3 className="text-3xl font-bold mb-5 mt-10">{children}</h3>;
    },
    h3: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <h4 className="text-2xl font-semibold mb-4 mt-8">{children}</h4>;
    },
    h4: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <h5 className="text-xl font-semibold mb-3 mt-6">{children}</h5>;
    },
    blockquote: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return (
        <blockquote className="border-l-4 border-primary pl-4 my-6 text-gray-600 italic">
          {children}
        </blockquote>
      );
    },
  },
  list: {
    bullet: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>;
    },
    number: (props: PortableTextComponentProps<PortableTextBlock>) => {
      const { children } = props;
      return <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>;
    },
  },
  marks: {
    strong: (props: { children?: React.ReactNode }) => {
      const { children } = props;
      return <strong className="font-bold">{children}</strong>;
    },
    em: (props: { children?: React.ReactNode }) => {
      const { children } = props;
      return <em className="italic">{children}</em>;
    },
    underline: (props: { children?: React.ReactNode }) => {
      const { children } = props;
      return <u className="underline">{children}</u>;
    },
    link: (props: PortableTextMarkComponentProps<LinkValue>) => {
      const { value, children } = props;
      if (!value) return <>{children}</>;
      return (
        <a
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function Post({ params }: Props) {
  // Await the promise to get the resolved params object
  const { post: slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

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
