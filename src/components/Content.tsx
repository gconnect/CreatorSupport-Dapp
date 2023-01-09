import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreatorSection from './CreatorSection'
import { useWeb3React } from '@web3-react/core'
import FeaturedCreators from './FeaturedCreators'
import Hero from './Hero'
import PartnerSection from './PartnerSection'
import Supporter from './Supporter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Content(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
     <div>
      <Hero />
      <CreatorSection />
      <FeaturedCreators />
      <Supporter />
      <PartnerSection/>
      </div>
   </QueryClientProvider>

  )
}
