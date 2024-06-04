import { AppLayout, MyPageLayout, EditProfile, EditPassword } from '@/components'
import { useState } from 'react'

export interface ProfileBody {
  nickname: string
  profileImageUrl: File | null
}

export default function MyPage() {
  const [profileBody, setProfileBody] = useState<ProfileBody>({
    nickname: '',
    profileImageUrl: null,
  })

  return (
    <AppLayout>
      <MyPageLayout
        EditProfile={<EditProfile setProfileBody={setProfileBody} profileBody={profileBody} />}
        EditPassword={<EditPassword />}
      />
    </AppLayout>
  )
}
