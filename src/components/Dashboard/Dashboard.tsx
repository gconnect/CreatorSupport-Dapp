import React from 'react'
import CustomButton from '../CustomButton'
import profileImage from '../../images/profile-pix.svg'
import DashboardTab from './DashboardTab'
import WithdrawModal from '../Modal/WIthdrawModal'

export default function Dashboard(): JSX.Element{

  return (
    <div className='bg-gray-800 p-36 m-24 rounded-md'>
      <div className='flex justify-between'>
        <div className='flex'>          
          <img className='rounded-full' src={profileImage} width="100px" alt="profile-pix" />
          <div className='m-4'>
            <p>Hi Jane</p>
            <p>Dsupport.com/Jane</p>
          </div>
        </div>
        <div>
          <CustomButton text='Share Profile' myStyle='bg-amber-500' />
          <CustomButton text='Withdraw' myStyle='bg-amber-500' targetValue='#withdrawModal' toggleValue='modal'/>
          <WithdrawModal/>
        </div>
      </div>
      <DashboardTab/>
    </div>
  )
}
