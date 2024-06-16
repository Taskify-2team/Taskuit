/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image'
import cancelBtn from '@/public/icons/cancel.svg'
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import hexToRgb from '@/utils/hexToRgb'
import { Tag } from '@/service/tag'
import { useLoadTheme } from '@/store/context/ThemeContext'
import TagColorSelector from '../ColorSelector/TagColorSelector'

interface TagChipProps {
  tag: Tag
  idx?: number
  onDelete?: MouseEventHandler<HTMLButtonElement>
  setMyTagBody?: Dispatch<SetStateAction<any>>
}

export default function TagChip({ tag, idx, setMyTagBody, onDelete }: TagChipProps) {
  const [customColor, setCustomColor] = useState(false)
  const { theme } = useLoadTheme()
  const { r, g, b } = hexToRgb(tag.color)

  const handleOpenCustomColor = () => {
    if (onDelete) setCustomColor(true)
  }

  const handleCloseCustomColor = () => {
    if (onDelete) setCustomColor(false)
  }

  return (
    <li
      onClick={handleOpenCustomColor}
      className={`${onDelete ? 'cursor-pointer' : ''} w-fit animate-slideDown rounded-[0.4rem] px-[0.6rem] py-[0.4rem] text-[1.2rem]`}
      style={{ backgroundColor: `rgba(${r},${g},${b}, 0.18)` }}
    >
      <div className="text-[1.2rem]" style={{ color: tag.color }}>
        {tag.text}
      </div>
      {onDelete && (
        <button
          onClick={onDelete}
          type="button"
          className={`${theme === 'normal' ? 'bg-var-gray2 hover:bg-var-gray3' : 'bg-var-black2 hover:bg-var-black3'} absolute right-[-0.5rem] top-[-0.5rem] rounded-full p-[0.3rem]`}
        >
          <div className="relative size-[0.7rem] opacity-80">
            <Image fill src={cancelBtn} alt="삭제버튼" />
          </div>
        </button>
      )}
      {customColor && idx !== undefined && setMyTagBody && (
        <TagColorSelector setMyTagBody={setMyTagBody} idx={idx} onClose={handleCloseCustomColor} />
      )}
    </li>
  )
}
