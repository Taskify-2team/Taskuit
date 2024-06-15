/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image'
import cancelButton from '@/public/icons/cancel.svg'
import addButton from '@/public/icons/addLogo.svg'
import plusIcon from '@/public/icons/editFill.svg'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useLoadTheme } from '@/store/context/ThemeContext'
import InputLayout from './InputLayout'

interface ImageInputProps {
  currentImage?: string
  id: string
  label: string
  isRequired?: boolean
  size: 's' | 'm'
  onChange: (file: File | null) => void
}

export default function ImageInput({
  currentImage = '',
  size,
  id,
  label,
  isRequired = false,
  onChange,
}: ImageInputProps) {
  const [preview, setPreview] = useState(currentImage)
  const [onMouse, setOnMouse] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useLoadTheme()

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setPreview(URL.createObjectURL(file))
    onChange(file)
  }

  const handleDeleteFile = () => {
    onChange(null)
    setPreview('')
  }

  useEffect(() => {
    setPreview(currentImage)
  }, [currentImage])

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      {preview && (
        <button
          type="button"
          onClick={handleDeleteFile}
          className={`${theme === 'normal' ? 'bg-var-gray2 hover:bg-var-gray3' : 'bg-var-black3 hover:bg-var-black4'} absolute right-[-1rem] top-[2.5rem] z-50 rounded-full p-[0.5rem]`}
        >
          <div className={`${size === 'm' ? 'size-[1.5rem]' : 'size-[1rem]'} relative`}>
            <Image fill src={cancelButton} alt="이미지 삭제 버튼" />
          </div>
        </button>
      )}
      <div
        onMouseEnter={() => setOnMouse(true)}
        onMouseLeave={() => setOnMouse(false)}
        className={`${size === 'm' ? 'size-[18.2rem] sm:size-[10rem]' : 'size-[7.6rem]'} relative flex size-[18.2rem] shrink-0 items-center justify-center overflow-hidden rounded-[0.6rem] ${theme === 'normal' ? 'bg-var-gray2 hover:bg-var-image-hover' : 'bg-var-black1 hover:bg-var-gray5'}`}
      >
        {onMouse && preview && (
          <div className="relative z-10 size-[3rem]" onClick={() => inputRef.current?.click()}>
            <Image fill src={plusIcon} alt="이미지 수정 버튼 이미지" />
          </div>
        )}
        {preview ? (
          <div>
            <Image fill src={preview} style={{ objectFit: 'cover' }} alt="프로필 이미지" />
          </div>
        ) : (
          <div className="relative size-[3rem] cursor-pointer">
            <Image fill src={addButton} alt="이미지 추가 버튼 이미지" />
          </div>
        )}
        <input
          type="file"
          onChange={handleChangeFile}
          className="absolute inset-0 cursor-pointer opacity-0"
          ref={inputRef}
        />
      </div>
    </InputLayout>
  )
}
