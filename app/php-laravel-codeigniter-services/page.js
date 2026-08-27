import React from "react";

import PHP from "./PHP";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "PHP-Laravel, Codeigniter  - Future IT Touch Private Limited",
  description:
    "Secure, scalable web application development using PHP, Laravel, and CodeIgniter — from custom business portals and eCommerce platforms to enterprise CMS solutions.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("php-laravel-codeigniter-services", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("php-laravel-codeigniter-services");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <PHP cms={cms} />
    </div>
  );
}
