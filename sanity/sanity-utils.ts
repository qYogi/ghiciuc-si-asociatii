import { createClient} from "next-sanity";
import {groq} from "next-sanity";

export async function getPosts() {

    const client = createClient({
        projectId: 'ajuxh6n2',
        dataset: 'production',
        apiVersion: '2025-02-02',
    });

    return client.fetch(
        groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "date": publishedAt,
    "authorName": author->name,
    "featuredImage": featuredImage{
      "url": asset->url,
      "alt": alt
    },
    excerpt,
    "categories": categories[]->title,
    isFeatured
  }`
    )
}

