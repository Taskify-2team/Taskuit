import Image from 'next/image'

export default function BoardButton() {
  return (
    <div className="flex h-[7rem] w-[33.2rem] cursor-pointer items-center justify-between gap-[1.2rem] rounded-[0.6rem] border border-solid bg-[--white-white_FFFFFF] p-[2rem]">
      <div className="flex items-center justify-center gap-[0.8rem]">
        <div className="h-[0.8rem] w-[0.8rem] rounded-full bg-[#7AC555]" />
        <p className="ml-[0.8rem] text-[1.6rem]">대시보드 이름</p>
        <Image src="/icons/crown.svg" alt="왕관 이미지" width={20} height={16} />
      </div>
      <Image src="/icons/arrowForward.svg" alt="화살표 이미지" width={18} height={18} />
    </div>
  )
}
