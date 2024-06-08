import { useEffect, useState } from 'react'
import { getDashBoard } from '@/service/dashboards'
import { DashBoard } from '@/types/dashboard'
import { BoardButton, CreateBoardButton, PaginationButton } from '..'

export default function MyDashBoardList() {
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [dashBoard, setDashBoard] = useState<DashBoard[]>([])

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    const handleLoadList = async () => {
      const data = await getDashBoard(currentPage)
      setDashBoard(data.dashboards)
      setDashBoardPage(Math.ceil(data.totalCount / 5))
    }
    handleLoadList()
  }, [currentPage])

  return (
    <>
      <div className="flex w-full flex-wrap items-center gap-[1.3rem]">
        <CreateBoardButton />
        {dashBoard && dashBoard.map((item) => <BoardButton key={item.id} board={item} />)}
      </div>
      {dashBoard[0] && (
        <div className="flex items-center justify-end gap-[1.6rem] p-[1rem]">
          <div className="text-[1.6rem]">
            {dashBoardPage} 페이지중 {currentPage}
          </div>
          <PaginationButton
            currentPage={currentPage}
            totalPage={dashBoardPage}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      )}
    </>
  )
}
