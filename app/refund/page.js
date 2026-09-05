import React from 'react'
import Refund from './Refund'
import { buildPageMetadata } from '../lib/cms'

const DEFAULT_METADATA = {
  title: "Refund Policy - Future IT Touch Private Limited",
  description: "Refund and Cancellation Policy for Future IT Touch Private Limited.",
  keywords: ["Refund", "Cancellation", "Policy", "Future IT Touch"],
};

export async function generateMetadata() {
  return buildPageMetadata("refund", DEFAULT_METADATA);
}

export default function page() {
  return (
    <>
      <Refund/>
    </>
  )
}
