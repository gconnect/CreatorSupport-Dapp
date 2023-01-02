import React from 'react'
import Creator from './Creator'
import ProfilePix from '../images/profile-pix.svg'

export default function FeaturedCreators() {
  return (
    <div>
      <h3 className='text-center text-3xl'>Featured Creators</h3>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center p-8'>
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
        <Creator name='Jane Doe' bio='Content Creator' earnings={50} currency=" MATIC" supporters={23} image={ProfilePix} />
      </div>
      <p className='text-center text-2xl pb-4'>See more...</p>
    </div>
  )
}
