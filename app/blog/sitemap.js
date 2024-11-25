import { getPosts } from '../lib/api';

export default async function sitemap() {
    const baseUrl = 'https://abohassan.vercel.app';
    const posts = await getPosts();
    return [
        ...posts.map((post) => ({
            url: `${baseUrl}/blog/${encodeURIComponent(post.slug.current)}`,
            lastModified: new Date(post._updatedAt),
            changeFrequency: 'daily',
            priority: 0.7,
        }))
    ];
}
