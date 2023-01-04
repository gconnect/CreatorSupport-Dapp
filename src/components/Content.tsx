import React from 'react'
import CreatorSection from './CreatorSection'
import Dashboard from './Dashboard/Dashboard'
import FeaturedCreators from './FeaturedCreators'
import Hero from './Hero'
import PartnerSection from './PartnerSection'
import Supporter from './Supporter'

export default function Content() : JSX.Element {
  return (
    <div>
      <Hero />
      <CreatorSection />
      <FeaturedCreators />
      <Supporter />
      <PartnerSection/>
      {/* <Dashboard/> */}
    </div>
  )
}
