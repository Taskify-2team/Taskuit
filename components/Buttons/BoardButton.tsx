import Image from 'next/image'

export default function BoardButton() {
  return (
    <div className="lg:w-[35.4rem] w-[24.7rem] h-[7rem] flex items-center justify-between gap-[1.2rem] border border-solid rounded-[0.6rem] p-[2rem] cursor-pointer">
      <div className="flex gap-[0.8rem] justify-center items-center">
        <div className="w-[0.8rem] h-[0.8rem] bg-[#7AC555] rounded-full" />
        <p className="text-[1.6rem] ml-[0.8rem]">대시보드 이름</p>
        <Image src="/icons/crown.svg" alt="왕관 이미지" width={20} height={16} />
      </div>
      <Image src="/icons/arrowForward.svg" alt="화살표 이미지" width={18} height={18} />
    </div>
  )
}
