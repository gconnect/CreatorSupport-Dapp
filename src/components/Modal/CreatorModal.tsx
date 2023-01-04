import React, { ChangeEvent, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";


export default function CreatorModal(): JSX.Element {
  const { activate } = useWeb3React();
  const [username, setUsername] = useState<string>("")
  const [bio, setBio] = useState<string>("")
  const [network, setNetwork] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [profilePix, setProfilePix] = useState<string | File | number | readonly string[] | undefined>(undefined)

  const userHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const bioHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  const networkHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setNetwork(e.target.value)

  }

  const walletHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setWalletAddress(e.currentTarget.value)
  }

  const profileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setProfilePix(e.target.files[0]); 
      console.log(e.target.files[0])
    }
  }

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
                <FormInput placeholder="Username" value={username} onChange={userHandler}  type="text"/>
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
                  placeholder="Tell us a little about you. (Not more than 100 words)"
                  value={bio}
                  onChange={bioHandler}
                >                  
                </textarea>
                <label className="form-label inline-block mb-2 text-gray-700 my-2">Where would you like to receive your payment?</label>
               <select className="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      my-2
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={networkHandler}>
                        <option selected>Select Network</option>
                        <option value="1">Polygon</option>
                        <option disabled value="2">Celo</option>
                        <option disabled value="3">Algorand</option>
                </select>
                <FormInput placeholder="Enter your wallet address" value={walletAddress} onChange={walletHandler} type="text" />
                  <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Upload your profile picture</label>
                  <input className="form-control
                  block
                  w-full
                  my-2
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" onChange={profileHandler} />
              </div>
              <CustomButton text="Create Account" myStyle="bg-amber-500 w-full" action={() =>{console.log("submit")}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}