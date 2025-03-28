import { getPosts } from "@/sanity/sanity-utils";
import styles from "./blog.module.css";
import Link from "next/link";
import { Header } from "@/app/blog/_components/header";
import { BlogContactForm } from "@/app/blog/_components/blogContactForm";
import Head from "next/head";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Await the promise to get the actual search parameters
  const { page } = await searchParams;
  const currentPage = Number(page || 1);
  const pageSize = 15;
  const { posts, total } = await getPosts({
    page: currentPage,
    pageSize,
  });
  const totalPages = Math.ceil(total / pageSize);
  return (
    <>
      <Head>
        <title>Blog Avocat Iași - Sfaturi și Noutăți Juridice</title>
        <meta
          name="description"
          content="Citește articole juridice scrise de avocați din Iași. Ghiduri, sfaturi și actualizări legislative pentru drept civil, penal, comercial și de familie."
        />
        <meta
          name="keywords"
          content="blog avocat Iași, noutăți juridice, sfaturi avocat Iași, drept penal Iași, drept civil Iași, avocat divorț Iași, avocat contracte Iași"
        />
        <meta
          property="og:title"
          content="Blog Avocat Iași - Informații Juridice Utile"
        />
        <meta
          property="og:description"
          content="Află cele mai recente informații din domeniul juridic, explicate de avocați profesioniști din Iași."
        />
        <meta property="og:url" content="https://www.exemplu.ro/blog" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.blogBody}>
        <div
          className={`${styles.blogContainer}  flex flex-col p-4 md:p-8 bg-gray-50 w-full md:w-4/5 shadow-lg`}
        >
          <Header />
          <div
            className={`${styles.blogBodyCnt} flex flex-col md:flex-row justify-between gap-8`}
          >
            {/* Blog Posts Section */}
            <div className="blog-posts pt-3 w-full md:w-8/12 md:mt-0 font-sans text-charcoal space-y-8">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className={`${styles.blogArticle} px-2 py-3 md:px-3 font-serif shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
                >
                  <Link href={`/blog/posts/${post.slug}`}>
                    <h1 className="text-3xl md:text-4xl mb-3">{post.title}</h1>
                  </Link>
                  <h6 className="text-lg md:text-xl text-lightCharcoal">
                    {post.excerpt}
                  </h6>
                  <Link href={`/blog/posts/${post.slug}`}>
                    <p className="text-lg md:text-xl mb-3">
                      Citește mai mult...
                    </p>
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

              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <Link
                      key={pageNumber}
                      href={`/blog?page=${pageNumber}`}
                      className={`px-4 py-2 rounded ${
                        currentPage === pageNumber
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form w-full md:w-3/12 md:sticky md:top-8 md:self-start">
              <BlogContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
