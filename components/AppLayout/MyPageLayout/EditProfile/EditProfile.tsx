import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'
import Image from 'next/image'
import addButton from '@/public/icons/addLogo.svg'

export default function EditProfile() {
  return (
    <div className="bg-var-white flex w-[62rem] flex-col rounded-[0.8rem] p-[2.8rem]">
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">프로필</h3>
      <div className="mb-[2rem] flex gap-[1.6rem]">
        <button
          type="button"
          className="bg-var-gray2 flex size-[18.2rem] shrink-0 cursor-pointer items-center justify-center rounded-[0.6rem]"
        >
          <div className="relative size-[3rem]">
            <Image fill src={addButton} alt="이미지 추가 버튼 이미지" />
          </div>
        </button>
        <div className="flex w-full flex-col gap-[2rem]">
          <label htmlFor="email" className="flex flex-col gap-[1rem] text-[1.8rem]">
            이메일
            <input
              id="email"
              placeholder="johndoe@gmail.com"
              className="border-var-gray3 rounded-[0.6rem] border-[0.1rem] pb-[1.2rem] pl-[1.6rem] pt-[1.3rem] text-[1.6rem]"
            />
            {/** 인풋 컴포넌트 교체 예정 */}
          </label>
          <label htmlFor="nickname" className="flex flex-col gap-[1rem] text-[1.8rem]">
            닉네임
            <input
              id="nickname"
              placeholder="배유철"
              className="border-var-gray3 rounded-[0.6rem] border-[0.1rem] pb-[1.2rem] pl-[1.6rem] pt-[1.3rem] text-[1.6rem]"
            />{' '}
            {/** 인풋 컴포넌트 교체 예정 */}
          </label>
        </div>
      </div>
      <div className="self-end">
        <PurpleButton text="저장" />
      </div>
    </div>
  )
}
