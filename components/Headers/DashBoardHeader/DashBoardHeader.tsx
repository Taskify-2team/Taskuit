import { useLoadTheme } from '@/store/context/ThemeContext'
import { ProfileList, HeaderButton, UserInfo } from '@/components'
import inviteIcon from '@/public/icons/inviteIcon.svg'
import inviteIconWhite from '@/public/icons/inviteiconWhite.svg'
import settingIcon from '@/public/icons/settingIcon.svg'
import settingIconWhite from '@/public/icons/settingiconWhite.svg'
import themeIcon from '@/public/icons/brightness_89411.svg'
import themeIconWhite from '@/public/icons/brightnessWhite.svg'
import { getDashBoardInfo } from '@/service/dashboards'
import { getMemberList } from '@/service/members'
import { getUserInfo } from '@/service/users'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
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
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [members, setMembers] = useState<any[]>([])
  const [createdByMe, setCreatedByMe] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { handleSetTheme, theme } = useLoadTheme()

  const fetchData = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      let currentTitle = title

      if (accessToken) {
        if (router.pathname.startsWith('/dashboard/')) {
          const { dashboardId } = router.query
          setIsButtonVisible(true)
          if (router.pathname.endsWith('edit')) {
            setIsButtonVisible(false)
          }
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
  }, [
    title,
    router,
    setIsButtonVisible,
    setTitle,
    setCreatedByMe,
    setUserData,
    setMembers,
    setTotalCount,
  ])

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
  const handleManageClick = () => {
    router.push(`${router.asPath}/edit`)
  }

  useEffect(() => {
    fetchData()
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [fetchData])

  return (
    <div
      className={`fixed z-50 flex w-[100vw] items-center justify-between ${theme === 'normal' ? 'border-var-gray3 bg-var-white pl-[2.4rem]' : 'border-var-black2 bg-var-black2 text-white'} py-[1.5rem] pl-[34rem] shadow`}
    >
      <div className="flex items-center gap-[1rem]">
        <p className="flex h-[3.8rem] items-center text-[2rem] font-bold">{title}</p>
        {createdByMe && (
          <Image src={crownIcon} alt="대시보드 생성자 아이콘" className="h-[2rem] w-[2rem]" />
        )}
      </div>
      <div className="flex gap-[1.6rem]">
        <HeaderButton
          buttonIcon={theme === 'normal' ? themeIcon : themeIconWhite}
          buttonName="테마"
          handleOnClick={handleSetTheme}
        />
        {isButtonVisible && (
          <div className="flex gap-[1.6rem] pr-[4rem]">
            <HeaderButton
              buttonIcon={theme === 'normal' ? settingIcon : settingIconWhite}
              buttonName="관리"
              handleOnClick={handleManageClick}
            />

            <HeaderButton
              buttonIcon={theme === 'normal' ? inviteIcon : inviteIconWhite}
              buttonName="초대하기"
              handleOnClick={() =>
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
        <div
          className="relative flex w-[19.2rem] items-center border-l-2 border-var-gray3 pl-[3.2rem] pr-[8rem]"
          onClick={toggleDropdown}
        >
          {userData && (
            <UserInfo profileImageUrl={userData.profileImageUrl} nickname={userData.nickname} />
          )}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className={`absolute left-[7rem] top-[4rem] flex w-[11rem] animate-slideDown flex-col overflow-hidden rounded-md border border-solid text-center ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1 text-white'} shadow-lg`}
            >
              <Link href="/mypage">
                <p className="block w-full px-4 py-2 text-left text-[1.6rem] hover:bg-var-gray4">
                  내 정보
                </p>
              </Link>
              <Link href="/mydashboard">
                <p className="block w-full px-4 py-2 text-left text-[1.6rem] hover:bg-var-gray4">
                  내 대시보드
                </p>
              </Link>
              <button
                type="button"
                className="border-t- block w-full px-4 py-2 text-left text-[1.6rem] hover:bg-var-gray4"
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
