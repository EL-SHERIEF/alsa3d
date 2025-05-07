import Script from "next/script";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogSlider from "../../components/blog Slider";
import styles from "./styles.module.css";
import { getPostBySlug, getPosts } from "../../lib/api";
import { notFound } from "next/navigation";

// Generate metadata for SEO
export async function generateMetadata({ params: { slug } }) {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const post = await getPostBySlug(decodedSlug);

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }

    const rawBodyText = post.body
      .map((block) => block.children.map((child) => child.text).join(" "))
      .join(" ");
    const excerpt = post.excerpt || rawBodyText.substring(0, 160);

    return {
      title: `النمور المساية- ${post.title.substring(0, 48)}...`,
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
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'There was an error loading this post.'
    };
  }
}

// Main blog post page component
export default async function Page({ params: { slug } }) {
  try {
    const decodedSlug = decodeURIComponent(slug);

    // Fetch post and related posts
    const [post, posts] = await Promise.all([
      getPostBySlug(decodedSlug),
      getPosts()
    ]);

    if (!post) {
      notFound();
    }

    // Generate excerpt for SEO and JSON-LD
    const rawBodyText = post.body
      .map((block) => block.children.map((child) => child.text).join(" "))
      .join(" ");
    const excerpt = post.excerpt || rawBodyText.substring(0, 160);

    // Prepare JSON-LD structured data for SEO
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: excerpt,
      author: {
        "@type": "Person",
        name: post.author?.name || "النمور الماسية",
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
        {/* Structured data for SEO */}
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        
        {/* Article content */}
        <article className="w-[95%] sm:w-[80%] relative mx-auto mt-[65px]">
          {/* Main Image */}
          <div className="p-2 sm:p-3 bg-blue-100 border-[#006886] border-2 w-full h-[200px] sm:h-[600px] overflow-hidden rounded-3xl">
            {post.mainImage && (
              <Image
                className="w-full h-full object-cover rounded-2xl"
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || "Blog Image"}
                width={800}
                height={500}
                priority
              />
            )}
          </div>
          
          {/* Post Content */}
          <div className="px-6 sm:px-20 py-10 sm:py-16 bg-blue-100 border-[#006886] border-2 rounded-3xl mt-4 text-start text-base">
            <h1 className="text-start text-2xl sm:text-4xl font-black">{post.title}</h1>
            <h2 className="!text-sm text-center my-4 px-7 py-1 bg-custom-gradient w-fit rounded-full font-bold text-white">
              {new Date(post._updatedAt).toLocaleDateString("ar-SA", { dateStyle: "long" })}
            </h2>
            
            <div className="my-12">
              {/* Post body content */}
              <div className={styles.body}>
                <PortableText value={post.body} />
              </div>
              
              {/* Keywords/tags */}
              <div className="w-full flex flex-wrap justify-center items-start gap-2 my-16">
                {post.keywords?.map((keyword) => (
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
        
        {/* Related posts section */}
        <BlogSlider data={posts} title="قد يعجبك ايضا" />
      </>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}