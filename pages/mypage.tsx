import { AppLayout, MyPageLayout, EditProfile, EditPassword } from '@/components'
import ProgressChip from '@/components/Chips/ProgressChip'
import { useState } from 'react'

export interface ProfileBody {
  email: string
  nickname: string
}

export default function MyPage() {
  const [profileBody, setProfileBody] = useState<ProfileBody>({
    email: '',
    nickname: '',
  })

  return (
    <AppLayout>
      <MyPageLayout
        EditProfile={<EditProfile setProfileBody={setProfileBody} profileBody={profileBody} />}
        EditPassword={<EditPassword />}
      />
      <ProgressChip progress="To Do" />
    </AppLayout>
  )
}
