import { AppLayout, MyPageLayout, EditProfile, EditPassword, BackButton } from '@/components'

import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { updatePassword } from '@/service/auth'
import { getUserInfo, postProfileImage, updateUserProfile } from '@/service/users'
import { closeModal } from '@/store/reducers/modalReducer'
import { useRouter } from 'next/router'
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
  const [imageFile, setImageFile] = useState<File | null>()
  const { requestFunction: getUserInfoReq } = useAsync(getUserInfo)
  const { requestFunction: postProfileImageReq } = useAsync(postProfileImage)
  const {
    error: updateUserProfileError,
    result: updateUserProfileResult,
    requestFunction: updateUserProfileRequest,
  } = useAsync(updateUserProfile)
  const {
    error: updatePasswordError,
    result: updatePasswordResult,
    requestFunction: updatePasswordRequest,
  } = useAsync(updatePassword)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleUserInfo = async () => {
    const res = await getUserInfoReq()
    if (!res) return

    const { nickname, email, profileImageUrl } = res
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
      const res = await postProfileImageReq(imageFile)
      profileimageUrl = res?.data.profileImageUrl
      router.reload()
    } else if (imageFile === null) {
      profileimageUrl = null
    }

    await updateUserProfileRequest({
      nickname,
      profileImageUrl: profileimageUrl,
    })
  }

  const handleUpdatePasswordSubmit = async (e: FormEvent, newPasswordBody: PasswordBody) => {
    e.preventDefault()
    await updatePasswordRequest(newPasswordBody)
  }

  useEffect(() => {
    handleUserInfo()
  }, [updateUserProfileResult])

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  return (
    <AppLayout>
      <MyPageLayout
        BackButton={<BackButton />}
        EditProfile={
          <EditProfile
            error={updateUserProfileError}
            result={updateUserProfileResult}
            onSubmit={handleEditProfileSubmit}
            imageFile={imageFile}
            setImageFile={setImageFile}
            profileBody={profileBody}
          />
        }
        EditPassword={
          <EditPassword
            error={updatePasswordError}
            result={updatePasswordResult}
            onSubmit={handleUpdatePasswordSubmit}
          />
        }
      />
    </AppLayout>
  )
}
