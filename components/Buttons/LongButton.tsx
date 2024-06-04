import React, { ReactNode } from 'react'

interface LongButtonProps {
  type: 'button' | 'submit'
  children: ReactNode
}

export default function LongButton({ type, children }: LongButtonProps) {
  const isActive = true

  // 버튼의 타입은 버튼의 props로부터 받은 값인 type을 그대로 사용합니다.
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-block w-[35rem] py-[1.4rem] lg:w-[52rem] ${isActive ? 'bg-[--violet-violet_5534DA]' : 'bg-[--gray-gray_9FA6B2]'} cursor-pointer rounded-[0.8rem] text-center text-[1.8rem] leading-tight text-[--white-white_FFFFFF]`}
    >
      {children}
    </button>
  )
}
