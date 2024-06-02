import { PurpleButton } from '@/components'
import TextInput from '@/components/Input/TextInput'

export default function EditPassword() {
  return (
    <div className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">비밀번호 변경</h3>
      <div className="mb-[2.4rem] flex flex-col gap-[2rem]">
        <TextInput id="currentPassword" label="현재 비밀번호" placeholder="현재 비밀번호 입력" />
        <TextInput id="nextPassword" label="새 비밀번호" placeholder="새 비밀번호 입력" />
        <TextInput id="checkNextPassword" label="새 비밀번호 확인" placeholder="새 비밀번호 입력" />
      </div>
      <div className="self-end">
        <PurpleButton text="변경" />
      </div>
    </div>
  )
}
