import React, { ReactNode } from 'react'

interface LongButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: ReactNode
}

export default function LongButton({ type, children }: LongButtonProps) {
  const isActive = true

  return (
    <button
      type={type}
      className={`inline-block w-[35rem] py-[1.4rem] lg:w-[52rem] ${isActive ? 'bg-[--violet-violet_5534DA]' : 'bg-[--gray-gray_9FA6B2]'} cursor-pointer rounded-[0.8rem] text-center text-[1.8rem] leading-tight text-[--white-white_FFFFFF]`}
    >
      {children}
    </button>
  )
}
