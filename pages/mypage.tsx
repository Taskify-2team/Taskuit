import { AppLayout, MyPageLayout, EditProfile, EditPassword } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { getUserInfo, postProfileImage, updateUserProfile } from '@/service/users'
import { openToast } from '@/store/reducers/toastReducer'
import { useEffect, useState } from 'react'

export interface ProfileBody {
  nickname: string
  email: string
  profileImageUrl: string
}

export interface PasswordBody {
  currentPassword: string
  newPassword: string
  checkNewPassword: string
}

export default function MyPage() {
  const [profileBody, setProfileBody] = useState<ProfileBody>({
    nickname: '',
    email: '',
    profileImageUrl: '',
  })
  const [imageFile, setImageFile] = useState<File>()
  const [passwordBody, setPasswordBody] = useState({
    currentPassword: '',
    newPassword: '',
    checkNewPassword: '',
  })
  const { requestFunction: getUserInfoRequest } = useAsync(getUserInfo)
  const { requestFunction: updateProfileImage } = useAsync(postProfileImage)
  const { requestFunction: updateProfile } = useAsync(updateUserProfile)
  const dispatch = useAppDispatch()

  const handleUserInfo = async () => {
    const result = await getUserInfoRequest()
    if (!result) return

    const { nickname, email, profileImageUrl } = result
    setProfileBody({
      ...profileBody,
      nickname,
      email,
      profileImageUrl,
    })
  }

  const handleEditProfileSubmit = async () => {
    let profileimageUrl

    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      const result = await updateProfileImage(formData)
      profileimageUrl = result?.profileImageUrl
    }

    const result = await updateProfile({
      nickname: profileBody.nickname,
      profileImageUrl: profileimageUrl,
    })
    if (!result) return

    dispatch(openToast('profileUpdateSuccess'))
  }

  const validateCurrentPassword = () => {
    /** api에게 비번 검사받기 */
  }

  const submitNewPassword = () => {
    validateCurrentPassword()
    /** 새 비번 서브밋 보내기 */
  }

  useEffect(() => {
    handleUserInfo()
  }, [])

  return (
    <AppLayout>
      <MyPageLayout
        EditProfile={
          <EditProfile
            onSubmit={handleEditProfileSubmit}
            setImageFile={setImageFile}
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
