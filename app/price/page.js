import React from 'react'
import PricePackage from './Price'
import { getPricing, buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Pricing Package - Future IT Touch Private Limited",
  description: "Transparent pricing packages for SEO and digital marketing services, with tiered plans covering keyword optimization, ranking reports, and dedicated account support.",
};

export async function generateMetadata() {
  return buildPageMetadata("price", DEFAULT_METADATA);
}

export default async function page() {
  const pricing = await getPricing();
  return (
    <div>
      <PricePackage categories={pricing} />
    </div>
  )
}
