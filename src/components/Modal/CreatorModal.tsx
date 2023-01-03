import React from "react";
import UnstoppableIcon from '../../images/wallet/unstoppable-icon.png'
import MetaMaskIcon from '../../images/wallet/metamask-icon.png'
import CoinbaseWalletIcon from '../../images/wallet/coinbase-icon.svg'
import MyAlgoWallet from '../../images/wallet/myalgo-icon.png'
import WalletConnectIcon from '../../images/wallet/wallet-connect-icon.png'
import ButtonWithIcon from "../ButtonWithIcon";
import { useWeb3React } from '@web3-react/core'
import { CoinbaseWallet, WalletConnect, Injected , uauth} from '../../utils/Connectors';
import CustomButton from "../CustomButton";


export default function CreatorModal(): JSX.Element {
  const { activate } = useWeb3React();

  return (
    <div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="creatorModal" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                Setup your creator account
              </h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="flex justify-center flex flex-col">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700"
                      >Example label</label
                    >
                    <input
                      type="text"
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                      id="exampleFormControlInput1"
                      placeholder="Example label"
                    />
                  </div>
                </div>
                <div className="mb-3 w-96">
                  <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Default file input example</label>
                  <input className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
                </div>
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <select className="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <CustomButton text="Create Account" myStyle="bg-amber-500 w-full" action={() =>{console.log("submit")}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}