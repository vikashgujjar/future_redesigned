import IOS from "./IOS.js";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "iOS App Development Company | iPhone & iPad App Development",
  description:
    "iOS app development services for iPhone, iPad, Apple Watch, and Apple TV — built with Swift for performance, security, and a seamless Apple ecosystem experience.",
  keywords: [
    "iOS app development company", "iPhone app development company",
    "custom iOS app development", "hire iOS developers", "Swift app development",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("ios-application-development", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("ios-application-development");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <IOS cms={cms} />;
}
