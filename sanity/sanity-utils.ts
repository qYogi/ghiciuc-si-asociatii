import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { Category, Post } from "@/types/Post";
import clientConfig from "@/sanity/config/client-config";

export async function getPosts(options?: {
  categorySlug?: string;
  page?: number;
  pageSize?: number;
}): Promise<{ posts: Post[]; total: number }> {
  const { categorySlug, page = 1, pageSize = 10 } = options || {};
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  return createClient(clientConfig).fetch(
    groq`
      {
        "posts": *[_type == "post" ${
          categorySlug ? `&& $categorySlug in categories[]->slug.current` : ""
        }]
        | order(publishedAt desc) [$start..$end] {
          _id,
          title,
          "slug": slug.current,  // <-- Add this projection
          "date": publishedAt,
          "authorName": author->name,
          excerpt,
          categories[]->{_id, title, slug}
        },
        "total": count(*[_type == "post" ${
          categorySlug ? `&& $categorySlug in categories[]->slug.current` : ""
        }])
      }`,
    categorySlug ? { categorySlug, start, end } : { start, end },
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
