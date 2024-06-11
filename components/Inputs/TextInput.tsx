import { InputHTMLAttributes, RefObject } from 'react'
import { useLoadTheme } from '@/store/context/ThemeContext'
import InputLayout from './InputLayout'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
  isReadOnly?: boolean
  ref?: RefObject<HTMLInputElement>
}

export default function TextInput({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  ref,
  isRequired = false,
  isReadOnly = false,
}: TextInputProps) {
  const { theme } = useLoadTheme()

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        className={`input-layout ${isReadOnly ? 'text-var-gray4 focus:border-var-gray3' : ''} ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1 text-var-gray3'}`}
        readOnly={isReadOnly}
        ref={ref}
      />
    </InputLayout>
  )
}
