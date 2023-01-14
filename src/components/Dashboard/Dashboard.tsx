import React from 'react'
import CustomButton from '../CustomButton'
import DashboardTab from './DashboardTab'
import WithdrawModal from '../Modal/WIthdrawModal'
import { getCreators } from '../../utils/interact'
import { useQuery } from '@tanstack/react-query' 
import ShareButton from '../ShareButton'
import { useWeb3React } from '@web3-react/core'
import { useNavigate } from "react-router-dom"

export default function Dashboard(): JSX.Element{
  const { account } = useWeb3React()
  const navigate = useNavigate()

  console.log('acc ', account)
  
   const {isLoading, isError, data  } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => {
      const creators = await getCreators()
      return creators.find(item => item.walletAddress === account)
    }
   })

  console.log('data ', data)
  if (isLoading) {
     return <div className='text-center p-60 text-2xl'>Loading data ...</div>
  }
  if (isError) {
    return <div className='text-center p-60 text-2xl'>{isError} 🤦‍♂️  Please hold on this may take a while...</div>
  }
  // if (account === undefined) {
  //   return <div></div>;
  // }
  return (
    <div>
    <div className='bg-gray-800 p-36 m-24 rounded-md'>
      <div className='flex justify-between'>
        <div className='flex'>          
          <img className='rounded-full' src={data === undefined ? undefined : `https://ipfs.io/ipfs/${data.ipfsHash}`} width="100px" alt="profile-pix" />
          <div className='m-4'>
            <p>{`Hi ${data === undefined ? "" : data.username}`}</p>
            <p>{`Dsupport.vercel.app/${data === undefined ? undefined : data.username}`}</p>
          </div>
        </div>
        <div>
          <ShareButton/>          
          <CustomButton text='Withdraw' myStyle='bg-amber-500 mt-4' targetValue='#withdrawModal' toggleValue='modal'/>
          <WithdrawModal id={data.id} walletAddress={data.walletAddress} />
        </div>
      </div>
        <DashboardTab
          id={data.id}
          username={data.username}
          userbio={data.userbio}
          walletAddress={data.walletAddress}
          ipfsHash={data.ipfsHash}
          donationsReceived={data.donationsReceived/1e18}
          supporters={data.supporters}       
        />
    </div>
    </div>   
  )
}
