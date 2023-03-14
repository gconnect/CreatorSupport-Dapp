import React from 'react'
import AlgorandLogo from '../images/partners/algorand.png'
import CeloLogo from '../images/partners/celo.png'
import CoinbaseLogo from '../images/partners/coinbase.png'
import PolygonLogo from '../images/partners/polygon.png'
import unstoppableLogo from '../images/partners/unstoppable.png'

export default function PartnerSection() {
  return (
    <div className='mt-24'>
      <h3 className='text-center text-3xl p-4'> Partner Integrations </h3>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 p-8 mb-24 justify-center'>
        <img src={unstoppableLogo}  alt="unstoppable" />
        <img className='ml-4' src={PolygonLogo} width={200}  alt="unstoppable" />
        <img className='ml-4' src={CoinbaseLogo} width={200}  alt="unstoppable" />
        <img className='ml-4' src={CeloLogo} width={200}  alt="unstoppable" />
        <img className='ml-4' src={AlgorandLogo} width={200}  alt="unstoppable" />

      </div>
    </div>
  )
}
