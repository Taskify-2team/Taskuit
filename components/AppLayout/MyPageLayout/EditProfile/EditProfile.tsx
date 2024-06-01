import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'

export default function EditProfile() {
  return (
    <div className="bg-var-white flex h-[35.5rem] w-[62rem] flex-col rounded-[0.8rem] p-[2.8rem]">
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">프로필</h3>
      <div className="mb-[2rem] flex gap-[1.6rem]">
        <div className="bg-var-gray2 size-[18.2rem] shrink-0 rounded-[0.6rem]">+</div>
        <div className="flex w-full flex-col gap-[2rem]">
          <label htmlFor="email" className="flex flex-col gap-[1rem] text-[1.8rem]">
            이메일
            <input id="email" placeholder="johndoe@gmail.com" />
          </label>
          <label htmlFor="nickname" className="flex flex-col gap-[1rem] text-[1.8rem]">
            닉네임
            <input id="nickname" placeholder="배유철" />
          </label>
        </div>
      </div>
      <div className="self-end">
        <PurpleButton text="저장" />
      </div>
    </div>
  )
}
