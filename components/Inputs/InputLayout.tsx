import { useLoadTheme } from '@/store/context/ThemeContext'
import { InputHTMLAttributes, ReactNode } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  label: string
  isRequired?: boolean
  isSmallSize?: boolean
}

export default function InputLayout({
  children,
  id,
  label,
  isRequired,
  isSmallSize,
}: TextInputProps) {
  const { theme } = useLoadTheme()

  return (
    <label htmlFor={id} className="relative flex flex-col gap-[1rem]">
      <span
        className={`${isSmallSize ? 'text-[1.6rem]' : 'text-[1.8rem]'} leading-tight ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
      >
        {label} {isRequired && <b className="text-[1.8rem] text-primary-violet">*</b>}
      </span>
      {children}
    </label>
  )
}
