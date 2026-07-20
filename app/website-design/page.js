import React from 'react'
import WebDesign from './WebDesign'
import { YEARS_EXPERIENCE_DISPLAY } from '../lib/companyStats'

export const metadata = {
  title: "Custom Web Design Company | Responsive Website Design Services",
  description:
    `Professional web design company building custom, responsive, SEO-friendly websites for startups and enterprises worldwide. Affordable website design services with fast delivery and ${YEARS_EXPERIENCE_DISPLAY} years of experience.`,
  keywords: [
    "web design company", "website design services", "custom web design company",
    "responsive web design company", "affordable web design services",
    "business website design services", "website redesign services",
  ],
};

export default function page() {
  return (
    <div>
      <WebDesign/>
    </div>
  )
}
