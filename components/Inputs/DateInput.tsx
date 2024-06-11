import DatePicker from 'react-datepicker'
import { Dispatch, SetStateAction, forwardRef, useEffect, useState } from 'react'
import { ko } from 'date-fns/locale'
import { formatDatePicker, parseDatePicker } from '@/utils/formatDate'
import { useLoadTheme } from '@/store/context/ThemeContext'
import InputLayout from './InputLayout'
import 'react-datepicker/dist/react-datepicker.css'

interface DateInputProps {
  id: string
  label: string
  isRequired?: boolean
  onChange: Dispatch<SetStateAction<string>>
  name: string
  value: string | undefined
}

const CustomInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { theme } = useLoadTheme()

  return (
    <input
      {...props}
      ref={ref}
      type="text"
      placeholder="날짜를 입력해 주세요"
      className={`input-layout w-[100%] pl-[4.6rem] ${theme === 'dark' && 'border-var-black1 bg-var-black1 text-var-gray3'}`}
    />
  )
})

CustomInput.displayName = 'CustomInput'

export default function DateInput({
  id,
  label,
  isRequired = false,
  onChange,
  name,
  value,
}: DateInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? parseDatePicker(value) : null,
  )

  useEffect(() => {
    if (selectedDate) {
      const newDate = formatDatePicker(selectedDate)
      onChange(newDate)
    }
  }, [selectedDate, onChange])

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <DatePicker
        showTimeSelect
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        name={name}
        locale={ko}
        dateFormat="yyyy.MM.dd HH:mm"
        customInput={<CustomInput />}
      />
    </InputLayout>
  )
}
