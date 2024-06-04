import EyeOff from '@/public/icons/eyeOff.svg'
import EyeOn from '@/public/icons/eyeOn.svg'
import Image from 'next/image'
import { InputHTMLAttributes, useState } from 'react'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: { message: string } // FieldError 로 변경해야 함
}

export default function AuthInput({ id, type, label, placeholder, error }: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type

  const handleEyeClick = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <label htmlFor={id} className="relative flex flex-col gap-[0.8rem]">
      <span className="text-[1.6rem] leading-tight">{label}</span>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className={`rounded-[0.8rem] ${error ? 'border-var-red' : 'border-var-gray3 focus:border-primary-violet'} border-[0.1rem] px-[1.6rem] py-[1.5rem] text-[1.6rem] outline-none`}
      />
      {type === 'password' && (
        <button
          type="submit"
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

AuthInput.defaultProps = {
  error: { message: '' },
}
