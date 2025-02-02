import {getPosts} from "@/sanity/sanity-utils";



export default async function Home() {

  const props = await getPosts();

  return (
    <div>
        {props.map((post) => (
            <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            <p>Author: {post.authorName}</p>

            </div>
        ))}
    </div>
  );
}

