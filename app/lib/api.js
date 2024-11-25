import { client } from '../../sanity/lib/client';
// /lib/api.js
// Fetch a single post by its slug
export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    mainImage {
      asset->{
        url
      }
    }
  }`;
  return await client.fetch(query, { slug });
}

// Fetch all posts
export async function getPosts() {
  const query = `*[_type == "post"]{
    ...,
    mainImage {
      asset->{
        url
      }
    }
  }`;
  return await client.fetch(query);
}

// Real-time updates for posts using listen
export function listenToPosts(callback) {
  const query = `*[_type == "post"]{
    ...,
    mainImage {
      asset->{
        url
      }
    }
  }`;

  // Use Sanity's client.listen to subscribe to updates
  const subscription = client.listen(query).subscribe((update) => {
    console.log('Data changed:', update);
    getPosts().then((data) => callback(data)); // Refresh data after any changes
  });

  // Return the unsubscribe function to clean up when no longer needed
  return () => subscription.unsubscribe();
}
