import IncidentResponse from "./IncidentResponse";
import { getServicePageCms, mapServicePageProps, loadServicePageSeo } from "../lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Incident Response Services | Future IT Touch",
  description:
    "24/7 incident response, digital forensics, ransomware recovery, and post-incident hardening services — rapid containment and root cause elimination for Indian businesses.",
  keywords: [
    "incident response services", "digital forensics services",
    "ransomware recovery services", "cyber incident response company",
    "security breach response",
  ],
};

export async function generateMetadata() {
  return loadServicePageSeo("incident-response-service", DEFAULT_METADATA);
}

export default async function Page() {
  const cmsRaw = await getServicePageCms("incident-response-service");
  const cms = cmsRaw ? mapServicePageProps(cmsRaw) : null;
  return <IncidentResponse cms={cms} />;
}
