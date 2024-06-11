/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoIcon from '@/public/images/taskuitLogo_main.png'
import adddashboardicon from '@/public/icons/adddashboardicon.svg'
import addDashBoardIcon from '@/public/icons/adddashboardiconWhite.svg'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useDispatch } from 'react-redux'
import { getDashBoard } from '@/service/dashboards'
import { openModal } from '@/store/reducers/modalReducer'
import PaginationButton from '../Buttons/PaginationButton'
import SideMenuList, { DashBoardProps } from './SideMenuList/SideMenuList'

export default function SideMenu() {
  const [dashboardData, setDashboardData] = useState<DashBoardProps[] | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const [dashBoardPage, setDashBoardPage] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashBoard(currentPage)
        setDashboardData(data.dashboards)
        setDashBoardPage(Math.ceil(data.totalCount / 5))
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [currentPage])

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const { theme } = useLoadTheme()

  return (
    <div
      className={`fixed z-50 flex h-[100vh] w-[30rem] flex-col border-r-2 ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black2 bg-var-black2'} px-[2.4rem] pt-[2rem]`}
    >
      <div className="flex items-center gap-[1rem]">
        <Image src={logoIcon} alt="Taskify 로고 아이콘" width={40} />
        <p className="text-center font-[Freesentation] text-[3rem] font-bold text-primary-violet">
          Taskuit
        </p>
      </div>
      <div className="mt-[4rem] flex justify-between">
        <p
          className={`text-[1.5rem] font-bold ${theme === 'normal' ? `text-var-gray5` : `text-white`}`}
        >
          Dash Boards
        </p>
        <button
          type="button"
          onClick={() =>
            dispatch(
              openModal({
                modalName: 'AddDashBoard',
              }),
            )
          }
        >
          <Image
            src={theme === 'normal' ? adddashboardicon : addDashBoardIcon}
            alt="대시보드 추가 아이콘"
          />
        </button>
      </div>
      <div className="h-[30rem]">
        <SideMenuList data={dashboardData} />
      </div>
      <PaginationButton
        currentPage={currentPage}
        totalPage={dashBoardPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  )
}
