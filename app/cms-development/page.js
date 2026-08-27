import CMS from "./CMS";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "CMS Web Development Company | WordPress & Custom CMS Solutions",
  description:
    "CMS web development services on WordPress, Joomla, Drupal, and Magento — giving your team full control to manage content, publish pages, and update your site without developer dependency.",
  keywords: [
    "CMS development services", "WordPress web design company",
    "content management system development", "custom CMS solutions",
    "WordPress website development", "headless CMS development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("cms-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("cms-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <CMS cms={cms} />;
}
