import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { Category, Post } from "@/types/Post";
import clientConfig from "@/sanity/config/client-config";

export async function getPosts(categorySlug?: string): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "post" ${categorySlug ? `&& $categorySlug in categories[]->slug.current` : ""}]
      | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        "date": publishedAt,
        "authorName": author->name,
        excerpt,
        categories[]->{_id, title, slug}
      }`,
    categorySlug ? { categorySlug } : {},
  );
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "category"] | order(title asc) {
        _id,
        title,
        "slug": slug.current
      }
    `,
  );
}

// export async function getPosts(): Promise<Post[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "post"] | order(publishedAt desc) {
//     _id,
//     _createdAt,
//     title,
//     "slug": slug.current,
//     "date": publishedAt,
//     "authorName": author->name,
//     "image": image.asset->url,
//     excerpt,
//     url,
//     content,
//     categories[]->{_id, title}
//   }`,
//   );
// }

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "date": publishedAt,
    "authorName": author->name,
    "image": image.asset->url,
    excerpt,
    url,
    content
  }`,
    { slug },
  );
}
