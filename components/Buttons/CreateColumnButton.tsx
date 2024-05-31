import Image from 'next/image'

export default function CreateColumnButton() {
  return (
    <div className="lg:w-[35.4rem] w-[54.4rem] h-[7rem] flex items-center gap-[1.2rem] justify-center border border-solid rounded-[0.6rem] cursor-pointer">
      <p className="text-[1.8rem] text-nowrap font-bold">새로운 컬럼 추가하기</p>
      <div className="w-[2.2rem] h-[2.2rem] bg-[--violet-violet-8] rounded-[0.4rem] relative p-[0.3rem] border-[--gray-gray_D9D9D9]">
        <Image src="/icons/addLogo.svg" alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
