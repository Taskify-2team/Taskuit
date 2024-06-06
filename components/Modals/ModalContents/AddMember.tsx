import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useState } from 'react'
import { inviteUser } from '@/service/dashboards'

interface AddMemberProps {
  dashboardId: number
}

export default function AddMember({ dashboardId }: AddMemberProps) {
  const [inviteBody, setInviteBody] = useState({
    email: '',
    dashboardId,
  })
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(inviteUser)

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInviteBody({
      ...inviteBody,
      email: e.target.value,
    })
  }

  const submitAddMember = async () => {
    const result = await requestFunction(inviteBody)
    if (!result) return
    dispatch(closeModal())
    /** 요청 성공 시 토스트나 모달 띄워주는 코드 */
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submitAddMember()
      }}
      className="modal-layout"
    >
      <h3 className="text-[2.4rem] font-bold">초대하기</h3>
      <TextInput
        id="email"
        label="이메일"
        type="email"
        placeholder="taskify@gmail.com"
        value={inviteBody.email}
        onChange={handleInputValue}
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="초대" onClick={submitAddMember} />
      </div>
    </form>
  )
}
