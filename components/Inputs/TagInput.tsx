/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { useLoadTheme } from '@/store/context/ThemeContext'

import InputLayout from './InputLayout'
import TagChip from '../Chips/TagChip'
import TagChipList from '../Chips/TagChipList'

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
  tagList?: string[]
  setTagList: Dispatch<SetStateAction<any>>
}

export default function TagInput({
  id,
  tagList = [],
  setTagList,
  label,
  isRequired,
}: TagInputProps) {
  const [text, setText] = useState('')
  const { theme } = useLoadTheme()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.nativeEvent.isComposing) return
      setText('')
      setTagList((prev: any) => ({
        ...prev,
        tags: [...(prev.tags || []), text],
      }))
    }
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  const handleDelete = (idx: number) => {
    const filterTag = tagList?.filter((tag) => tag !== tagList[idx])

    setTagList((prev: any) => ({
      ...prev,
      tags: filterTag,
    }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div
        className={`input-layout flex flex-wrap gap-x-[1.0rem] gap-y-[0.5rem] ${theme === 'dark' && 'border-var-black1 bg-var-black1'}`}
      >
        {tagList.length > 0 && <TagChipList tags={tagList} onDelete={handleDelete} />}
        <input
          id={id}
          value={text}
          placeholder="입력 후 Enter"
          onChange={handleChange}
          required={isRequired}
          className={`outline-none ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black1 text-var-gray3'}`}
          onKeyDown={handleKeyDown}
        />
      </div>
    </InputLayout>
  )
}
