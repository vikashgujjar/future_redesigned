import React from 'react'
import PPC from './PPC'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'


const DEFAULT_METADATA = {
  title: "PPC Management Services | Google Ads & Paid Search Experts",
  description: "PPC management services delivering targeted ad campaigns and data-driven bidding strategies across Google Ads and social platforms — built to maximize ROI, not just clicks.",
  keywords: [
    "PPC management services", "Google Ads management company",
    "paid search advertising", "PPC agency", "pay per click marketing services",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("pay-per-click-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("pay-per-click-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <PPC cms={cms}/>
    </div>
  )
}
