import React from "react";
import UnstoppableIcon from '../images/wallet/unstoppable-icon.png'
import MetaMaskIcon from '../images/wallet/metamask-icon.png'
import CoinbaseWalletIcon from '../images/wallet/coinbase-icon.svg'
import MyAlgoWallet from '../images/wallet/myalgo-icon.png'
import WalletConnectIcon from '../images/wallet/wallet-connect-icon.png'
import ButtonWithIcon from "./ButtonWithIcon";
import { useWeb3React } from '@web3-react/core'
import { CoinbaseWallet, WalletConnect, Injected , uauth} from '../utils/Connectors';


export default function ConnectModal(): JSX.Element {
  const { activate, deactivate, account, active, chainId } = useWeb3React();
  return (
    <div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                Connect Wallet
              </h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="flex justify-center m-2">
                <ButtonWithIcon text="Unstoppable" image={UnstoppableIcon} myStyle="text-2xl border-2 border-blue-500 text-blue-500" action={() => activate(uauth)} />
              </div>
              <div className="flex justify-center m-2">
                <ButtonWithIcon text="Coinbase Wallet" image={CoinbaseWalletIcon} myStyle="text-2xl border-2 border-blue-500 text-blue-500" action={() => activate(CoinbaseWallet)} />
              </div>
              <div className="flex justify-center m-2">
                <ButtonWithIcon text="Metamask" image={MetaMaskIcon} myStyle="text-2xl border-2 border-blue-500 text-blue-500" action={() => activate(Injected)} />
              </div>
              <div className="flex justify-center m-2">
                <ButtonWithIcon text="myAlgo Wallet" image={MyAlgoWallet} myStyle="text-2xl border-2 border-blue-500 text-blue-500" />
              </div>
              <div className="flex justify-center m-2">
                <ButtonWithIcon text="Wallet Connect" image={WalletConnectIcon} myStyle="text-2xl border-2 border-blue-500 text-blue-500" action={() => activate(WalletConnect)} />
              </div>
            </div>
            <div
              className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                className="inline-block p-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}