import React from 'react'
import Social from './Social'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description: "Social media marketing services that build engaged audiences and measurable growth across Instagram, Facebook, LinkedIn, and more — content strategy, community management, and paid campaigns.",
  keywords: [
    "social media marketing services", "social media management company",
    "Instagram marketing services", "social media advertising",
    "brand growth on social media",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("social-media-marketing-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("social-media-marketing-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Social cms={cms} />
    </div>
  )
}
