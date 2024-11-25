// src/app/blog/[slug]/PostPage.js
import Script from "next/script";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogSlider from "../../components/blog Slider";
import styles from "./styles.module.css";
import { getPostBySlug, getPosts } from "../../lib/api";

export default async function PostPage({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  // Fetch post and other posts
  const post = await getPostBySlug(decodedSlug);
  const posts = await getPosts();

  if (!post) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  const rawBodyText = post.body
    .map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");
  const excerpt = post.excerpt || rawBodyText.substring(0, 160);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: excerpt,
    author: {
      "@type": "Person",
      name: post.author?.name || "أبو حسن",
    },
    datePublished: post._createdAt,
    dateModified: post._updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://abohassan.vercel.app/blog/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: post.mainImage?.asset?.url || "/opengraph-image.jpg",
      width: 1200,
      height: 630,
    },
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="w-[95%] sm:w-[80%] relative mx-auto mt-[65px]">
        {/* Main Image */}
        <div className="p-2 sm:p-3 bg-green-100 border-[#36aa5f64] border-2 w-full h-[200px] sm:h-[600px] overflow-hidden rounded-3xl">
          {post.mainImage && (
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || "Blog Image"}
              width={800}
              height={500}
            />
          )}
        </div>
        {/* Content */}
        <div className="px-6 sm:px-20 py-10 sm:py-16 bg-green-100 border-[#36aa5f64] border-2 rounded-3xl mt-4 text-start text-base">
          <h1 className="text-start text-2xl sm:text-4xl font-black">{post.title}</h1>
          <h2 className="!text-sm text-center my-4 px-7 py-1 bg-custom-gradient w-fit rounded-full font-bold text-white">
            {new Date(post._updatedAt).toLocaleDateString("ar-SA", { dateStyle: "long" })}
          </h2>
          <div className="my-12">
            <PortableText value={post.body} />
            <div className="w-full flex flex-wrap justify-center items-start gap-2 my-16">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-1 bg-neutral-600 rounded-full font-bold text-white text-xs m-0"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
      <BlogSlider data={posts} title="قد يعجبك ايضا" />
    </>
  );
}
