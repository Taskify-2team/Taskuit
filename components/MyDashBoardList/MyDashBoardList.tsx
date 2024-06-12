import { useEffect, useState } from 'react'
import { getDashBoard } from '@/service/dashboards'
import { DashBoard } from '@/types/dashboard'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import useAsync from '@/hooks/useAsync'
import { ModalPortal } from '@/Portal'
import { BoardButton, CreateBoardButton, PaginationButton } from '..'
import Loading from '../Loading/Loading'

export default function MyDashBoardList() {
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [dashBoard, setDashBoard] = useState<DashBoard[]>([])
  const { theme } = useLoadTheme()
  const dispatch = useAppDispatch()
  const { pending, requestFunction } = useAsync(getDashBoard)

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const createBoard = () => {
    dispatch(openModal({ modalName: 'AddDashBoard', modalProps: { dashBoard, setDashBoard } }))
  }

  useEffect(() => {
    const handleLoadList = async () => {
      const data = await requestFunction(currentPage)
      setDashBoard(data.dashboards)
      setDashBoardPage(Math.ceil(data.totalCount / 5))
    }
    handleLoadList()
  }, [currentPage, requestFunction])

  return (
    <>
      {pending && !dashBoard[0] && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div className="flex w-full flex-wrap items-center gap-[1.3rem]">
        <CreateBoardButton handleClick={createBoard} />
        {dashBoard && dashBoard.map((item) => <BoardButton key={item.id} board={item} />)}
      </div>
      {dashBoard[0] && (
        <div className="flex items-center justify-end gap-[1.6rem] p-[1rem]">
          <div
            className={`text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
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
