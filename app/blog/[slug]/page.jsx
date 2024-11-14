// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '../../lib/api';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import BlogSlider from "../../components/blog Slider";
import { getPosts } from '../../lib/api';
import styles from './styles.module.css'



export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  const rawBodyText = post.body.map(block => block.children.map(child => child.text).join(" ")).join(" ");
  const simplifiedText = rawBodyText.replace(/<[^>]+>/g, "")
  const excerpt = simplifiedText.substring(0, 160);
  return {
    title: `${post.title} - ابو حســن`,
    description: post.excerpt || excerpt || "| ابو حسن لتوصيل الكلية التقنية و توصيل الكلية الرقمية",
    keywords: post.keywords?.join(", ") || "مدونة, توصيل, ابو حســن",
    openGraph: {
      title: post.title,
      description: post.excerpt || excerpt || "| ابو حسن لتوصيل الكلية التقنية و توصيل الكلية الرقمية",
      keywords: post.keywords?.join(", ") || "مدونة, توصيل, ابو حســن",
      url: `https://abohassan.vercel.app/blog/${slug}`,
      images: [
        {
          url: post.mainImage?.asset?.url || "/opengraph-image.jpg",
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage(props) {
  
  const params = await props.params;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);
  const posts = await getPosts();
  return (
    <>
              <article className='w-[95%] sm:w-[80%] relative mx-auto mt-[65px]'>
      <div className='p-5 bg-green-100 w-full h-[600px] overflow-hidden rounded-3xl'>
      {post.mainImage && (
        <Image className='w-full h-full object-cover  rounded-2xl text-neutral-600' src={post.mainImage.asset.url}  alt={post.mainImage.alt || 'Blog Image'} width={800} height={500} />
      )}
      </div>
      <div className='px-12 sm:px-24 py-16 bg-green-100 rounded-3xl mt-4 text-start text-base'>
      <h1 className='text-center text-2xl sm:text-3xl font-black'>{post.title}</h1>
      <h2 className='!text-sm text-center my-4 px-7 py-1 bg-custom-gradient w-fit mx-auto rounded-full font-bold text-white'>{new Date(post._updatedAt).toLocaleDateString('ar-SA', { dateStyle: 'long' })}</h2>
      <div className='my-12'>
      <div className={styles.body}>
      <PortableText value={post.body} />
      </div>
      <div className='w-full flex flex-wrap justify-center items-start flex-row gap-2 my-16'>
      {post.keywords.map((keyword) => (
           <h1 key={keyword} className='px-4 py-1 bg-neutral-600 rounded-full font-bold text-white !text-xs !m-0'>
             {keyword}
           </h1>
          ))}
      </div>
      </div>
      </div>
      
    </article>
    <BlogSlider data={posts} title='قد يعجبك ايضا'/>
       
</>
  );
}
