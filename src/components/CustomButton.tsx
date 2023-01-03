import React from 'react'

interface IButton {
  myStyle: string,
  text: string,
  image? : string,
  action?: Function
}
export default function CustomButton(params: IButton) : JSX.Element {
  return (
    <button className={`${params.myStyle} text-white p-2 mr-2 rounded-md align-center`} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={() => params.action}>
      {params.text}
    </button>
  )
}
