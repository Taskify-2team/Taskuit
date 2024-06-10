import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoIcon from '@/public/images/taskuitLogo_main.png'
import adddashboardicon from '@/public/icons/adddashboardicon.svg'
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
      className={`fixed z-40 flex h-[100vh] w-[30rem] flex-col gap-[5.7rem] border-r-2 ${theme === 'normal' ? 'border-var-gray3 bg-var-white pl-[2.4rem]' : 'border-var-black1 bg-var-black1'} px-[2.4rem] pt-[2rem]`}
    >
      <div className="flex items-center gap-[1rem]">
        <Image src={logoIcon} alt="Taskify 로고 아이콘" width={40} />
        <p className="text-center text-[2.5rem] font-bold text-primary-violet">Taskuit</p>
      </div>
      <div className="mb-[1.5rem] flex justify-between">
        <p className="text-[1.2rem] font-bold text-[#787486]">Dash Boards</p>
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
          <Image src={adddashboardicon} alt="대시보드 추가 아이콘" />
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
