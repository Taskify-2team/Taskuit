import { InputHTMLAttributes, ReactNode } from 'react'

/**
 * @param type email / password / text
 */
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  label: string
  isRequired?: boolean
}

export default function InputLayout({ children, id, label, isRequired }: TextInputProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-[1rem]">
      <span className="text-[1.8rem] leading-tight">
        {label} {isRequired && <b className="text-[1.8rem] text-primary-violet">*</b>}
      </span>
      {children}
    </label>
  )
}
