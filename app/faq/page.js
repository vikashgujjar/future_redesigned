import React from "react";

import Faqq from "./Faqq";
import { getFaqGroups, buildPageMetadata } from "../lib/cms";

const DEFAULT_METADATA = {
  title: "FAQ - Future IT Touch Private Limited",
  description:
    "Answers to frequently asked questions about our development process, quality assurance, confidentiality, pricing, and how we work with clients worldwide.",
};

export async function generateMetadata() {
  return buildPageMetadata("faq", DEFAULT_METADATA);
}

export default async function page() {
  const allGroups = await getFaqGroups();
  // "homepage" is a separate group feeding the Home page teaser only — exclude it here.
  const groups = allGroups?.filter((g) => g.key !== "homepage");
  return (
    <div>
      <Faqq groups={groups} />
    </div>
  );
}
