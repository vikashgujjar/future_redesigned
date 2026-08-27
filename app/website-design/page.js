import React from 'react'
import WebDesign from './WebDesign'
import { YEARS_EXPERIENCE_DISPLAY } from '../lib/companyStats'
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Custom Web Design Company | Responsive Website Design Services",
  description:
    `Professional web design company building custom, responsive, SEO-friendly websites for startups and enterprises worldwide. Affordable website design services with fast delivery and ${YEARS_EXPERIENCE_DISPLAY} years of experience.`,
  keywords: [
    "web design company", "website design services", "custom web design company",
    "responsive web design company", "affordable web design services",
    "business website design services", "website redesign services",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("website-design", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("website-design");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <WebDesign cms={cms} />
    </div>
  )
}
