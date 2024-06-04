import { InputHTMLAttributes } from 'react'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
  isReadOnly?: boolean
}

export default function TextInput({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  isRequired,
  isReadOnly,
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
        readOnly={isReadOnly}
      />
    </InputLayout>
  )
}

TextInput.defaultProps = {
  isRequired: false,
  isReadOnly: false,
}
