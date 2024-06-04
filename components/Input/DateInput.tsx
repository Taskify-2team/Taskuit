import DatePicker from 'react-datepicker'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { ko } from 'date-fns/locale'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'
import 'react-datepicker/dist/react-datepicker.css'

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  isRequired?: boolean
}

const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      placeholder="날짜를 입력해 주세요"
      className="input-layout w-[100%] pl-[4.6rem]"
    />
  )
})

CustomInput.displayName = 'CustomInput'

export default function DateInput({ id, label, isRequired }: DateInputProps) {
  const [date, setDate] = useState(new Date())

  const handleChange = (e: Date) => {
    setDate(e)
  }

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <DatePicker
        showTimeSelect
        selected={date}
        onChange={handleChange}
        locale={ko}
        dateFormat="yyyy.MM.dd HH:mm"
        customInput={<CustomInput />}
      />
    </InputLayout>
  )
}

DateInput.defaultProps = {
  isRequired: false,
}
