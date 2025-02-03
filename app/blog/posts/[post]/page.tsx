import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Logo from "@/app/svgs/Logo";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import "./index.css";
import { notFound } from "next/navigation";

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
    <div className="container font-serif align-top flex flex-col p-8">
      <header className="mb-8 h-44">
        <div className="flex h-full items-center justify-between">
          <div className="flex  items-center gap-4">
            <Logo className="h-16 w-auto" />{" "}
            {/* Adăugat className pentru dimensiune */}
            <div>
              <h1 className="font-serif text-2xl font-semibold text-primary-navyblue">
                Ghiciuc & Asociații
              </h1>
              <p className=" text-sm text-primary-navyblue">
                Societate civilă profesională de avocați
              </p>
            </div>
          </div>

          <nav className="flex h-full gap-6 font-sans ">
            <a href="/" className="hover:text-primary-charcoal">
              {" "}
              <InstagramLogo />{" "}
            </a>
            <a href="#" className="hover:text-primary-charcoal">
              {" "}
              <TikTokLogo />{" "}
            </a>
            <a href="#" className="hover:text-primary-charcoal">
              {" "}
              <FacebookLogo />{" "}
            </a>
            <a href="#" className="hover:text-primary-charcoal">
              {" "}
              <WhatsAppLogo />{" "}
            </a>
          </nav>
        </div>

        <hr className="my-2 border-t-2 " />
      </header>
      <div>
        <h1 className="text-4xl mb-4">{post.title}</h1>
        <div className="date-auth text-lg mb-4">
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
        <div className="content text-xl text-justify">
          <PortableText value={post.content} />
        </div>
      </div>
    </div>
  );
}
