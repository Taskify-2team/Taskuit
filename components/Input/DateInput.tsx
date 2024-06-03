import DatePicker from 'react-datepicker'
import { forwardRef, useState } from 'react'
import { ko } from 'date-fns/locale'
import InputLayout from './InputLayout'
import { inputStyles } from './inputstyles'
import 'react-datepicker/dist/react-datepicker.css'

interface DateInputProps {
  id: string
  label: string
  isRequired?: boolean
}

export default function DateInput({ id, label, isRequired }: DateInputProps) {
  const [startDate, setStartDate] = useState(new Date())

  const handleChange = (e: Date) => {
    setStartDate(e)
  }

  const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        placeholder="날짜를 입력해 주세요"
        className={`${inputStyles} w-[100%] pl-[4.6rem]`}
      />
    )
  })

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <DatePicker
        showTimeSelect
        selected={startDate}
        onChange={handleChange}
        locale={ko}
        dateFormat="yyyy.MM.dd HH:mm"
        customInput={<CustomInput />}
      />
    </InputLayout>
  )
}
