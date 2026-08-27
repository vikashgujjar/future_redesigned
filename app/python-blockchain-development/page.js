import React from 'react'
import PythonBlockchain from './PythonBlockchain'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Python Django Flask Development  - Future IT Touch Private Limited",
  description: "Python-based blockchain and DApp development using Web3.py and Hyperledger Fabric for DeFi platforms, NFT marketplaces, and secure enterprise blockchain solutions.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("python-blockchain-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("python-blockchain-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <PythonBlockchain cms={cms} />
    </div>
  )
}
