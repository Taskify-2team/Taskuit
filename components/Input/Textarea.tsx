import InputLayout from './InputLayout'
import { inputStyles } from './inputstyles'

interface TextareaProps {
  id: string
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function Textarea({ id, label, placeholder, isRequired }: TextareaProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <textarea
        id={id}
        placeholder={placeholder}
        required={isRequired}
        className={`${inputStyles} h-[9.6rem] resize-none`}
      />
    </InputLayout>
  )
}
