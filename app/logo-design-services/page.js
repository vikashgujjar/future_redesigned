import React from 'react'
import Logo from './Logo'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Logo Design Services | Custom Brand Logo Design",
  description:
    "Custom logo design services that give your brand a unique, memorable identity — concept development, revisions, and full brand asset delivery for businesses of every size.",
  keywords: [
    "logo design services", "custom logo design company",
    "professional logo designers", "brand logo design", "logo design for startups",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("logo-design-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("logo-design-services");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Logo cms={cms}/>
    </div>
  )
}
