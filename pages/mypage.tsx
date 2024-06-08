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
  const { requestFunction: getUserInfoReq } = useAsync(getUserInfo)
  const { requestFunction: postProfileImageReq } = useAsync(postProfileImage)
  const { requestFunction: updateUserProfileReq } = useAsync(updateUserProfile)
  const {
    pending: updatePasswordPen,
    error: updatePasswordErr,
    requestFunction: updatePasswordReq,
  } = useAsync(updatePassword)
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

  const handleEditProfileSubmit = async (e: FormEvent, nickname: string) => {
    e.preventDefault()
    let profileimageUrl

    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      const result = await postProfileImageReq(formData)
      profileimageUrl = result?.profileImageUrl
    }

    const result = await updateUserProfileReq({
      nickname,
      profileImageUrl: profileimageUrl,
    })
    if (!result) return

    dispatch(openToast('successUpdateProfile'))
  }

  const handleUpdatePasswordSubmit = async (e: FormEvent, newPasswordBody: PasswordBody) => {
    e.preventDefault()

    await updatePasswordReq(newPasswordBody)
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
            imageFile={imageFile}
            setImageFile={setImageFile}
            profileBody={profileBody}
          />
        }
        EditPassword={
          <EditPassword
            pending={updatePasswordPen}
            error={updatePasswordErr}
            onSubmit={handleUpdatePasswordSubmit}
          />
        }
      />
    </AppLayout>
  )
}
