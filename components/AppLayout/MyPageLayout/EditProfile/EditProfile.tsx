import { ProfileImageInput, TextInput, ShortButton } from '@/components'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ProfileBody } from '@/pages/mypage'

interface EditProfileProps {
  onSubmit: () => void
  setImageFile: (file: File) => void
  profileBody: ProfileBody
  setProfileBody: Dispatch<SetStateAction<ProfileBody>>
}

export default function EditProfile({
  onSubmit,
  setImageFile,
  profileBody,
  setProfileBody,
}: EditProfileProps) {
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileBody({
      ...profileBody,
      nickname: e.target.value,
    })
  }

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]"
    >
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">프로필</h3>
      <div className="mb-[2rem] flex gap-[1.6rem]">
        <ProfileImageInput
          id="image"
          label="이미지"
          size="m"
          currentImage={profileBody.profileImageUrl}
          onChange={handleFileInputValue}
        />
        <div className="flex w-full flex-col gap-[1.8rem]">
          <TextInput
            id="email"
            label="이메일"
            value={profileBody.email}
            isReadOnly
            placeholder="johndoe@gmail.com"
          />
          <TextInput
            id="nickname"
            label="닉네임"
            value={profileBody.nickname}
            onChange={handleInputValue}
            placeholder="배유철"
          />
        </div>
      </div>
      <div className="self-end">
        <ShortButton color="purple" onClick={onSubmit} text="저장" />
      </div>
    </form>
  )
}
