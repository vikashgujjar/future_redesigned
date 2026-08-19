import React from "react";
import BlogView from "./BlogView";
import { BLOG_POSTS } from "../blogPosts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export const metadata = {
  title: "Blog - Future IT Touch Private Limited",
  description:
    "In-depth articles from Future IT Touch covering web development frameworks, mobile technologies, and software engineering best practices for developers and businesses.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export default function Page({ params: { slug } }) {
  return (
    <div>
      <BlogView slug={slug} />
    </div>
  );
}
