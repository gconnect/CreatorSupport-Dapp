import React from 'react'
import { useQuery } from '@tanstack/react-query' 
import { getCreator, getCreators } from '../../utils/interact'
import { useWeb3React } from '@web3-react/core'

export default function EarningsTab(): JSX.Element{
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
    <div className='flex'>
      <div className='bg-gray-500 p-8 rounded-lg'>
        <h1 className='font-bold'>{`${ data === undefined ? "" : data.donationsReceived/1e18} MATIC `}</h1>
        <p>All time</p>
      </div>
      <div className='bg-gray-500 p-8 rounded-lg ml-8'>
        <h1 className='font-bold'>{data === undefined ? "" : data.supporters}</h1>
        <p>Supporters</p>
      </div>
    </div>
  )
}
