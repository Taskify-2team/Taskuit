import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { inviteUser } from '@/service/dashboards'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { Invitation } from '@/types/invitation'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'

export interface AddMemberProps {
  dashboardId: number
  setInviteList: Dispatch<SetStateAction<Invitation[]>>
}

export default function AddMember({ dashboardId, setInviteList }: AddMemberProps) {
  const [inviteBody, setInviteBody] = useState({
    email: '',
    dashboardId,
  })
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(inviteUser)
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

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
    dispatch(openMyToast({ text: '초대를 보냈습니다!', warn: false }))
    setInviteList((prev) => [result.data, ...prev])
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submitAddMember()
      }}
      className={`modal-layout ${theme === 'dark' && 'bg-var-black2'}`}
    >
      <h3 className={`text-[2.4rem] font-bold ${theme === 'dark' && 'text-var-white'}`}>
        {language === 'ko' ? '초대하기' : 'Invite'}
      </h3>
      <TextInput
        id="email"
        label={language === 'ko' ? '이메일' : 'Email'}
        type="email"
        placeholder="taskify@gmail.com"
        value={inviteBody.email}
        onChange={handleInputValue}
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton
          color="white"
          text={language === 'ko' ? '취소' : 'Cancel'}
          onClick={() => dispatch(closeModal())}
        />
        <ShortButton
          color="purple"
          text={language === 'ko' ? '초대' : 'Invite'}
          onClick={submitAddMember}
        />
      </div>
    </form>
  )
}
