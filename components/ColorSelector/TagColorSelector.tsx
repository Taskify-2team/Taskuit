/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Tag } from '@/service/tag'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface TagColorSelectorProps {
  idx: number
  onClose: () => void
  setMyTagBody: Dispatch<SetStateAction<Tag[]>>
}

export default function TagColorSelector({ idx, onClose, setMyTagBody }: TagColorSelectorProps) {
  const colorPickerRef = useRef<HTMLUListElement>(null)
  const tagColor = [
    { color: '#D58D49' },
    { color: '#D549B6' },
    { color: '#4981D5' },
    { color: '#86D549' },
  ]

  const handleOutsideClick = (e: MouseEvent) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  const handleCustomColor = (preparedColor: number) => {
    setMyTagBody((prev: Tag[]) => {
      const updatedTags = prev.map((tag, i) =>
        i === idx ? { text: tag.text, color: tagColor[preparedColor].color } : tag,
      )
      return updatedTags
    })
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <ul
      ref={colorPickerRef}
      className="flex animate-slideDown gap-[1.2rem] rounded-[0.6rem] border border-var-gray3 bg-var-white p-[1rem] shadow-lg"
    >
      {tagColor.map((color, i) => (
        <li
          key={i}
          onClick={() => handleCustomColor(i)}
          className="size-[2rem] cursor-pointer rounded-[1rem]"
          style={{ backgroundColor: color.color }}
        />
      ))}
      <li className="absolute left-[1.9rem] top-[-0.8rem] size-[1.5rem] translate-x-[-1.4rem] rotate-45 border-l border-t border-var-gray3 bg-var-white" />
    </ul>
  )
}
