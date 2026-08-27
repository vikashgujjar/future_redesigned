import React from 'react'
import Solidity from './Solidity'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Solidity Blockchain Development - Future IT Touch Private Limited",
  description: "Solidity smart contract and DApp development on Ethereum and EVM-compatible chains, covering DeFi protocols, NFT marketplaces, and thorough security auditing.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("solidity-blockchain-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("solidity-blockchain-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Solidity cms={cms} />
    </div>
  )
}
