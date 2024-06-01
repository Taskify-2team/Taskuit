import Image from 'next/image'
import PurpleButton from '../Buttons/ShortButtons/PurpleButton'
import WhiteButton from '../Buttons/ShortButtons/WhiteButton'

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
          src="/searchIcon.svg"
          alt="돋보기 아이콘"
          width={24}
          height={24}
          className="absolute left-[1.6rem] top-[0.8rem]"
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
