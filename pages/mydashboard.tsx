import AppLayout from '@/components/AppLayout/AppLayout'
import BoardButton from '@/components/Buttons/BoardButton'
import CreateBoardButton from '@/components/Buttons/CreateBoardButton'
import PaginationButton from '@/components/Buttons/PaginationButton'
import InviteList from '@/components/InviteList/InviteList'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MyDashBoard() {
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const [currentPage] = useState(1)
  const mockData = [1, 2, 3, 4, 5]
  const mockInvite = '1'
 

  useEffect(() => {
    setDashBoardPage(Math.ceil(mockData.length / 6))
  }, [mockData.length])

  return (
    <AppLayout>
      <div className="mx-auto my-0 flex w-[102.2rem] flex-col">
        <div className="flex w-full flex-wrap items-center gap-[1.3rem]">
          <CreateBoardButton />
          {mockData.map((item) => (
            <BoardButton key={item} />
          ))}
        </div>
        {mockData.length > 0 && (
          <div className="flex items-center justify-end gap-[1.6rem] p-[1rem]">
            <div className="text-[1.6rem]">
              {dashBoardPage} 페이지중 {currentPage}
            </div>
            <PaginationButton />
          </div>
        )}
        <div className="mt-[3rem] flex w-full flex-col gap-[2rem] rounded-[0.8rem] bg-[--white-white_FFFFFF] px-[2.8rem] py-[3rem]">
          <p className="text-[2.4rem] font-bold">초대받은 대시보드</p>
          {mockInvite ? (
            <InviteList />
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-[2.4rem] py-[6rem]">
              <Image
                src="emptyDashBoard.svg"
                alt="비어있는 대시보드 아이콘"
                width={100}
                height={100}
              />
              <p className="text-[1.8rem] text-[--gray-gray_9FA6B2]">
                아직 초대받은 대시보드가 없어요!
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
