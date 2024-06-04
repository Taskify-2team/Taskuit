import { ChangeEvent } from 'react'
import InputLayout from './InputLayout'
import { inputStyles } from './inputstyles'

interface TextInputProps {
  id: string
  label: string
  name?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  isRequired?: boolean
}

export default function TextInput({
  id,
  label,
  name,
  onChange,
  placeholder,
  isRequired,
}: TextInputProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input
        name={name}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        className={inputStyles}
      />
    </InputLayout>
  )
}
