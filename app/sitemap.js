import { getPosts } from './lib/api';

export default async function sitemap() {
    const baseUrl = 'https://abohassan.vercel.app';
    const posts = await getPosts();
    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug.current}`,
            lastModified: new Date(post._updatedAt),
            changeFrequency: 'daily',
            priority: 0.7,
        }))
    ];
}
