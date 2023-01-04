import React, { useState } from 'react'
import CustomButton from './CustomButton'
import CircleCheck from '../images/circle-check.svg'
import SupporterModal from './Modal/SupporterModal'

interface ICreator {
  image: string,
  name: string,
  bio: string,
  earnings: number,
  supporters: number
  currency: string
}

export default function Creator(params: ICreator): JSX.Element{
    const [show, setShow] = useState<Boolean>(false)

  const openModal = () => {
    setShow(true)
  }

  return (
   <div className="flex justify-center m-4">
    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={params.image} alt="profile pix" />
      <div className="p-6 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{params.name}</h5>
        <p className="text-gray-700 text-base mb-4">
          {params.bio}
        </p>
          <div className='flex'>
            <img src={CircleCheck} alt="icon" width={24} />
            <div>
              <p className="text-gray-600 text-xs">Donation received</p>
              <p className="text-gray-600 ml-2 text-lg">{params.earnings}<span>{params.currency}</span></p>
            </div>  
          </div>

           <div className='flex'>
            <img src={CircleCheck} alt="icon" width={24} />
            <div>
              <p className="text-gray-600 text-xs ml-2">Supporter(s)</p>
              <p className="text-gray-600 ml-2 text-lg">{params.supporters}</p>
            </div>  
          </div>        
          <CustomButton myStyle='bg-amber-500 mt-4' text='Support' toggleValue='modal' targetValue='#supporterModal' />
          <SupporterModal/>
      </div>
  </div>
</div>
  )
}
