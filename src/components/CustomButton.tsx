import React from 'react'

interface IButton {
  myStyle: string;
  text: string;
  image?: string;
  action?: () => void;
  targetValue?: string;
  toggleValue?: string
}
export default function CustomButton(params: IButton) : JSX.Element {
  return (
    <button className={`${params.myStyle} text-white p-2 mr-2 rounded-md align-center`} data-bs-toggle={params.toggleValue} data-bs-target={params.targetValue} onClick={params.action}>
      {params.text}
    </button>
  )
}
