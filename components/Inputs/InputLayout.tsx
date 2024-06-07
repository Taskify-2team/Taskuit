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
  return (
    <label htmlFor={id} className="flex flex-col gap-[1rem]">
      <span className={`${isSmallSize ? 'text-[1.6rem]' : 'text-[1.8rem]'} leading-tight`}>
        {label} {isRequired && <b className="text-[1.8rem] text-primary-violet">*</b>}
      </span>
      {children}
    </label>
  )
}
