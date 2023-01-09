import React from 'react'
import { useQuery } from '@tanstack/react-query' 
import { getCreator } from '../../utils/interact'

export default function EarningsTab(): JSX.Element{
  
   const { data } = useQuery({
    queryKey: ['creator'],
    queryFn: async () => await getCreator(0)
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
