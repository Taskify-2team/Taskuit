import { AppLayout, MyPageLayout, EditProfile, EditPassword } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { updatePassword } from '@/service/auth'
import { getUserInfo, postProfileImage, updateUserProfile } from '@/service/users'
import { openToast } from '@/store/reducers/toastReducer'
import { FormEvent, useEffect, useState } from 'react'

export interface ProfileBody {
  nickname: string
  email: string
  profileImageUrl: string
}

export interface PasswordBody {
  password: string
  newPassword: string
}

export default function MyPage() {
  const [profileBody, setProfileBody] = useState<ProfileBody>({
    nickname: '',
    email: '',
    profileImageUrl: '',
  })
  const [imageFile, setImageFile] = useState<File>()
  const [passwordBody, setPasswordBody] = useState({
    password: '',
    newPassword: '',
  })
  const { requestFunction: getUserInfoReq } = useAsync(getUserInfo)
  const { requestFunction: postProfileImageReq } = useAsync(postProfileImage)
  const { requestFunction: updateUserProfileReq } = useAsync(updateUserProfile)
  const { requestFunction: updatePasswordReq } = useAsync(updatePassword)
  const dispatch = useAppDispatch()

  const handleUserInfo = async () => {
    const result = await getUserInfoReq()
    if (!result) return

    const { nickname, email, profileImageUrl } = result
    setProfileBody({
      ...profileBody,
      nickname,
      email,
      profileImageUrl,
    })
  }

  const handleEditProfileSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let profileimageUrl

    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      const result = await postProfileImageReq(formData)
      profileimageUrl = result?.profileImageUrl
    }

    const result = await updateUserProfileReq({
      nickname: profileBody.nickname,
      profileImageUrl: profileimageUrl,
    })
    if (!result) return

    dispatch(openToast('profileUpdateSuccess'))
  }

  const submitNewPassword = async () => {
    await updatePasswordReq(passwordBody)
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
