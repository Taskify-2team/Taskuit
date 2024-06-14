/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image'
import cancelBtn from '@/public/icons/cancel.svg'
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import hexToRgb from '@/utils/hexToRgb'
import TagColorSelector from '../ColorSelector/TagColorSelector'
import { TagsType } from '../Modals/ModalContents/EditToDo'

interface TagChipProps {
  tag: TagsType
  idx?: number
  onDelete?: MouseEventHandler<HTMLButtonElement>
  setMyTagBody?: Dispatch<SetStateAction<any>>
}

export default function TagChip({ tag, idx, setMyTagBody, onDelete }: TagChipProps) {
  const [customColor, setCustomColor] = useState(false)
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
      className="relative w-fit rounded-[0.4rem] px-[0.6rem] py-[0.4rem] text-[1.2rem]"
      style={{ backgroundColor: `rgba(${r},${g},${b}, 0.18)` }}
    >
      <div className="text-[1.2rem]" style={{ color: tag.color }}>
        {tag.text}
      </div>
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
      <div className="absolute bottom-[-5.5rem] left-0 z-50">
        {customColor && idx && setMyTagBody && (
          <TagColorSelector
            setMyTagBody={setMyTagBody}
            idx={idx}
            onClose={handleCloseCustomColor}
          />
        )}
      </div>
    </li>
  )
}
