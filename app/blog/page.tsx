import { getPosts } from "@/sanity/sanity-utils";
import styles from "./blog.module.css";
import Link from "next/link";
import { Header } from "@/app/blog/components/header";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className={styles.blogBody}>
      <div className={`${styles.blogContainer} align-top flex flex-col p-8`}>
        <Header />
        <div className={`${styles.blogBodyCnt} flex flex-row justify-between`}>
          <div className="blog-posts pt-3 w-8/12 font-sans text-charcoal space-y-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className={`${styles.blogArticle} px-3 py-3 font-serif shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
              >
                <Link href={`/blog/posts/${post.slug}`}>
                  <h1 className="text-4xl mb-3 ">{post.title}</h1>
                </Link>
                <h6 className="text-xl text-lightCharcoal">{post.excerpt}</h6>
                <Link href={`/blog/posts/${post.slug}`}>
                  <p className="text-xl mb-3">Citește mai mult...</p>
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
            <h2 className="font-serif text-2xl text-charcoal">
              Contactează-ne
            </h2>
            <form className="flex flex-col gap-4 mb-4">
              <label htmlFor="name">Nume</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" rows={4} />
              <button className="text-white py-2 px-4">Trimite</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
