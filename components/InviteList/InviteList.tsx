import Image from 'next/image'
import { PurpleButton, WhiteButton } from '@/components'
import searchIcon from '@/public/icons/searchIcon.svg'

export default function InviteList() {
  const mockData = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <div className="relative">
        <input
          placeholder="검색"
          className="h-[4rem] w-full rounded-[0.6rem] border border-solid border-[--gray-gray_D9D9D9] px-[4.8rem] py-[1rem] text-[1.6rem]"
        />
        <Image
          src={searchIcon}
          alt="돋보기 아이콘"
          width={17}
          height={17}
          className="absolute left-[2rem] top-[1.2rem]"
        />
      </div>
      <div className="grid grid-cols-3 text-center">
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">이름</p>
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">초대자</p>
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">수락 여부</p>
      </div>
      <div className="max-h-[40rem] overflow-auto">
        {mockData.map((item) => (
          <div key={item} className="grid h-[7.2rem] grid-cols-3 items-center border-b text-center">
            <p className="text-[1.6rem]">이름</p>
            <p className="text-[1.6rem]">초대자</p>
            <div className="flex justify-center gap-[1rem]">
              <PurpleButton text="수락" />
              <WhiteButton text="거절" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
