import { ProfileList, HeaderButton, UserInfo } from '@/components'
import inviteicon from '@/public/icons/inviteicon.svg'
import settingicon from '@/public/icons/settingicon.svg'
import { getDashBoardInfo } from '@/service/dashboards'
import { getMemberList } from '@/service/members'
import { getUserInfo } from '@/service/users'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import crownIcon from '@/public/icons/crownicon.svg'
import { openModal } from '@/store/reducers/modalReducer'
import { useDispatch } from 'react-redux'

interface UserInfoData {
  profileImageUrl: string
  nickname: string
}

export default function DashBoardHeader() {
  const [title, setTitle] = useState<string>('대시보드 타이틀')
  const [userData, setUserData] = useState<UserInfoData | null>(null)
  const router = useRouter()
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [members, setMembers] = useState<any[]>([])
  const [createdByMe, setCreatedByMe] = useState<boolean>(false)
  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      let currentTitle = title

      if (accessToken) {
        if (router.pathname === '/mydashboard') {
          currentTitle = '내 대시보드'
          setIsButtonVisible(false)
        } else if (router.pathname === '/mypage') {
          currentTitle = '마이 페이지'
          setIsButtonVisible(false)
        } else if (router.pathname.startsWith('/dashboard/')) {
          const { dashboardId } = router.query
          if (dashboardId) {
            const dashboardInfo = await getDashBoardInfo(Number(dashboardId))
            currentTitle = dashboardInfo.title
            setCreatedByMe(dashboardInfo.createdByMe)
          }
        }
      } else {
        router.push('/login')
      }

      setTitle(currentTitle)

      const userInfo = await getUserInfo()
      setUserData(userInfo)

      if (router.query.dashboardId) {
        const data = await getMemberList(1, Number(router.query.dashboardId))
        setMembers(data.members || [])
        setTotalCount(data.totalCount || 0)
        localStorage.setItem('members', JSON.stringify(data.members))
      }
    } catch (error) {
      alert('데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    router.push('/login')
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    fetchData()
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [router])

  return (
    <div className="fixed z-50 flex w-[100vw] items-center justify-between bg-var-white py-[1.6rem] pl-[34rem] shadow">
      <div className="flex items-center gap-[1rem]">
        <p className="flex h-[3.8rem] items-center text-[2rem] font-bold">{title}</p>
        {createdByMe && (
          <Image src={crownIcon} alt="대시보드 생성자 아이콘" className="h-[2rem] w-[2rem]" />
        )}
      </div>
      <div className="flex">
        {isButtonVisible && (
          <div className="flex gap-[1.6rem] border-r-2 border-solid border-[#d9d9d9] pr-[4rem]">
            <Link href="/mypage" passHref className="flex">
              <HeaderButton buttonIcon={settingicon} buttonName="관리" />
            </Link>
            <HeaderButton
              buttonIcon={inviteicon}
              buttonName="초대하기"
              onClick={() =>
                dispatch(
                  openModal({
                    modalName: 'AddMember',
                    modalProps: { dashboardId: router.query.dashboardId },
                  }),
                )
              }
            />
            <ProfileList members={members} totalCount={totalCount} />
          </div>
        )}
        <div className="relative flex items-center pl-[3.2rem] pr-[8rem]" onClick={toggleDropdown}>
          {userData && (
            <UserInfo profileImageUrl={userData.profileImageUrl} nickname={userData.nickname} />
          )}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-[7rem] top-[4rem] flex w-[11rem] animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-var-gray3 bg-var-white shadow-lg"
            >
              <Link href="/mypage">
                <p className="block w-full px-4 py-2 text-left text-[1.6rem] hover:bg-gray-100">
                  내 정보
                </p>
              </Link>
              <button
                type="button"
                className="border-t- block w-full px-4 py-2 text-left text-[1.6rem] hover:bg-gray-100"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
