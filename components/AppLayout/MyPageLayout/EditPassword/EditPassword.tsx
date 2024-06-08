/* eslint-disable @typescript-eslint/dot-notation */
import { ShortButton, TextInput } from '@/components'
import { PasswordBody } from '@/pages/mypage'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface EditPasswordProps {
  onSubmit: (e: FormEvent, newPasswordBody: PasswordBody) => void
  passwordBody: PasswordBody
}

export default function EditPassword({ onSubmit, passwordBody }: EditPasswordProps) {
  const [newPasswordBody, setNewPasswordBody] = useState({
    password: '',
    newPassword: '',
  })
  const [passwordCheck, setPasswordCheck] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const { handleSubmit, control } = useForm<PasswordBody>()

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
