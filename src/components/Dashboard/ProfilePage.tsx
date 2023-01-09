import React from 'react'
import profileImage from '../../images/profile-pix.svg'
import SupportersForm from './SupportersForm'
import { useQuery } from '@tanstack/react-query' 
import { getCreator } from '../../utils/interact'

export default function ProfilePage() {
  const { data } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => await getCreator(0)
  })

  console.log(data)
  return (
    <div>
      <div className='flex'>
        <div className='flex'>          
          <img className='rounded-full' src={data === undefined ? "" : `https://ipfs.io/ipfs/${data.profilePix}`} width="100px" alt="profile-pix" />
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
