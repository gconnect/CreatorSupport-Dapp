import React from 'react'

export default function EarningsTab() : JSX.Element{
  return (
    <div className='flex'>
      <div className='bg-gray-500 p-8 rounded-lg'>
        <h1 className='font-bold'>CUSD 20</h1>
        <p>All time</p>
      </div>
      <div className='bg-gray-500 p-8 rounded-lg ml-8'>
        <h1 className='font-bold'> 10</h1>
        <p>Supporters</p>
      </div>
    </div>
  )
}
