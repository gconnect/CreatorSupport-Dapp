import React, { PropsWithChildren} from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children} : PropsWithChildren): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  )
}
