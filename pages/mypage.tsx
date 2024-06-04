import { AppLayout, MyPageLayout, EditProfile, EditPassword, TagInput } from '@/components'
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
      <TagInput id="1" label="태그" />
    </AppLayout>
  )
}
