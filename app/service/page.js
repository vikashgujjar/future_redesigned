import React from 'react'

import Services from './Services'
import { getServiceListingItems, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Service - Future IT Touch Private Limited",
  description: "Explore Future IT Touch's full range of services — app and web development, eCommerce, trending technologies, digital marketing, design, and cyber security.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return buildPageMetadata("service-index", DEFAULT_METADATA);
}

export default async function page() {
  const items = await getServiceListingItems();
  return (
    <div>
      <Services items={items} />
    </div>
  )
}
