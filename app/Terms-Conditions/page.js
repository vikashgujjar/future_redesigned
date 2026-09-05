import React from 'react'
import TermsCondition from './TermsCondition'
import { buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Terms & Condition - Future IT Touch Private Limited",
  description: "Terms and conditions covering Future IT Touch's website design, development, and marketing services, including acceptance policies, charges, and client responsibilities.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return buildPageMetadata("terms-conditions", DEFAULT_METADATA);
}

export default function page() {
  return (
    <div>
      <TermsCondition/>
    </div>
  )
}
