// lib/api.js
import { client } from '../../sanity/lib/client';
// lib/api.js
// lib/api.js
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
  
export async function getPosts() {
  const query = `*[_type == "post"]{
    ...,
      mainImage {
        asset->{
          url
        }
      },    
  }`;
  return await client.fetch(query);
}
