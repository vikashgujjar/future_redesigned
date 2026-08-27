import Business from "./Business";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Small Business Website Design | Affordable Web Design Services",
  description:
    "Affordable small business website design services — mobile-responsive, SEO-ready websites with SSL security and optional eCommerce, custom-built and launched fast for startups and growing businesses.",
  keywords: [
    "small business web design", "affordable web design services",
    "website design for startups", "custom website designers",
    "small business website design services", "SEO friendly web design",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("business-developement", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("business-developement");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Business cms={cms} />;
}
