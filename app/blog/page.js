import React from 'react'
import Blog from './Blogs';


export const metadata = {
  title: "Blog - Future IT Touch Private Limited",
  description: "Read the Future IT Touch blog for practical insights on Node.js, Laravel, mobile app development, and other web technologies from our engineering team.",
  keywords: "IT, Technology, Solutions, Future IT Touch",
};


export default function page() {
  return (
    <div>
      <Blog/>
    </div>
  )
}
