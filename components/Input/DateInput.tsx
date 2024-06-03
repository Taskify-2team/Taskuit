import InputLayout from './InputLayout'
import { inputStyles } from './inputstyles'
import Calendar from '@/public/icons/calendar.svg'

interface DateInputProps {
  id: string
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function DateInput({ id, label, placeholder, isRequired }: DateInputProps) {
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <input id={id} placeholder={placeholder} required={isRequired} className={inputStyles} />
    </InputLayout>
  )
}
