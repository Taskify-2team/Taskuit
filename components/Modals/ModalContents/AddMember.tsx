import ShortButton from '@/components/Buttons/ShortButton'
import TextInput from '@/components/Input/TextInput'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useState } from 'react'

export default function AddMember() {
  const [inviteBody, setInviteBody] = useState('')
  const dispatch = useAppDispatch()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInviteBody(e.target.value)
  }

  const submitAddMember = () => {
    /** 멤버 초대 요청 보내기 */
  }

  return (
    <form onSubmit={submitAddMember} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">초대하기</h3>
      <TextInput
        id="email"
        label="이메일"
        type="email"
        placeholder="taskify@gmail.com"
        value={inviteBody}
        onChange={handleInputValue}
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="초대" onClick={submitAddMember} />
      </div>
    </form>
  )
}
