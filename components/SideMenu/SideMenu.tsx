/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '@/public/images/taskuitLogo_main.png'
import adddashboardicon from '@/public/icons/adddashboardicon.svg'
import addDashBoardIcon from '@/public/icons/adddashboardiconWhite.svg'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useDispatch } from 'react-redux'
import { getDashBoard } from '@/service/dashboards'
import { DashBoardProps } from '@/types/sidemenu'
import { useRouter } from 'next/router'
import { openModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import PaginationButton from '../Buttons/PaginationButton'
import SideMenuList from './SideMenuList/SideMenuList'

export default function SideMenu() {
  const [dashBoard, setDashBoard] = useState<DashBoardProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashBoard(currentPage)
        setDashBoard(data.dashboards)
        setDashBoardPage(Math.ceil(data.totalCount / 5))
      } catch (error) {
        dispatch(openToast('failedToLoadData'))
      }
    }

    fetchData()
  }, [currentPage, dispatch, router])

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  const createBoard = () => {
    dispatch(openModal({ modalName: 'AddDashBoard', modalProps: { dashBoard, setDashBoard } }))
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const { theme } = useLoadTheme()

  return (
    <div
      className={`fixed z-50 flex h-[100vh] w-[30rem] flex-col border-r-2 sm:h-fit sm:border-none ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black3 bg-var-black2'} px-[2.4rem] pt-[2rem] sm:w-[6.7rem] sm:items-center sm:bg-transparent sm:px-[1rem] md:w-[16rem] md:px-[1.3rem]`}
    >
      <Link href="/mydashboard" className="flex w-fit items-center gap-[0.5rem]">
        <Image
          src={logoIcon}
          alt="Taskify 로고 아이콘"
          className="w-[4rem] sm:w-[3rem] md:w-[3.5rem]"
        />
        <p className="text-center font-[Logo] text-[3rem] font-bold text-primary-violet sm:hidden md:text-[2.5rem]">
          Taskuit
        </p>
      </Link>
      <div className="mt-[4rem] flex justify-between">
        <p
          className={`text-[1.5rem] font-bold sm:hidden ${theme === 'normal' ? `text-var-gray5` : `text-white`}`}
        >
          Dash Boards
        </p>
        <button type="button" onClick={createBoard}>
          <Image
            src={theme === 'normal' ? adddashboardicon : addDashBoardIcon}
            alt="대시보드 추가 아이콘"
          />
        </button>
      </div>
      {dashBoard[0] && (
        <div className="h-[30rem] sm:h-[20rem]">
          <SideMenuList data={dashBoard} />
        </div>
      )}
      <div className="sm:w-[5rem]">
        <PaginationButton
          currentPage={currentPage}
          totalPage={dashBoardPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  )
}
