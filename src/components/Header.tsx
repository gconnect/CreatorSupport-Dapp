import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ConnectModal from './Modal/ConnectModal'
import CustomButton from './CustomButton'
import { useWeb3React } from '@web3-react/core'
// import { getCurrentWalletConnected } from '../utils/interact'
import { CreatorList } from '../pinata/CreatorsList'
import { getAllCreators, getCreator, getCreatorBal, getCreatorSupporterCount } from '../utils/interact'

export default function Header(): JSX.Element{
  const [show, setShow] = useState<Boolean>(false)
  const { deactivate, account, active, chainId } = useWeb3React();

  // useEffect(() => {
  //   // const currentAccount = async () => {
  //   //   let { address, status } = await getCurrentWalletConnected()
  //   //   address = account
  //   //   console.log(address)
  //   //  }
  //   //  currentAccount()
  // }, [])
  
  console.log(account)

  const testing = async () => {
    // await CreatorList("Donation Dapp")
    await getCreatorBal(0)
  }

    const creator = async () => {
      await getCreator()
    }

  return (
      <header>
        <nav className='p-4 flex justify-between'>
        <h2 className='font-bold lg:text-2xl sm:text-lg'><Link to="/">DSupport</Link> </h2>
        <div>
          {active ?
            <div className='flex'>
              <CustomButton myStyle='bg-black border-2 border-amber-500 text-amber-500' text={`Connected to ${account?.substring(0, 5)}..`} />
              <CustomButton myStyle='bg-amber-500' text="Disconnect" action={deactivate} />
              <CustomButton myStyle='bg-yellow-500' text='Test' action={() => testing()} />
              {creator !== null ?  <CustomButton myStyle='bg-amber-500' text='Dashboard' action={() => window.open('dashboard')} /> : null}
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
