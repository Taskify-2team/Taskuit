/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image'
import cancelBtn from '@/public/icons/cancel.svg'
import { MouseEventHandler, useState } from 'react'
import TagColorPicker from './TagColorPicker'

interface TagChipProps {
  tag: string
  onDelete?: MouseEventHandler<HTMLButtonElement>
}

export default function TagChip({ tag, onDelete }: TagChipProps) {
  const [customColor, setCustomColor] = useState(false)
  const tagColor = [
    { bg: '#F9EEE3', text: '#D58D49' },
    { bg: '#F7DBF0', text: '#D549B6' },
    { bg: '#DBE6F7', text: '#4981D5' },
    { bg: '#E7F7DB', text: '#86D549' },
  ]

  const handleOpenCustomColor = () => {
    if (onDelete) setCustomColor(true)
  }

  const handleCloseCustomColor = () => {
    if (onDelete) setCustomColor(false)
  }

  const randomPick = Math.floor(Math.random() * 4)
  return (
    <li
      onClick={handleOpenCustomColor}
      className="relative w-fit rounded-[0.4rem] px-[0.6rem] py-[0.4rem] text-[1.2rem]"
      style={{ backgroundColor: tagColor[randomPick].bg, color: tagColor[randomPick].text }}
    >
      {tag}
      {onDelete && (
        <button
          onClick={onDelete}
          type="button"
          className="absolute right-[-0.5rem] top-[-0.5rem] rounded-full bg-var-gray1 p-[0.3rem] hover:bg-var-gray2"
        >
          <div className="relative size-[0.7rem] opacity-80">
            <Image fill src={cancelBtn} alt="삭제버튼" />
          </div>
        </button>
      )}
      <div className="absolute bottom-[-7.28rem] left-[-9rem] z-50">
        {customColor && <TagColorPicker onMouseLeave={handleCloseCustomColor} />}
      </div>
    </li>
  )
}
