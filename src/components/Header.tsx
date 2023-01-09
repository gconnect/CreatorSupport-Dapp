import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ConnectModal from './Modal/ConnectModal'
import CustomButton from './CustomButton'
import { useWeb3React } from '@web3-react/core'
import { Injected } from '../utils/Connectors'

export default function Header(): JSX.Element{
  const { deactivate, account, active, activate } = useWeb3React();

  const disconnect = async () => {
    try {
      deactivate()
      localStorage.setItem("isWalletConnected", "false")
      localStorage.setItem("isunstoppable", "false")
      localStorage.setItem("isCoinbase", "false")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage.getItem("isWalletConnected") ||
        localStorage.getItem("isunstoppable") ||
        localStorage.getItem("isCoinbase") === 'true') {
        try {
          await activate(Injected)
          localStorage.setItem("isWalletConnected", "true")
        } catch (err) {
          console.log(err)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])
  console.log(account)

  return (
      <header>
        <nav className='p-4 flex justify-between'>
        <h2 className='font-bold lg:text-2xl sm:text-lg'><Link to="/">DSupport</Link> </h2>
        <div>
          {active ?
            <div className='flex'>
              <CustomButton myStyle='bg-black border-2 border-amber-500 text-amber-500' text={`Connected to ${account?.substring(0, 5)}..`} />
              <CustomButton myStyle='bg-amber-500' text="Disconnect" action={disconnect} />
              <CustomButton myStyle='bg-amber-500' text='Dashboard' action={() => window.open('dashboard')} />
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
