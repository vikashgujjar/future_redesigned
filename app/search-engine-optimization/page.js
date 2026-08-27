import React from 'react'
import Seo from './Seo'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "SEO Services Company | Search Engine Optimization Experts",
  description: "Professional SEO services to improve search rankings, drive organic traffic, and grow your business — technical SEO, on-page optimization, link building, and content strategy.",
  keywords: [
    "SEO services company", "search engine optimization services",
    "SEO agency", "technical SEO services", "organic traffic growth",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("search-engine-optimization", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("search-engine-optimization");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Seo cms={cms}/>
    </div>
  )
}
