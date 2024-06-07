import React, { ButtonHTMLAttributes } from 'react'

interface KebabEditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function KebabEditButton({ text, onClick }: KebabEditButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[0.4rem] py-[0.4rem] text-[1.4rem] text-var-black2 hover:bg-var-violet"
    >
      {text}
    </button>
  )
}
