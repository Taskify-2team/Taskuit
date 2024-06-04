import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'
import WhiteButton from '@/components/Buttons/ShortButtons/WhiteButton'
import TextInput from '@/components/Input/TextInput'

export default function AddColumn() {
  return (
    <>
      <h3 className="text-[2.4rem] font-bold">새 컬럼 생성</h3>
      <TextInput id="name" label="이름" placeholder="새로운 프로젝트" />
      <div className="flex gap-[1rem] self-end">
        <WhiteButton text="취소" />
        <PurpleButton text="생성" />
      </div>
    </>
  )
}
