import React from 'react'
import CustomButton from '../CustomButton'
import DashboardTab from './DashboardTab'
import WithdrawModal from '../Modal/WIthdrawModal'
import { getCreator } from '../../utils/interact'
import { useQuery } from '@tanstack/react-query' 
 import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function Dashboard(): JSX.Element{

  const { data } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => await getCreator(0)
  })

  console.log(data)

  return (
    <div className='bg-gray-800 p-36 m-24 rounded-md'>
      <div className='flex justify-between'>
        <div className='flex'>          
          <img className='rounded-full' src={data === undefined ? undefined : `https://ipfs.io/ipfs/${data.profilePix}`} width="100px" alt="profile-pix" />
          <div className='m-4'>
            <p>{`Hi ${data === undefined ? "" : data.username}`}</p>
            <p>{`Dsupport.vercel.app/${data === undefined ? undefined : data.username}`}</p>
          </div>
        </div>
        <div>
          <CustomButton text='Share Profile' myStyle='bg-amber-500' />
          {/* <FacebookShareButton/> */}
          <CustomButton text='Withdraw' myStyle='bg-amber-500 mt-4' targetValue='#withdrawModal' toggleValue='modal'/>
          <WithdrawModal/>
        </div>
      </div>
      <DashboardTab/>
    </div>
  )
}
