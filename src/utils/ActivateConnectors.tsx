import React, { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { CoinbaseWallet, WalletConnect, Injected , uauth} from '../utils/Connectors';
 
// This component must be a child of <App> to have access to the appropriate context
export default function ActivateConnectors() {
      const { activate, deactivate, account, active, chainId } = useWeb3React();
  return (
    <div>
              <button  className='bg-blue-500 p-4' onClick={() => { activate(uauth) }}>Unstoppable</button>

        <button  className='bg-blue-500 p-4' onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
        <button className='bg-red-500 p-4' onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
        <button  className='bg-green-500 p-4' onClick={() => { activate(Injected) }}>Metamask</button>
        <button onClick={deactivate}>Disconnect</button>
          <div>Connection Status: {active}</div>
          <div>Account: {account}</div>
          <div>Network ID: {chainId}</div>
      </div>
  )
}