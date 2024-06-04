import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'
import WhiteButton from '@/components/Buttons/ShortButtons/WhiteButton'
import TextInput from '@/components/Input/TextInput'

export default function AddDashBoard() {
  return (
    <>
      <h3 className="text-[2.4rem] font-bold">새로운 대시보드</h3>
      <div className="flex w-full flex-col gap-[1.8rem]">
        <TextInput id="name" label="대시보드 이름" placeholder="johndoe@gmail.com" />
      </div>
      <div className="flex gap-[1.2rem] self-end">
        <WhiteButton text="취소" />
        <PurpleButton text="생성" />
      </div>
    </>
  )
}
