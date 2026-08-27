import React from 'react'
import Python from './Python'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Python Django Flask Development - Future IT Touch Private Limited",
  description:
    "Scalable Python, Django, and Flask web development with clean MVC architecture, ORM-based database management, and secure REST APIs for data-driven applications.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("python-and-django-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("python-and-django-service");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Python cms={cms} />
    </div>
  )
}
