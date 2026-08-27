import React from 'react'
import Asp from './Asp'
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "ASP.NET Development - Future IT Touch Private Limited",
  description:
    "Enterprise-grade ASP.NET, .NET Core, and MVC web application development using C# and Entity Framework, built for scalability, security, and seamless Azure or AWS deployment.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("asp-dot-net-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("asp-dot-net-service");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Asp cms={cms}/>
    </div>
  )
}
