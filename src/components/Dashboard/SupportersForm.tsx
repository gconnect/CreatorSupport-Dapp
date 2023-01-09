import React, { ChangeEvent, useState } from 'react'
import CustomButton from '../CustomButton'
import FormInput from '../FormInput'
import { useQuery } from '@tanstack/react-query' 
import { getCreator } from '../../utils/interact'
import { sendTip } from '../../utils/interact'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

export default function SupportersForm() {
  const [amount, setAmount] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const { account } = useWeb3React()

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

    const { data } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => await getCreator(0)
    })
  
    const sendSupport = async () => {
    await sendTip(account, comment, 0, ethers.utils.parseUnits(amount, "ether"))  
  }
  
  return (
    <div>
      <div className="flex flex-col">
                <FormInput placeholder="Amount" value={amount} onChange={amountHandler} type="number" />
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
                <FormInput placeholder="Wallet address" value={data === undefined ? "" : data.walletAddress} onChange={walletHandler} type="text" disabled={true} />                  
              </div>
              <CustomButton text="Support" myStyle="bg-amber-500 w-full" toggleValue={account === undefined ? 'modal' : ""} targetValue= {account === undefined ? "#exampleModalCenter" : ""} action={() => { sendSupport() }}/>
    </div>
  )
}
