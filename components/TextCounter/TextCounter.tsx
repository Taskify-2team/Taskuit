import { useLoadTheme } from '@/store/context/ThemeContext'
import { useEffect, useState } from 'react'

interface TextCounterProps {
  text: string
  length: number
}

export default function TextCounter({ text, length }: TextCounterProps) {
  const { theme } = useLoadTheme()
  const [textColor, setTextColor] = useState('text-var-black4')

  useEffect(() => {
    if (theme === 'dark') {
      setTextColor('text-var-gray3')
    }
  }, [theme])

  return (
    <div className="absolute bottom-[-2rem] right-0">
      <p
        className={`${text.length === length ? 'text-var-red' : textColor} text-[1.2rem]`}
      >{`${text.length}/${length}`}</p>
    </div>
  )
}
