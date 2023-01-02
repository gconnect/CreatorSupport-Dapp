import React from 'react'
import CreatorGuide from './CreatorGuide'
import CircleWallet from '../images/circle-wallet.svg'

export default function Supporter() {
  return (
    <div className='mt-24'>
      <h3 className='text-center text-3xl p-4'>🖐  Are you a Supporter? 🖐 </h3>
      <p className='text-center px-48 py-4 text-xl'>Encourage  and support the works of creators you admire so that they can do more.  
<br/>All you have to do is to send in your support to them. </p>
      <div className='flex justify-center'> 
        <CreatorGuide image={CircleWallet}
          title='Connect Wallet'
          description='We have variety of wallet connection options.
                    Connect to your wallet of choice'/>
        
        <CreatorGuide image={CircleWallet}
          title='Select a Creator'
          description='select the creator you want to support 
        from our list of creator or directly using the creator link'/>

        <CreatorGuide image={CircleWallet}
          title='Send Your Support'
          description='select the creator you want to support 
        from our list of creator or directly using the creator link'/>
      </div>
    </div>
  )
}
