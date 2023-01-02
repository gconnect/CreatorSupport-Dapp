import React from 'react'
import CreatorGuide from './CreatorGuide'
import CircleWallet from '../images/circle-wallet.svg'
import CircleCreate from '../images/circle-create.svg'
import CirclePay from '../images/circle-pay.svg'
import CircleShare from '../images/circle-share.svg'
import CustomButton from './CustomButton'

export default function CreatorSection() : JSX.Element {
  return (

    <div className=''>
      <h3 className='text-center text-3xl'>Are you a Creator?</h3>
      <CreatorGuide
        image={CircleWallet}
        title="Connect Wallet"
        description='We have variety of wallet connection options.
                    Connect to your wallet of choice'
      />
       <CreatorGuide
        image={CircleCreate}
        title="Creator Account  setup "
        description='Easily setup your creator account and start 
                      receiving support from your fans'
      />
       <CreatorGuide
        image={CirclePay}
        title="Receive Payment"
        description='Instantly receive payment to your provided
                      wallet address'
      />
       <CreatorGuide
        image={CircleShare}
        title="Share your Profile"
        description='Share your profile to gain more supporters'
      />
      <div className='flex justify-center m-8'>
        <CustomButton myStyle='bg-amber-500 p-4' text='Creator Account Setup'/>
      </div>
    </div>
  )
}
