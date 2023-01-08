import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CreatorSection from './CreatorSection'
import Dashboard from './Dashboard/Dashboard'
import { useWeb3React } from '@web3-react/core'
import FeaturedCreators from './FeaturedCreators'
import Hero from './Hero'
import PartnerSection from './PartnerSection'
import Supporter from './Supporter'
import { getCreator } from '../utils/interact'

export default function Content(): JSX.Element {
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
