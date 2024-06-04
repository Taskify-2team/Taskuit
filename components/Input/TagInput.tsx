import InputLayout from './InputLayout'
import inputStyles from './inputstyles'

interface TagInputProps {
  id: string
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function TagInput({ id, label, placeholder, isRequired }: TagInputProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input id={id} placeholder={placeholder} required={isRequired} className={inputStyles} />
    </InputLayout>
  )
}

TagInput.defaultProps = {
  isRequired: false,
}
