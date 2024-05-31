import Image from 'next/image'

export default function CreateBoardButton() {
  return (
    <div className="lg:w-[35.4rem] w-[24.7rem] h-[7rem] flex items-center gap-[1.2rem] justify-center border border-solid rounded-[0.6rem] cursor-pointer">
      <p className="text-[1.8rem] text-nowrap font-bold">새로운 대시보드</p>
      <div className="w-[2.2rem] h-[2.2rem] bg-[--violet-violet-8] rounded-[0.4rem] relative p-[0.3rem] border-[--gray-gray_D9D9D9]">
        <Image src="/icons/addLogo.svg" alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
