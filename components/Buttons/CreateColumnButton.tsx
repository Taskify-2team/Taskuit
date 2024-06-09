import Image from 'next/image'
import addLogo from '@/public/icons/addLogo.svg'

export default function CreateColumnButton() {
  return (
    <div className="flex h-[7rem] w-[54.4rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[0.6rem] border border-solid lg:w-[35.4rem]">
      <p className="text-nowrap text-[1.8rem] font-bold">새로운 컬럼 추가하기</p>
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-var-gray3 bg-var-violet p-[0.3rem]">
        <Image src={addLogo} alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
