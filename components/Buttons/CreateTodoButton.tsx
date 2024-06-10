import Image from 'next/image'
import addLogo from '@/public/icons/addLogo.svg'
import { ButtonHTMLAttributes } from 'react'

interface CreateTodoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CreateTodoButton({ onClick }: CreateTodoButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[4rem] w-[100%] cursor-pointer items-center justify-center rounded-[0.6rem] border-[0.1rem] border-solid border-var-gray3 bg-var-white lg:w-[31.4rem]"
    >
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-var-gray3 bg-var-violet p-[0.3rem]">
        <Image src={addLogo} alt="더하기 이미지" fill />
      </div>
    </button>
  )
}
