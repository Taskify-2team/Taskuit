/* eslint-disable @typescript-eslint/dot-notation */
import { ShortButton } from '@/components'
import TextInput from '@/components/Inputs/TextInput'
import { PasswordBody } from '@/pages/mypage'
import { Dispatch, SetStateAction, ChangeEvent } from 'react'

interface EditPasswordProps {
  onSubmit: () => void
  passwordBody: PasswordBody
  setPasswordBody: Dispatch<SetStateAction<PasswordBody>>
}

export default function EditPassword({
  onSubmit,
  passwordBody,
  setPasswordBody,
}: EditPasswordProps) {
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordBody({
      ...passwordBody,
      [e.target['name']]: e.target.value,
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]"
    >
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">비밀번호 변경</h3>
      <div className="mb-[2.4rem] flex flex-col gap-[2rem]">
        <TextInput
          id="currentPassword"
          name="currentPassword"
          value={passwordBody.currentPassword}
          onChange={handleInputValue}
          label="현재 비밀번호"
          placeholder="현재 비밀번호 입력"
        />
        <TextInput
          id="nextPassword"
          name="newPassword"
          value={passwordBody.newPassword}
          onChange={handleInputValue}
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
        />
        <TextInput
          id="checkNextPassword"
          name="checkNewPassword"
          value={passwordBody.checkNewPassword}
          onChange={handleInputValue}
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
        />
      </div>
      <div className="self-end">
        <ShortButton color="purple" onClick={onSubmit} text="변경" />
      </div>
    </form>
  )
}
