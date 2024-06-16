/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageInput, TextInput, ShortButton } from '@/components'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ProfileBody } from '@/pages/mypage'
import { useAppDispatch } from '@/hooks/useApp'
import { AxiosError, AxiosResponse } from 'axios'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'

interface EditProfileProps {
  error: AxiosError<any> | null
  imageError: AxiosError<any> | null
  result: AxiosResponse | null
  onSubmit: (e: FormEvent, nickname: string) => Promise<void>
  imageFile?: File | null
  setImageFile: (file: File | null) => void
  profileBody: ProfileBody
}

export default function EditProfile({
  error,
  imageError,
  result,
  onSubmit,
  imageFile,
  setImageFile,
  profileBody,
}: EditProfileProps) {
  const [nickName, setNickName] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }

  const handleFileInputValue = (file: File | null) => {
    setImageFile(file)
  }

  useEffect(() => {
    setDisabled(imageFile === undefined && profileBody.nickname === nickName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickName, imageFile])

  useEffect(() => {
    setNickName(profileBody.nickname)
  }, [profileBody])

  useEffect(() => {
    if (error) {
      const errorMessage = error?.response?.data?.message ?? ''
      dispatch(openMyToast({ text: errorMessage, warn: true }))
    } else if (result?.status === 200) {
      dispatch(openToast('successUpdateProfile'))
      setDisabled(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, error])

  return (
    <form
      onSubmit={(e) => onSubmit(e, nickName)}
      className={`flex w-[62rem] flex-col rounded-[0.8rem] p-[2.8rem] sm:w-[calc(100vw-9.1rem)] sm:p-[2rem] md:w-[calc(100vw-20rem)] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'}`}
    >
      <h3
        className={`mb-[3.2rem] text-[2.4rem] font-bold sm:text-[2rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
      >
        {language === 'ko' ? '프로필' : 'Profile'}
      </h3>
      <div className="mb-[2rem] flex gap-[1.6rem] sm:flex-col">
        <ImageInput
          id="image"
          label={language === 'ko' ? '이미지' : 'Image'}
          size="m"
          currentImage={profileBody.profileImageUrl}
          onChange={handleFileInputValue}
        />
        <div className="flex w-full flex-col gap-[1.8rem]">
          <TextInput
            id="email"
            label={language === 'ko' ? '이메일' : 'Email'}
            value={profileBody.email}
            isReadOnly
            placeholder="email@gmail.com"
          />
          <TextInput
            id="nickname"
            label={language === 'ko' ? '닉네임' : 'Nickname'}
            value={nickName}
            onChange={handleInputValue}
            ref={inputRef}
            placeholder="닉네임을 입력하세요"
          />
        </div>
      </div>
      <div className="self-end">
        <ShortButton
          color="purple"
          type="submit"
          isDisabled={isDisabled}
          text={language === 'ko' ? '저장' : 'save'}
        />
      </div>
    </form>
  )
}
