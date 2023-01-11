import React, { ChangeEvent, useRef, useState } from "react";
import { useParams } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import { getCreator, getCreators, sendTip } from "../../utils/interact";
import { ethers } from "ethers";
import { useQuery } from '@tanstack/react-query'
import { resolveDomainUsingAPI, resolveDomainUsingLibrary } from "../../unstoppable/unstoppable_resolution";


interface IParams {
  myId: number;
  username: string;
  walletAddress: string;
}
export default function SupporterModal(param: IParams): JSX.Element {
  const {account, activate } = useWeb3React();
  const [amount, setAmount] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const { id } = useParams()
  const [resolveDomain, setResolveDomain] = useState<string | void>("")

  const amountHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }

  const commentHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  const walletHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setWalletAddress(e.currentTarget.value)
  }
  
  // const creator = data === undefined ? undefined : data.find((item) => item.id === id)
  //   console.log("creator" + creator)
  
  const domain = async () => {
    try {
      const name = await resolveDomainUsingAPI("gloryagat.nft")
      setResolveDomain(name)
    } catch (err) {
      console.log(err)
    }
  }
  // domain()

  const sendSupport = async () => {
    await sendTip(account, comment, param.myId, ethers.utils.parseUnits(amount, "ether"))
    setAmount("")
    setComment("")
  }
  console.log("paramId", param.myId)

  return (
    <div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="supporterModal" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                {`Support ${param.username} with`}
              </h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="flex justify-center flex flex-col">
                <FormInput placeholder="Amount" value={amount} onChange={amountHandler} type="number" />
                <p className="black">{` id here : ${param.myId}`}</p> 
                <textarea
                  className="
                    form-control
                    text-black
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
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Say something nice (optional)!"
                  value={comment}
                  onChange={commentHandler}
                >                  
                </textarea>
                <FormInput placeholder="Wallet address" value={param.walletAddress} onChange={walletHandler} type="text" disabled={true} />   
                
                {/* <p>Register your domain</p>  : <p className="text-black">{`Resolve to ${resolveDomain}`}</p> */}
                
              </div>
              <CustomButton id={param.myId} text="Support" myStyle="bg-amber-500 w-full" action={() =>{sendSupport()}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}