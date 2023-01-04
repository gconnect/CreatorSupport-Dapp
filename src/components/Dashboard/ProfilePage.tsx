import React from 'react'
import profileImage from '../../images/profile-pix.svg'
import SupportersForm from './SupportersForm'

export default function ProfilePage() {
  return (
    <div>
      <div className='flex'>
        <div className='flex'>          
          <img className='rounded-full' src={profileImage} width="100px" alt="profile-pix" />
          <div className='m-4'>
            <p className='text-xl'>Hi Jane</p>
            <p> I am a Content creator</p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <SupportersForm/>
    </div>
  )
}
