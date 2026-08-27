import Quality from "./Quality";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from '../lib/loadServicePage'

const DEFAULT_METADATA = {
  title: "Software Quality Assurance & Testing Services",
  description:
    "Software QA and testing services covering manual and automated testing, regression testing, and performance testing — reliable, efficient quality assurance for web and mobile applications.",
  keywords: [
    "quality assurance services", "software testing company",
    "QA testing services", "automated testing services", "regression testing company",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("quality-assurance", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("quality-assurance");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <Quality cms={cms} />;
}
