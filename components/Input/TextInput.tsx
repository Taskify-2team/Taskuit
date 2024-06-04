import InputLayout from './InputLayout'
import inputStyles from './inputstyles'

interface TextInputProps {
  id: string
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function TextInput({ id, label, placeholder, isRequired }: TextInputProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input id={id} placeholder={placeholder} required={isRequired} className={inputStyles} />
    </InputLayout>
  )
}

TextInput.defaultProps = {
  isRequired: false,
}
