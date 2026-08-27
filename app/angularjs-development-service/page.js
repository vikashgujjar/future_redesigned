import React from 'react'
import Angular from './Angular'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Angular - Future IT Touch Private Limited",
  description:
    "Custom AngularJS and MEAN stack development for dynamic, high-performance single-page applications, enterprise dashboards, and scalable web portals with secure API integration.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("angularjs-development-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("angularjs-development-service");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Angular cms={cms} />
    </div>
  )
}
