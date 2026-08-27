import { BLOG_POSTS } from "./blogPosts";
import { getBlogPosts } from "../lib/cms";

/* Normalizes CMS blog posts into the same shape blogPosts.js already uses
   (Blogs.js / BlogView.js were built against that shape), and merges in the
   local image import when the CMS post has none uploaded yet — the seeded
   admin content doesn't include images, only text. Falls back to the fully
   local BLOG_POSTS list if the CMS is unreachable at build time. */
export default async function loadPosts() {
  const cmsPosts = await getBlogPosts();
  if (!cmsPosts?.length) return BLOG_POSTS;

  const localBySlug = new Map(BLOG_POSTS.map((post) => [post.slug, post]));

  return cmsPosts.map((post) => {
    const local = localBySlug.get(post.slug);
    return {
      slug: post.slug,
      title: post.title,
      category: post.category,
      username: post.author,
      date: post.date,
      readTime: post.read_time,
      accent: post.accent,
      image: post.image || local?.image || "/Assets/blog-dg-1.webp",
      excerpt: post.excerpt,
      intro: post.intro,
      sections: post.sections,
      seo: post.seo,
    };
  });
}
