import React from 'react'

interface ICreatorGuide {
  image: string,
  title: string,
  description: string
}

export default function CreatorGuide(params : ICreatorGuide) : JSX.Element {
  return (
      <div className='flex justify-center m-8'>
        <div className='mr-8 align-center'>
          <img className='align-center lg:visible md:invisible sm:invisible' src={params.image} width="70px" height="70px" alt='create-wallet' />
        </div>
        <div>
          <h3 className='font-bold text-2xl'>{params.title}</h3>
          <p className='text-xl'>{params.description}</p>
        </div>
      </div>
  )
}
