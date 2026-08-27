import React from 'react'
import Blog from './Blogs';
import loadPosts from './loadPosts';
import { buildPageMetadata } from '../lib/cms';

const DEFAULT_METADATA = {
  title: "Blog - Future IT Touch Private Limited",
  description: "Read the Future IT Touch blog for practical insights on Node.js, Laravel, mobile app development, and other web technologies from our engineering team.",
};

export async function generateMetadata() {
  return buildPageMetadata("blog-index", DEFAULT_METADATA);
}

export default async function page() {
  const posts = await loadPosts();
  return (
    <div>
      <Blog posts={posts} />
    </div>
  )
}
