import React from 'react'
import Identity from './Identity'

export const metadata = {
  title: "Corporate Identity Design Company | Business Stationery Design",
  description:
    "Corporate stationery design services including business cards, letterheads, envelopes, and presentation folders that give your brand a consistent, professional identity.",
  keywords: [
    "corporate identity design", "business card design services",
    "corporate stationery design", "brand identity design company",
    "letterhead design services",
  ],
  alternates: {
    canonical: "/corporate-stationery-design",
  },
};

export default function page() {
  return (
    <div>
      <Identity/>
    </div>
  )
}
