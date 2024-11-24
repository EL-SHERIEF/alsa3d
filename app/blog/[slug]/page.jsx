// src/app/blog/[slug]/page.jsx
import Script from "next/script";
import { getPostBySlug } from '../../lib/api';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import BlogSlider from "../../components/blog Slider";
import { getPosts } from '../../lib/api';
import styles from './styles.module.css';

// Metadata generation
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  const rawBodyText = post.body.map(block => block.children.map(child => child.text).join(" ")).join(" ");
  const simplifiedText = rawBodyText.replace(/<[^>]+>/g, "");
  const excerpt = simplifiedText.substring(0, 160); // Default meta description length
  const today = new Date().toISOString();
  const titleSimplified = post.title.substring(0, 48);

  return {
    title: `أبوحسن - ${titleSimplified}...`,
    description: excerpt,
    keywords: post.keywords?.join(", ") || [
      "نقل طالبات في الرياض", "توصيل طالبات", "الكلية الرقمية",
      "باصات كلية التقنية", "توصيل طالبات الكلية الرقمية", "توصيل الطالبات في الرياض",
      "نقل كلية البنات", "سائق كلية بنات", "توصيل موظفات الرياض",
      "سائق خاص للموظفات", "باصات كلية البنات", "توصيل الكلية الرقمية بالرياض"
    ],
    referrer: "origin-when-cross-origin",
    robots: "index, follow",
    canonical: `https://abohassan.vercel.app/blog/${slug}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || excerpt || "أبو حسن لتوصيل الكلية التقنية والكلية الرقمية",
      url: `https://abohassan.vercel.app/blog/${slug}`,
      siteName: "أبو حسن",
      images: [
        {
          url: post.mainImage?.asset?.url || "/opengraph-image.jpg",
          width: 1200, // Ideal dimensions for Open Graph images
          height: 630,
          alt: post.title || "أبو حسن",
        },
      ],
      type: "article",
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      site:"https://abohassan.vercel.app/",
      title: post.title,
      description: post.excerpt || excerpt || "أبو حسن لتوصيل الكلية التقنية والكلية الرقمية",
      images: [
        {
          url: post.mainImage?.asset?.url || "https://abohassan.vercel.app/opengraph-image.jpg",
          alt: post.title || "أبو حسن",
        },
      ],
    },
    article: {
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt,
      author: post.author?.name || "أبو حسن",
      tags: post.keywords || [],
    },
    alternates: {
      canonical: `https://abohassan.vercel.app/blog/${slug}`,
  }
  };
}

// Blog post page
export default async function PostPage(props) {
  const params = await props.params;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);
  const posts = await getPosts();

  // Generate excerpt for SEO
  const rawBodyText = post.body.map(block => block.children.map(child => child.text).join(" ")).join(" ");
  const simplifiedText = rawBodyText.replace(/<[^>]+>/g, ""); // Remove HTML tags
  const excerpt = post.excerpt || simplifiedText.substring(0, 160);

  // Structured data for FAQ and Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: post.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: rawBodyText,
        },
      },
    ],
  };

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
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <article className="w-[95%] sm:w-[80%] relative mx-auto mt-[65px]">
        <div className="p-2 sm:p-3 bg-green-100 border-[#36aa5f64] border-2 w-full h-[200px] sm:h-[600px] overflow-hidden rounded-3xl ">
          {post.mainImage && (
            <Image
              className="w-full h-full object-cover rounded-2xl text-neutral-600"
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || "Blog Image"}
              width={800}
              height={500}
            />
          )}
        </div>
        <div className="px-6 sm:px-20 py-10 sm:py-16 bg-green-100 border-[#36aa5f64] border-2 rounded-3xl mt-4 text-start text-base">
          <h1 className="text-start text-2xl sm:text-4xl font-black">{post.title}</h1>
          <h2 className="!text-sm text-center my-4 px-7 py-1 bg-custom-gradient w-fit rounded-full font-bold text-white">
            {new Date(post._updatedAt).toLocaleDateString("ar-SA", { dateStyle: "long" })}
          </h2>
          <div className="my-12">
            <div className={styles.body}>
              <PortableText value={post.body} />
            </div>
            <div className="w-full flex flex-wrap justify-center items-start flex-row gap-2 my-16">
              {post.keywords.map((keyword) => (
                <h1
                  key={keyword}
                  className="px-4 py-1 bg-neutral-600 rounded-full font-bold text-white !text-xs !m-0"
                >
                  {keyword}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </article>
      <BlogSlider data={posts} title="قد يعجبك ايضا" />
    </>
  );
}

