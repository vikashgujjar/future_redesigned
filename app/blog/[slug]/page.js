import React from "react";
import BlogView from "./BlogView";
import loadPosts from "../loadPosts";

export async function generateStaticParams() {
  const posts = await loadPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await loadPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog - Future IT Touch Private Limited",
      description:
        "In-depth articles from Future IT Touch covering web development frameworks, mobile technologies, and software engineering best practices for developers and businesses.",
    };
  }

  const title = post.seo?.title || `${post.title} - Future IT Touch Blog`;
  const description = post.seo?.description || post.excerpt;

  return {
    title,
    description,
    // Individual posts have no per-post robots/publish-status field beyond
    // is_published (which already keeps a draft out of generateStaticParams
    // entirely) — every generated post page is indexable.
    robots: { index: true, follow: true },
    openGraph: { title, description, ...(post.image ? { images: [post.image] } : {}) },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const posts = await loadPosts();
  return (
    <div>
      <BlogView slug={slug} posts={posts} />
    </div>
  );
}
