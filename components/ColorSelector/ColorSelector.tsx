import Image from 'next/image'
import check from '@/public/icons/checkWhite.svg'
import plusIcon from '@/public/icons/plusIcon.svg'
import { useEffect, useRef, useState } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'
import { useLoadTheme } from '@/store/context/ThemeContext'

interface ColorSelectorProps {
  boardColor: string
  handleClick: (color: string) => void
}

export default function ColorSelector({ boardColor, handleClick }: ColorSelectorProps) {
  const preparedColor = ['#7ac555', '#760dde', '#ffa500', '#76a5ea', '#e876ea']
  const [togglePicker, setTogglePicker] = useState(false)
  const [pickColor, setPickColor] = useColor('#d9d9d9')
  const pickerRef = useRef<HTMLDivElement>(null)
  const { theme } = useLoadTheme()

  const handleCustomColor = () => {
    if (togglePicker) {
      handleClick(pickColor.hex)
      setTogglePicker(false)
    } else {
      setTogglePicker(true)
    }
  }
  const handleClickOutside = (e: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
      handleClick(pickColor.hex)
      setTogglePicker(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <ul className="relative flex gap-[1rem]">
      {preparedColor.map((color) => (
        <li
          key={color}
          onClick={() => {
            handleClick(color)
          }}
          className="flex size-[3rem] cursor-pointer justify-center rounded-[50%]"
          style={{ backgroundColor: color }}
          role="presentation"
        >
          {!togglePicker && boardColor === color && <Image src={check} alt="체크 아이콘" />}
        </li>
      ))}
      <div
        className={`flex size-[3rem] cursor-pointer items-center justify-center rounded-[50%] border border-solid ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black2'}`}
        onClick={() => handleCustomColor()}
        style={{ backgroundColor: pickColor.hex || boardColor }}
      >
        {togglePicker || !preparedColor.includes(boardColor) ? (
          <Image src={check} alt="체크 아이콘" />
        ) : (
          <Image src={plusIcon} alt="플러스 아이콘" width={15} height={15} />
        )}
      </div>
      {togglePicker && (
        <div className="absolute top-[5rem]" ref={pickerRef}>
          <ColorPicker
            color={pickColor}
            onChange={setPickColor}
            height={100}
            // eslint-disable-next-line react/jsx-boolean-value
            hideAlpha={true}
            hideInput={['rgb', 'hsv']}
          />
        </div>
      )}
    </ul>
  )
}
