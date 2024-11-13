// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '../../lib/api';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import BlogSlider from "../../components/blog Slider";
import { getPosts } from '../../lib/api';
import styles from './styles.module.css'
export default async function PostPage(props) {
  const params = await props.params;
  const { slug } = params;

  // Decode the slug in case it's URL-encoded
  const decodedSlug = decodeURIComponent(slug);

  // Fetch the post data by decoded slug
  const post = await getPostBySlug(decodedSlug);

  // Handle the case where the post might not exist
  if (!post) return <p>Post not found</p>;
  const posts = await getPosts();
  return (
        <div className={styles.body}>
              <article className='w-[95%] sm:w-[80%] relative mx-auto mt-[65px]'>
      <div className='p-5 bg-green-100 w-full h-[600px] overflow-hidden rounded-3xl'>
      {post.mainImage && (
        <Image className='w-full h-full object-cover  rounded-2xl text-neutral-600' src={post.mainImage.asset.url}  alt={post.mainImage.alt || 'Blog Image'} width={800} height={500} />
      )}
      </div>
      <div className='px-12 sm:px-24 py-16 bg-green-100 rounded-3xl mt-4 text-start text-base'>
      <h1 className='text-center text-2xl sm:text-3xl font-black'>{post.title}</h1>
      <h2 className='text-center my-4 px-7 py-1 bg-custom-gradient w-fit mx-auto rounded-full font-bold text-white'>{new Date(post._updatedAt).toLocaleDateString('ar-SA', { dateStyle: 'long' })}</h2>
      <div className='my-12'>
      <PortableText value={post.body} />
      </div>
      </div>
    </article>
    <BlogSlider data={posts} title='قد يعجبك ايضا'/>
        </div>

  );
}
