import React from 'react'
import Creative from './Creative'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Creative Agency Services | Branding & Design Studio",
  description:
    "Creative agency services covering branding, visual identity, and design strategy — we help businesses build a distinctive brand presence across every touchpoint.",
  keywords: [
    "creative agency services", "branding agency", "brand identity design",
    "creative design studio", "full-service branding company",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("creative-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("creative-services");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;

  return (
    <>
      <Creative cms={cms}/>

    </>
  )
}
