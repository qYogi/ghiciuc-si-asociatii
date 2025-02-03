import { getPosts } from "@/sanity/sanity-utils";
import "./index.css";
import Logo from "@/app/svgs/Logo";
import {
  InstagramLogo,
  FacebookLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container align-top flex flex-col p-8">
      <header className="mb-8 h-44">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-16 w-auto" />{" "}
            {/* Adăugat className pentru dimensiune */}
            <div>
              <h1 className="font-serif text-2xl font-semibold ">
                Ghiciuc & Asociații
              </h1>
              <p className="font-serif text-sm ">
                Societate civilă profesională de avocați
              </p>
            </div>
          </div>
          <div className="h-full">
            <nav className="flex gap-6 font-sans ">
              <a href="/" className="hover:text-charcoal">
                {" "}
                <InstagramLogo />{" "}
              </a>
              <a href="#" className="hover:text-charcoal">
                {" "}
                <TikTokLogo />{" "}
              </a>
              <a href="#" className="hover:text-charcoal">
                {" "}
                <FacebookLogo />{" "}
              </a>
              <a href="#" className="hover:text-charcoal">
                {" "}
                <WhatsAppLogo />{" "}
              </a>
            </nav>
          </div>
        </div>

        <hr className="my-2 border-t-2 " />
      </header>
      <div className="body-cnt flex flex-row justify-between">
        <div className="blog-posts pt-3 w-8/12 font-sans text-charcoal space-y-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="px-3 py-3 font-serif shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Link href={`/blog/posts/${post.slug}`}>
                <h1 className="text-4xl mb-3 ">{post.title}</h1>
              </Link>
              <h6 className="text-xl text-lightCharcoal">{post.excerpt}</h6>
              <Link href={`/blog/posts/${post.slug}`}>
                <p className=" text-xl mb-3">Citește mai mult...</p>
              </Link>

              <div className="article-legacy mb-2 text-sm text-charcoal">
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
            </article>
          ))}
        </div>
        <div className="contact-form w-3/12">
          <h2 className="font-serif text-2xl text-charcoal">Contactează-ne</h2>
          <form className="flex flex-col gap-4">
            <label htmlFor="name">Nume</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Mesaj</label>
            <textarea id="message" name="message" rows={4} />
            <button className=" text-white py-2 px-4">Trimite</button>
          </form>
        </div>
      </div>
    </div>
  );
}
