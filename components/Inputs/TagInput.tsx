/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { Tag } from '@/service/tag'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import InputLayout from './InputLayout'
import TagChip from '../Chips/TagChip'

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired?: boolean
  myTagBody?: Tag[]
  setMyTagBody: Dispatch<SetStateAction<Tag[]>>
}

export default function TagInput({
  id,
  myTagBody,
  setMyTagBody,
  label,
  isRequired,
}: TagInputProps) {
  const [text, setText] = useState('')
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const handleDelete = (idx: number) => {
    const filterTag = myTagBody?.filter((tag) => tag !== myTagBody[idx])
    if (filterTag) {
      setMyTagBody(filterTag)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.nativeEvent.isComposing || !text) return
      setText('')
      setMyTagBody((prev: any) => [...prev, { text, color: '#4981D5' }])
    }

    if (e.key === ' ') {
      e.preventDefault()
      if (e.nativeEvent.isComposing || !text) return
    }

    if (e.key === 'Backspace') {
      if (myTagBody && !text) {
        handleDelete(myTagBody.length - 1)
      }
    }
  }

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div
        className={`input-layout flex flex-wrap gap-x-[1.0rem] gap-y-[0.5rem] ${theme === 'dark' && 'border-var-black1 bg-var-black1'}`}
      >
        {myTagBody &&
          myTagBody.length > 0 &&
          myTagBody?.map((tag, idx) => (
            <TagChip
              key={idx}
              tag={tag}
              idx={idx}
              setMyTagBody={setMyTagBody}
              onDelete={() => handleDelete(idx)}
            />
          ))}
        <input
          id={id}
          value={text}
          autoComplete="off"
          placeholder={language === 'ko' ? '입력 후 Enter' : 'Enter after entering'}
          maxLength={20}
          onChange={handleChange}
          required={isRequired}
          className={`outline-none ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black1 text-var-gray3'}`}
          onKeyDown={handleKeyDown}
        />
      </div>
    </InputLayout>
  )
}
