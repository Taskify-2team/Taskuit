import { useLoadTheme } from '@/store/context/ThemeContext'
import React, { ButtonHTMLAttributes } from 'react'

interface KebabEditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function KebabEditButton({ text, onClick }: KebabEditButtonProps) {
  const { theme } = useLoadTheme()

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[0.4rem] py-[0.4rem] text-[1.4rem] hover:bg-var-violet hover:text-primary-violet ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray3'}`}
    >
      {text}
    </button>
  )
}
