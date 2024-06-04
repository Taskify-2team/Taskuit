import Image from 'next/image'
import addButton from '@/public/icons/addLogo.svg'
import { ChangeEvent, useState } from 'react'
import InputLayout from './InputLayout'

export enum Size {
  m = 'm',
  s = 's',
}

interface ProfileImageInputProps {
  currentImage?: string
  id: string
  label: string
  isRequired?: boolean
  size: Size
  onChange: (file: File) => void
}

export default function ProfileImageInput({
  currentImage,
  size,
  id,
  label,
  isRequired,
  onChange,
}: ProfileImageInputProps) {
  const [preview, setPreview] = useState(currentImage)

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0]
      onChange(file)
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div
        className={`${size === Size.m ? 'size-[18.2rem]' : 'size-[7.6rem]'} relative flex size-[18.2rem] shrink-0 items-center justify-center overflow-hidden rounded-[0.6rem] bg-var-gray2`}
      >
        <div className="relative size-[3rem]">
          <Image fill src={addButton} alt="이미지 추가 버튼 이미지" />
        </div>
        {preview && (
          <div>
            <Image fill src={preview} alt="프로필 이미지" />
          </div>
        )}
        <input
          type="file"
          onChange={handleChangeFile}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </div>
    </InputLayout>
  )
}

ProfileImageInput.defaultProps = {
  currentImage: '',
}
