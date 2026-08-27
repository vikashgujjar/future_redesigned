import React from 'react'
import Branding from './Branding'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Design & Branding - Future IT Touch Private Limited",
  description:
    "Creative graphic design and branding services including logo design, brochures, social media graphics, business stationery, packaging, and UI/UX web graphics.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("graphic-design-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("graphic-design-services");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Branding cms={cms}/>
    </div>
  )
}
