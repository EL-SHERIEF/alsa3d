// src/app/blog/[slug]/page.js
import PostPage from "./PostPage";
import { getPostBySlug } from "../../lib/api";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const rawBodyText = post.body
    .map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");
  const excerpt = post.excerpt || rawBodyText.substring(0, 160);

  return {
    title: `أبوحسن - ${post.title.substring(0, 48)}...`,
    description: excerpt,
    keywords: post.keywords?.join(", ") || "default,keywords",
    openGraph: {
      title: post.title,
      description: excerpt,
      url: `https://abohassan.vercel.app/blog/${slug}`,
      images: [
        {
          url: post.mainImage?.asset?.url || "/opengraph-image.jpg",
          alt: post.title,
        },
      ],
    },
  };
}

export default async function Page(props) {
  return <PostPage {...props} />;
}
