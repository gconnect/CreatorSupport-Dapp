import React from 'react'
import profileImage from '../../images/profile-pix.svg'
import SupportersForm from './SupportersForm'
import { useQuery } from '@tanstack/react-query' 
import { getCreator, getCreators } from '../../utils/interact'
import { useWeb3React } from '@web3-react/core'

export default function ProfilePage() {
  const { account } = useWeb3React()

  const { data } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => {
      const creators = await getCreators()
      return creators.find(item => item.walletAddress === account)
    }
  })

  console.log(data)
  return (
    <div>
      <div className='flex'>
        <div className='flex'>          
          <img className='rounded-full' src={data === undefined ? "" : `https://ipfs.io/ipfs/${data.ipfsHash}`} width="100px" alt="profile-pix" />
          <div className='m-4'>
            <p className='text-xl'>{`Hi ${data === undefined ? "" : data.username}`}</p>
            <p> {data === undefined ? "" : data.userbio}</p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <SupportersForm/>
    </div>
  )
}
