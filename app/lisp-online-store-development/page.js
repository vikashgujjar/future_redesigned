import Lisp from "./Lisp";
import { getServicePageCms, mapTechPageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Lisp  - Future IT Touch Private Limited",
  description:
    "Custom Lisp-powered online store development including product catalogs, shopping carts, secure payment processing, and order automation for scalable eCommerce.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return loadServicePageSeo("lisp-online-store-development", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("lisp-online-store-development");
  const cms = cmsRaw ? mapTechPageProps(cmsRaw) : null;
  return (
    <div>
      <Lisp cms={cms} />
    </div>
  );
}
