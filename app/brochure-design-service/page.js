import React from 'react'
import Brochure from './Brochure'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Brochure Design Services | Print & Digital Brochure Design",
  description:
    "Professional brochure design services tailored to your brand and audience — print-ready and digital brochures that communicate your message clearly and convert prospects into customers.",
  keywords: [
    "brochure design services", "business brochure design company",
    "print brochure design", "digital brochure design", "marketing collateral design",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("brochure-design-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("brochure-design-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Brochure cms={cms}/>
    </div>
  )
}
