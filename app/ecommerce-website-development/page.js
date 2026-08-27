import Ecommerce from "./Ecommerce";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "eCommerce Website Development Company | Shopify & WordPress Stores",
  description:
    "eCommerce web design company building secure, conversion-optimized online stores on Shopify, WordPress, and custom platforms — with payment gateways, inventory systems, and scalable checkout flows.",
  keywords: [
    "ecommerce web design company", "ecommerce website development",
    "Shopify website design services", "WordPress ecommerce development",
    "online store development company", "custom ecommerce website development company",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("ecommerce-website-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("ecommerce-website-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Ecommerce cms={cms} />;
}
