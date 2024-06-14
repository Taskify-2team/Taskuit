import EyeOff from '@/public/icons/eyeOff.svg'
import EyeOn from '@/public/icons/eyeOn.svg'
import Image from 'next/image'
import { useState } from 'react'
import { FieldError } from 'react-hook-form'

interface AuthInputProps {
  id: string
  placeholder: string
  label: string
  type: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  error?: FieldError | undefined
  theme: string
}

export default function AuthInput({
  id,
  placeholder,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
  theme,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && showPassword ? 'text' : type

  const handleEyeClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <label
      htmlFor={id}
      className={`relative flex flex-col gap-[0.8rem] ${theme === 'normal' ? 'text-black' : 'text-white'}`}
    >
      <span className="text-[1.6rem] leading-tight">{label}</span>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`rounded-[0.8rem] text-black ${error ? 'border-var-red' : 'border-var-gray3 focus:border-primary-violet'} border-[0.1rem] px-[1.6rem] py-[1.5rem] text-[1.6rem] outline-none ${theme === 'normal' ? 'bg-white' : 'bg-var-gray2'}`}
      />
      {type === 'password' && (
        <button
          type="button"
          aria-label="Save"
          onClick={handleEyeClick}
          className="absolute bottom-[1.5rem] right-[1.6rem]"
        >
          <Image src={showPassword ? EyeOn : EyeOff} alt="" width="24" height="24" />
        </button>
      )}
      {error && (
        <p className="absolute -bottom-[2.5rem] text-[1.4rem] text-var-red">{error.message}</p>
      )}
    </label>
  )
}
