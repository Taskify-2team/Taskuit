import DatePicker from 'react-datepicker'
import InputLayout from './InputLayout'
import { inputStyles } from './inputstyles'
import Calendar from '@/public/icons/calendar.svg'
import { useState } from 'react'

interface DateInputProps {
  id: string
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function DateInput({ id, label, placeholder, isRequired }: DateInputProps) {
  const [startDate, setStartDate] = useState(new Date())
  return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
}
