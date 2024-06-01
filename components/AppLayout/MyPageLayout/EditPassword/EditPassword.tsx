import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'

export default function EditPassword() {
  return (
    <div className="bg-var-white flex w-[62rem] flex-col rounded-[0.8rem] p-[2.8rem]">
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">비밀번호 변경</h3>
      <div className="mb-[2.4rem] flex flex-col gap-[2rem]">
        <label htmlFor="currentPassword" className="flex flex-col gap-[1rem] text-[1.8rem]">
          현재 비밀번호
          <input
            id="currentPassword"
            placeholder="현재 비밀번호 입력"
            className="border-var-gray3 rounded-[0.6rem] border-[0.1rem] pb-[1.2rem] pl-[1.6rem] pt-[1.3rem] text-[1.6rem]"
          />
          {/** 인풋 컴포넌트 교체 예정 */}
        </label>
        <label htmlFor="nextPassword" className="flex flex-col gap-[1rem] text-[1.8rem]">
          새 비밀번호
          <input
            id="nextPassword"
            placeholder="새 비밀번호 입력"
            className="border-var-gray3 rounded-[0.6rem] border-[0.1rem] pb-[1.2rem] pl-[1.6rem] pt-[1.3rem] text-[1.6rem]"
          />
          {/** 인풋 컴포넌트 교체 예정 */}
        </label>
        <label htmlFor="checkNextPassword" className="flex flex-col gap-[1rem] text-[1.8rem]">
          새 비밀번호 확인
          <input
            id="checkNextPassword"
            placeholder="새 비밀번호 입력"
            className="border-var-gray3 rounded-[0.6rem] border-[0.1rem] pb-[1.2rem] pl-[1.6rem] pt-[1.3rem] text-[1.6rem]"
          />
          {/** 인풋 컴포넌트 교체 예정 */}
        </label>
      </div>
      <div className="self-end">
        <PurpleButton text="변경" />
      </div>
    </div>
  )
}
