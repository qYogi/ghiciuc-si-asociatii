import { createClient} from "next-sanity";
import {groq} from "next-sanity";
import {Post} from "@/types/Post";
import clientConfig from "@/sanity/config/client-config";

export async function getPosts(): Promise<Post[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "post"] | order(publishedAt desc) {
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
  }`
    )
}

export async function getPost(slug:string): Promise<Post> {


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
    { slug }
    );

}
