import React from 'react'
import WhyusChild from './WhyusChild'
import { getWhyChooseContent, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Why Choose Us - Future IT Touch Private Limited",
  description:
    "See what sets Future IT Touch apart — an experienced team, transparent process, and proven delivery across web, mobile, marketing, and cyber security projects.",
};

export async function generateMetadata() {
  return buildPageMetadata("why-us", DEFAULT_METADATA, { alternates: { canonical: "/why-us" } });
}

export default async function page() {
  const whyChoose = await getWhyChooseContent();
  return (
    <div>
      <WhyusChild whyChoose={whyChoose} />
    </div>
  )
}
