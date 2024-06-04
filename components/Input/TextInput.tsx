import { InputHTMLAttributes } from 'react'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
}

export default function TextInput({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  isRequired,
}: TextInputProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        className={inputStyles}
      />
    </InputLayout>
  )
}

TextInput.defaultProps = {
  isRequired: false,
}
