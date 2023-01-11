import React, { useRef, useState } from 'react'
import CustomButton from '../CustomButton'
import DashboardTab from './DashboardTab'
import WithdrawModal from '../Modal/WIthdrawModal'
import { getCreator, getCreators } from '../../utils/interact'
import { useQuery } from '@tanstack/react-query' 
import ShareButton from '../ShareButton'
import { useWeb3React } from '@web3-react/core'

export default function Dashboard(): JSX.Element{
  const[index, setIndex] = useState<number>(0)
  let creatorIndex = useRef<number>();
  let counter;
  const { account } = useWeb3React()

  console.log('acc ', account)
  
   const { isLoading, isError, data  } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => {
      const creators = await getCreators()
      return creators.find(item => item.walletAddress === account)
    }
   })
  
  // if (isLoading) {
  //    return <div>Loading Creator Info...</div>
  // }

  // if (isError) {
  //   return <div>{isError}</div>
  // }
  console.log('data ', data)


  return (
    // <div>
    //   <div className='text-white'>{ data && data.username}</div>
    // </div>
    <div>
      { data === undefined ?
      <div className='text-center p-60 text-2xl'>Opps! No account created yet!</div> : 
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
          {/* <CustomButton text='Share Profile' myStyle='bg-amber-500' /> */}
          <ShareButton/>          
          <CustomButton text='Withdraw' myStyle='bg-amber-500 mt-4' targetValue='#withdrawModal' toggleValue='modal'/>
          <WithdrawModal/>
        </div>
      </div>
      <DashboardTab/>
    </div>
    }
    </div>   
  )
}
