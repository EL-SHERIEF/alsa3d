  // src/app/blog/page.jsx
import { getPosts } from '../lib/api';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/blog/${post.slug.current}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
