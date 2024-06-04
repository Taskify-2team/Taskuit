import { InputHTMLAttributes } from 'react'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'

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
  isRequired,
}: TextareaProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        className={`${inputStyles} h-[9.6rem] resize-none`}
      />
    </InputLayout>
  )
}

Textarea.defaultProps = {
  isRequired: false,
}
