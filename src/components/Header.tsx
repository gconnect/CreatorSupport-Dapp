import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ConnectModal from './Modal/ConnectModal'
import CustomButton from './CustomButton'
import { useWeb3React } from '@web3-react/core'
import { Injected } from '../utils/Connectors'
import { getCreators } from '../utils/interact'
import { useQuery } from '@tanstack/react-query'
import { resolveDomainUsingAPI } from "../unstoppable/unstoppable_resolution"
import { truncate } from '../utils/truncate'

export default function Header(): JSX.Element{
  const { deactivate, account, active, activate } = useWeb3React();
  const [resolveDomain, setResolveDomain] = useState<string | null >("")

  const disconnect = async () => {
    try {
      deactivate()
      // localStorage.setItem("isWalletConnected", "false")
      // localStorage.setItem("isunstoppable", "false")
      // localStorage.setItem("isCoinbase", "false")
      localStorage.clear()
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  const domainResolution = async () => {
    const response = await resolveDomainUsingAPI(account as string)
    setResolveDomain(response)
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
    domainResolution()
    connectWalletOnPageLoad()
  }, [])
  console.log(account)


   const { data  } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => {
      const creators = await getCreators()
      return creators.find(item => item.walletAddress === account)
    }
   })
  
  return (
      <header>
        <nav className='p-4 flex justify-between'>
        <h2 className='font-bold lg:text-2xl sm:text-lg'><Link to="/">DSupport</Link> </h2>
        <div>
          {active ?
            <div className='flex'>
              <CustomButton myStyle='bg-black border-2 border-amber-500 text-amber-500' text={ `Connected to ${ resolveDomain === null || undefined || " " ? truncate(account) : resolveDomain}` } />
              <CustomButton myStyle='bg-amber-500' text="Disconnect" action={disconnect} />
              {data !== undefined ?
                <CustomButton myStyle='bg-amber-500' text='Dashboard' action={() => window.open('dashboard')} /> :
                null
                }
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
