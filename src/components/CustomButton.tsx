import React from 'react'

interface IButton {
  myStyle: string,
  text: string
}
export default function CustomButton(params: IButton) : JSX.Element {
  return (
    <button className={`${params.myStyle} text-white p-2 mr-2 rounded-md`}>{params.text}</button>
  )
}
