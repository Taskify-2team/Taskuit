import { useEffect, useState } from 'react'
import mockData from '@/components/MyDashBoardList/mock'
import { BoardButton, CreateBoardButton, PaginationButton } from '..'

export default function MyDashBoardList() {
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const [currentPage] = useState(1)

  useEffect(() => {
    setDashBoardPage(Math.ceil(mockData.length / 2))
  }, [])
  return (
    <>
      <div className="flex w-full flex-wrap items-center gap-[1.3rem]">
        <CreateBoardButton />
        {mockData.map((item) => (
          <BoardButton key={item.id} board={item} />
        ))}
      </div>
      {mockData.length > 0 && (
        <div className="flex items-center justify-end gap-[1.6rem] p-[1rem]">
          <div className="text-[1.6rem]">
            {dashBoardPage} 페이지중 {currentPage}
          </div>
          <PaginationButton currentPage={currentPage} totalPage={dashBoardPage} />
        </div>
      )}
    </>
  )
}
