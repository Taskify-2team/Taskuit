import { AppLayout, MyPageLayout, EditProfile, EditPassword } from '@/components'
import { useState } from 'react'
import axios from '@/service/instance'

export interface ProfileBody {
  nickname: string
  profileImageUrl: File | null
}

export interface PasswordBody {
  currentPassword: string
  newPassword: string
  checkNewPassword: string
}

export default function MyPage() {
  const [profileBody, setProfileBody] = useState<ProfileBody>({
    nickname: '',
    profileImageUrl: null,
  })
  const [passwordBody, setPasswordBody] = useState({
    currentPassword: '',
    newPassword: '',
    checkNewPassword: '',
  })

  const submitNewProfile = () => {
    /** 새 프로필 서브밋 보내기 */
  }

  const validateCurrentPassword = () => {
    /** api에게 비번 검사받기 */
  }

  const submitNewPassword = () => {
    validateCurrentPassword()
    /** 새 비번 서브밋 보내기 */
  }

  return (
    <AppLayout>
      <MyPageLayout
        EditProfile={
          <EditProfile
            onSubmit={submitNewProfile}
            profileBody={profileBody}
            setProfileBody={setProfileBody}
          />
        }
        EditPassword={
          <EditPassword
            onSubmit={submitNewPassword}
            passwordBody={passwordBody}
            setPasswordBody={setPasswordBody}
          />
        }
      />
    </AppLayout>
  )
}
