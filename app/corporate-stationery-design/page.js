import React from 'react'
import Identity from './Identity'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Corporate Identity Design Company | Business Stationery Design",
  description:
    "Corporate stationery design services including business cards, letterheads, envelopes, and presentation folders that give your brand a consistent, professional identity.",
  keywords: [
    "corporate identity design", "business card design services",
    "corporate stationery design", "brand identity design company",
    "letterhead design services",
  ],
  alternates: {
    canonical: "/corporate-stationery-design",
  },
};

export async function generateMetadata() {
  return loadServicePageSeo("corporate-stationery-design", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("corporate-stationery-design");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Identity cms={cms}/>
    </div>
  )
}
