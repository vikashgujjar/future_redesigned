import React from 'react'
import Shopify from './Shopify'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "WP, Shopify, Joomla - Future IT Touch Private Limited",
  description:
    "WordPress and Shopify development delivering SEO-friendly, conversion-focused websites and online stores, with WooCommerce integration and custom theme development.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("wordpress-and-shopify-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("wordpress-and-shopify-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Shopify cms={cms} />
    </div>
  )
}
