import Image from 'next/image'

export default function CreateBoardButton() {
  return (
    <div className="flex h-[7rem] w-[24.7rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[0.6rem] border border-solid lg:w-[35.4rem]">
      <p className="text-nowrap text-[1.8rem] font-bold">새로운 대시보드</p>
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-[--gray-gray_D9D9D9] bg-[--violet-violet-8] p-[0.3rem]">
        <Image src="/icons/addLogo.svg" alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
