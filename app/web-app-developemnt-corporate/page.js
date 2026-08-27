import Corporate from "./Corporate";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Corporate Website Design Company | Business Website Design Services",
  description:
    "Corporate website design services that build credibility for established businesses — professional, multi-page websites with custom branding, SEO-friendly structure, and enterprise-grade design.",
  keywords: [
    "corporate website design services", "business website design services",
    "custom web design company", "enterprise web development",
    "professional web designer", "web design experts",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("web-app-developemnt-corporate", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("web-app-developemnt-corporate");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Corporate cms={cms} />;
}
