import {PortableTextBlock} from "next-sanity";


export type Post = {
    _id: string;
    date:string;
    title: string;
    excerpt: string;
    authorName: string;
    slug: string;
    content: PortableTextBlock[];
    url: string;
    image: string;
}