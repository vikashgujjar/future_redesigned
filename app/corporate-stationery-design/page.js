import React from 'react'
import Identity from './Identity'

export const metadata = {
  title: "Corporate Identity Design - Future IT Touch Private Limited",
  description:
    "Corporate stationery design services including business cards, letterheads, envelopes, and presentation folders that give your brand a consistent, professional identity.",
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
