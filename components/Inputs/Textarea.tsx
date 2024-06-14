import { InputHTMLAttributes } from 'react'
import { useLoadTheme } from '@/store/context/ThemeContext'
import InputLayout from './InputLayout'
import TextCounter from '../TextCounter/TextCounter'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  isRequired?: boolean
}

export default function Textarea({
  id,
  label,
  onChange,
  value,
  name,
  placeholder,
  isRequired = false,
}: TextareaProps) {
  const { theme } = useLoadTheme()

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        maxLength={250}
        className={`input-layout h-[9.6rem] resize-none ${theme === 'dark' && 'border-var-black1 bg-var-black1 text-var-gray3'}`}
      />
      <TextCounter text={String(value)} length={250} />
    </InputLayout>
  )
}
