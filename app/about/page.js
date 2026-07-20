import React from 'react'
import AboutShow from './AboutShow'
import { COMPANY_START_YEAR } from '../lib/companyStats'

export const metadata = {
  title: "Our Story – Future Touch",
  description:
    `Future Touch is a Website Development and Digital Marketing Company Founded in ${COMPANY_START_YEAR} by Vinod Tanwar.`,
  keywords: "IT, Technology, Solutions, Future IT Touch",
};

export default function page() {
  return (
    <div>
      <AboutShow/>
    </div>
  )
}
