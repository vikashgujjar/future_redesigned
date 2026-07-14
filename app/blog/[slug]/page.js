const BlogContent = [
  {
    slug: "everything-you-need-to-know-about-nodejs",
  },
  {
    slug: "exploring-the-key-features-of-laravel-7-framework",
  },
  {
    slug: "best-technology-for-mobile-application-development",
  },
];

export function generateStaticParams() {
  return BlogContent.map((item) => ({ slug: item.slug }));
}
import React from "react";
import BlogView from "./BlogView";

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
