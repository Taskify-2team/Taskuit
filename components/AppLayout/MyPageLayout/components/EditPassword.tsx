/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { PasswordBody } from '@/pages/mypage'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { AxiosError, AxiosResponse } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface EditPasswordProps {
  error: AxiosError<any> | null
  result: AxiosResponse | null
  onSubmit: (e: FormEvent, newPasswordBody: PasswordBody) => Promise<void>
}

export default function EditPassword({ error, result, onSubmit }: EditPasswordProps) {
  const [newPasswordBody, setNewPasswordBody] = useState({
    password: '',
    newPassword: '',
  })
  const [passwordCheck, setPasswordCheck] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const handleInitPasswordValue = () => {
    setNewPasswordBody({
      ...newPasswordBody,
      password: '',
      newPassword: '',
    })
    setPasswordCheck('')
    setDisabled(true)
  }

  const handleCurrentPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordBody({
      ...newPasswordBody,
      password: e.target.value,
    })
  }

  const handleNewPasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordBody({
      ...newPasswordBody,
      newPassword: e.target.value,
    })
  }

  const handlePasswordCheckValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value)
  }

  useEffect(() => {
    if (newPasswordBody.password && newPasswordBody.newPassword && passwordCheck) {
      setDisabled(newPasswordBody.newPassword !== passwordCheck)
    }
  }, [newPasswordBody, passwordCheck])

  useEffect(() => {
    if (error) {
      const errorMessage = error?.response?.data?.message ?? ''
      dispatch(openMyToast({ text: errorMessage, warn: true }))
    } else if (result?.status === 204) {
      dispatch(openToast('successUpdatePassword'))
      handleInitPasswordValue()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, result])

  return (
    <form
      onSubmit={(e) => onSubmit(e, newPasswordBody)}
      className={`flex w-[62rem] flex-col rounded-[0.8rem] p-[2.8rem] sm:w-[calc(100vw-9.1rem)] md:w-[calc(100vw-20rem)] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'}`}
    >
      <h3
        className={`mb-[3.2rem] text-[2.4rem] font-bold sm:mb-[2.4rem] sm:text-[2rem] ${theme === 'normal' ? 'text-var-black' : 'text-var-gray3'}`}
      >
        {language === 'ko' ? '비밀번호 변경' : 'Change Password'}
      </h3>
      <div className="mb-[2.4rem] flex flex-col gap-[2rem]">
        <TextInput
          id="currentPassword"
          name="currentPassword"
          value={newPasswordBody.password}
          onChange={handleCurrentPasswordValue}
          label={language === 'ko' ? '현재 비밀번호' : 'Current Password'}
          placeholder={language === 'ko' ? '현재 비밀번호 입력' : 'Enter current password'}
        />
        <TextInput
          id="nextPassword"
          name="newPassword"
          value={newPasswordBody.newPassword}
          onChange={handleNewPasswordValue}
          label={language === 'ko' ? '새 비밀번호' : 'New Password'}
          placeholder={language === 'ko' ? '새 비밀번호 입력' : 'Enter New password'}
        />
        <TextInput
          id="checkNextPassword"
          name="checkNewPassword"
          value={passwordCheck}
          onChange={handlePasswordCheckValue}
          label={language === 'ko' ? '새 비밀번호 확인' : 'Check new Password'}
          placeholder={language === 'ko' ? '새 비밀번호 입력' : 'Enter New password'}
        />
      </div>
      <div className="self-end">
        <ShortButton
          color="purple"
          type="submit"
          isDisabled={isDisabled}
          text={language === 'ko' ? '변경' : 'Change'}
        />
      </div>
    </form>
  )
}
