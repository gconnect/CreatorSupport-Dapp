import React, {ChangeEvent, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useWeb3React } from '@web3-react/core';
import { useParams } from 'react-router-dom';
import { sendTip } from '../../utils/interact';
import { ethers } from "ethers";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

interface IParams {
  myId: number;
  username: string;
  walletAddress: string;
  show: boolean;
  onHide: () => void;
}

export default function BootStrapSupporter(params: IParams) {
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

  const sendSupport = async () => {
    await sendTip(account, comment, params.myId, ethers.utils.parseUnits(amount, "ether"))
  }
  console.log("paramId", params.myId)

 const style = {
      color: 'black',
 };  
  return (
    <Modal
      {...params}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton id='supporterModal2'>
        <Modal.Title id="contained-modal-title-vcenter" style={style}>
         {`Support ${params.username} with`}
       </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="modal-body relative p-4">
              <div className="flex justify-center flex flex-col">
                <FormInput placeholder="Amount" value={amount} onChange={amountHandler} type="number" />
                <p className="black">{` id here : ${params.myId}`}</p> 
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
                <FormInput placeholder="Wallet address" value={params.walletAddress} onChange={walletHandler} type="text" disabled={true} />   
                
                {/* <p>Register your domain</p>  : <p className="text-black">{`Resolve to ${resolveDomain}`}</p> */}
                
              </div>
              <CustomButton text="Support" myStyle="bg-amber-500 w-full" action={() =>{sendSupport()}}/>
            </div>
      </Modal.Body>
    </Modal>
  );
}
