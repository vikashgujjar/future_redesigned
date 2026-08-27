import React from 'react'
import Local from './Local'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Local SEO Services | Boost Local Search Visibility",
  description: "Local SEO services that help businesses rank in local search results and Google Maps — Google Business Profile optimization, local citations, and location-based keyword targeting.",
  keywords: [
    "local SEO services", "local search engine optimization",
    "Google Business Profile optimization", "local search visibility", "local SEO agency",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("local-search-engine-optimization", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("local-search-engine-optimization");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Local cms={cms}/>
    </div>
  )
}
