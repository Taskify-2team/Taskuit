/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { PasswordBody } from '@/pages/mypage'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { AxiosError, AxiosResponse } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface EditPasswordProps {
  error: AxiosError<any> | null
  pending: boolean
  result: AxiosResponse
  onSubmit: (e: FormEvent, newPasswordBody: PasswordBody) => Promise<void>
}

export default function EditPassword({ error, pending, result, onSubmit }: EditPasswordProps) {
  const [newPasswordBody, setNewPasswordBody] = useState({
    password: '',
    newPassword: '',
  })
  const [passwordCheck, setPasswordCheck] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const dispatch = useAppDispatch()

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
  }, [pending, error, result])

  return (
    <form
      onSubmit={(e) => onSubmit(e, newPasswordBody)}
      className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]"
    >
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">비밀번호 변경</h3>
      <div className="mb-[2.4rem] flex flex-col gap-[2rem]">
        <TextInput
          id="currentPassword"
          name="currentPassword"
          value={newPasswordBody.password}
          onChange={handleCurrentPasswordValue}
          label="현재 비밀번호"
          placeholder="현재 비밀번호 입력"
        />
        <TextInput
          id="nextPassword"
          name="newPassword"
          value={newPasswordBody.newPassword}
          onChange={handleNewPasswordValue}
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
        />
        <TextInput
          id="checkNextPassword"
          name="checkNewPassword"
          value={passwordCheck}
          onChange={handlePasswordCheckValue}
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
        />
      </div>
      <div className="self-end">
        <ShortButton color="purple" type="submit" isDisabled={isDisabled} text="변경" />
      </div>
    </form>
  )
}
