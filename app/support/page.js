import React from "react";
import Support from "./Support";
import { buildPageMetadata } from "../lib/cms";

const DEFAULT_METADATA = {
  title: "Support - Future IT Touch Private Limited",
  description: "Get help from Future IT Touch support team. Submit a ticket, browse FAQs, or contact us directly for technical support, billing, project updates, and more.",
  keywords: ["Support", "Help", "Future IT Touch", "Technical Support", "Ticket", "FAQ"],
};

export async function generateMetadata() {
  return buildPageMetadata("support", DEFAULT_METADATA);
}

export default function page() {
  return <Support />;
}
