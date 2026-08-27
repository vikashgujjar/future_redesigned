import React from 'react'
import Reactjs from './Reactjs'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Reactjs, Vuejs, Nodejs - Future IT Touch Private Limited",
  description:
    "Full-stack JavaScript development with React.js, Vue.js, and Node.js — building fast, scalable SPAs, real-time dashboards, and REST or GraphQL backends.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("reactjs-vuejs-nodejs-development-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("reactjs-vuejs-nodejs-development-services");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Reactjs cms={cms} />
    </div>
  )
}
