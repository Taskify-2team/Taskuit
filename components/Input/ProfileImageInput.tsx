import Image from 'next/image'
import addButton from '@/public/icons/addLogo.svg'
import { ChangeEvent, useState } from 'react'

interface ProfileImageInputProps {
  currentImage?: string
}

export default function ProfileImageInput({ currentImage }: ProfileImageInputProps) {
  const [imageFile, setImageFile] = useState<FileList | null>(null)
  const [preview, setPreview] = useState(currentImage)

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div className="relative flex size-[18.2rem] shrink-0 items-center justify-center overflow-hidden rounded-[0.6rem] bg-var-gray2">
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
  )
}
