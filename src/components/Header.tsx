import React, { useState, useEffect } from 'react'
import ConnectModal from './Modal/ConnectModal'
import CustomButton from './CustomButton'
import { useWeb3React } from '@web3-react/core'

export default function Header(): JSX.Element{
  const [show, setShow] = useState<Boolean>(false)
  const { deactivate, account, active, chainId } = useWeb3React();
 
  const openModal = () => {
    setShow(true)
  }

  return (
      <header>
        <nav className='p-4 flex justify-between fixed w-full'>
          <h2 className='font-bold lg:text-2xl sm:text-xl'>DSupport</h2>
        <div>
          {active ?
            <div>
              <CustomButton myStyle='bg-black border-2 border-amber-500 text-amber-500' text={`Connected to ${account?.substring(0, 5)}..`} />
              <CustomButton myStyle='bg-amber-500' text="Disconnect" action={ deactivate }/>
            </div> :
            <div>
              <CustomButton myStyle='bg-amber-500' text='Connect Wallet' toggleValue='modal' targetValue='#exampleModalCenter' />
            </div>
            
          }
          <ConnectModal/>
          </div>
        </nav>
      </header>
  )
}
