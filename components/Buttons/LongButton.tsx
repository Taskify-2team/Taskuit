import React, { ReactNode } from 'react'

interface LongButtonProps {
  type: 'button' | 'submit'
  children: ReactNode
  disabled: boolean // 추가
}

export default function LongButton({ type, children, disabled }: LongButtonProps) {
  const isActive = !disabled
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-block w-[52rem] py-[1.4rem] sm:w-[35.1rem] ${isActive ? 'cursor-pointer bg-primary-violet' : 'bg-var-gray4'} rounded-[0.8rem] text-center text-[1.8rem] leading-tight text-var-white`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
