import React from 'react'
import Java from './Java'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Java - Future IT Touch Private Limited",
  description: "Enterprise Java and Spring Boot application development featuring microservices architecture, secure REST APIs, and cloud deployment for scalable business systems.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("java-application-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("java-application-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Java cms={cms} />
    </div>
  )
}
