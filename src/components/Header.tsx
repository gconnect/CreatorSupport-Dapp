import React, {useState} from 'react'
import ConnectModal from './ConnectModal'
import CustomButton from './CustomButton'

export default function Header(): JSX.Element{
  const [show, setShow] = useState<Boolean>(false)

  const openModal = () => {
    setShow(true)
  }
  return (
      <header>
        <nav className='p-4 flex justify-between'>
          <h2 className='font-bold text-2xl'>DSupport</h2>
        <div>
          <CustomButton myStyle='bg-amber-500 text-white p-2 rounded-md' text='Connect Wallet'  action={openModal}/>
          <ConnectModal/>
              {/* <button className='bg-amber-500 text-white p-2 rounded-md'>Disconnect</button> */}
              {/* <button className='bg-black border-2 border-orange-500 text-orange-500 p-2 rounded-md'>Connected to 0xdff...</button> */}
          </div>
        </nav>
      </header>
  )
}
