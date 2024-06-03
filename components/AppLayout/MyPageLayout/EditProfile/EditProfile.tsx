import { PurpleButton } from '@/components'
import Image from 'next/image'
import addButton from '@/public/icons/addLogo.svg'
import { Dispatch, SetStateAction } from 'react'
import { ProfileBody } from '@/pages/mypage'
import TextInput from '@/components/Input/TextInput'

interface EditProfileProps {
  profileBody: ProfileBody
  setProfileBody: Dispatch<SetStateAction<ProfileBody>>
}

export default function EditProfile({ profileBody, setProfileBody }: EditProfileProps) {
  return (
    <div className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">프로필</h3>
      <div className="mb-[2rem] flex gap-[1.6rem]">
        <button
          type="button"
          className="flex size-[18.2rem] shrink-0 cursor-pointer items-center justify-center rounded-[0.6rem] bg-var-gray2"
        >
          <div className="relative size-[3rem]">
            <Image fill src={addButton} alt="이미지 추가 버튼 이미지" />
          </div>
        </button>
        <div className="flex w-full flex-col gap-[1.8rem]">
          <TextInput id="email" label="이메일" placeholder="johndoe@gmail.com" />
          <TextInput id="nickname" label="닉네임" placeholder="배유철" />
        </div>
      </div>
      <div className="self-end">
        <PurpleButton text="저장" />
      </div>
    </div>
  )
}
