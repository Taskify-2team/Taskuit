import { ButtonHTMLAttributes } from 'react'

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function EditButton({ onClick, text }: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="border-b-[0.1rem] border-solid border-var-gray4 text-[1.2rem] leading-[1.3rem] text-var-gray4"
    >
      {text}
    </button>
  )
}
