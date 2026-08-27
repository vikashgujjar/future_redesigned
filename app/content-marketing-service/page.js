import Contentt from "./Content";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Content Marketing Services | Content Strategy & Creation",
  description: "Content marketing services that build authority and drive organic traffic — blog content, SEO copywriting, content strategy, and distribution built around your audience's search intent.",
  keywords: [
    "content marketing services", "content strategy agency",
    "SEO content writing", "blog content services", "content marketing company",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("content-marketing-service", DEFAULT_METADATA);
}

export default async function page() {
  const cmsRaw = await getServicePageCms("content-marketing-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return (
    <div>
      <Contentt cms={cms}/>
    </div>
  )
}
