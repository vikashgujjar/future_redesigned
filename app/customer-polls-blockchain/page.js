import React from 'react'
import Customer from './Customer'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Customer Polls - Future IT Touch Private Limited",
  description: "Blockchain-based customer polling and voting systems delivering tamper-proof, transparent results for enterprise surveys, elections, and feedback platforms.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("customer-polls-blockchain", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("customer-polls-blockchain");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Customer cms={cms}/>
    </div>
  )
}
