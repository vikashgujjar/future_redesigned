import WebApplication from "./WebApplication";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Web Application Development Company | Custom Web App Development",
  description:
    "Custom web application development services using React, Angular, Vue, and Node.js. We build scalable, secure web apps with dashboards, user portals, and API integrations for businesses worldwide.",
  keywords: [
    "web application development services", "custom web development services",
    "full stack web development company", "SaaS development company",
    "API integration services", "enterprise web development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("web-app-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("web-app-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <WebApplication cms={cms} />;
}
