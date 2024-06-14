import { useEffect, useRef, useState } from 'react'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { ProfileList, HeaderButton, UserInfo } from '@/components'
import { getDashBoardInfo } from '@/service/dashboards'
import { getMemberList } from '@/service/members'
import { getUserInfo } from '@/service/users'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { openModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { useAppDispatch } from '@/hooks/useApp'
import themeIconWhite from '@/public/icons/brightnessWhite.svg'
import inviteIconWhite from '@/public/icons/inviteiconWhite.svg'
import settingIconWhite from '@/public/icons/settingiconWhite.svg'
import themeIcon from '@/public/icons/brightness_89411.svg'
import crownIcon from '@/public/icons/crownicon.svg'
import inviteIcon from '@/public/icons/inviteIcon.svg'
import settingIcon from '@/public/icons/settingIcon.svg'
import { Member, UserInfoData } from '@/types/header'
import useAsync from '@/hooks/useAsync'
import { ModalPortal } from '@/Portal'
import Loading from '@/components/Loading/Loading'
import Dropdown from '../HeaderDropDown'

export default function DashBoardHeader() {
  const [title, setTitle] = useState<string>('')
  const [userData, setUserData] = useState<UserInfoData | null>(null)
  const router = useRouter()
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false)
  const [members, setMembers] = useState<Member[]>([])
  const [createdByMe, setCreatedByMe] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { handleSetTheme, theme } = useLoadTheme()

  const { pending, requestFunction: fetchData } = useAsync(async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      let currentTitle = ''

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
        } else if (router.pathname === '/mydashboard') {
          currentTitle = '내 대시보드'
        } else if (router.pathname === '/mypage') {
          currentTitle = '마이페이지'
        }
      } else {
        router.push('/login')
      }

      setTitle(currentTitle)

      const userInfo = await getUserInfo()
      setUserData(userInfo)

      if (router.query.dashboardId) {
        const data = await getMemberList(1, Number(router.query.dashboardId), 10)
        setMembers(data.members || [])
        setTotalCount(data.totalCount || 0)
        localStorage.setItem('members', JSON.stringify(data.members))
      }
    } catch (error) {
      dispatch(openToast('failedToLoadData'))
    }
  })

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [router])

  return (
    <>
      {pending && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div
        className={`fixed z-50 flex w-[100vw] items-center justify-between sm:pr-[2rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-white pl-[2.4rem]' : 'border-var-black2 bg-var-black2 text-white'} py-[1.5rem] pl-[34rem] pr-[8rem] shadow sm:pl-[8rem] sm:pr-[0.5rem] md:justify-between md:pl-[20rem] md:pr-[4rem]`}
      >
        <div className="flex items-center gap-[0.6rem]">
          <p className="flex h-[3.8rem] items-center text-[2rem] font-bold">{title}</p>
          {createdByMe && (
            <Image
              src={crownIcon}
              alt="대시보드 생성자 아이콘"
              className="mr-[1rem] h-[2rem] w-[2rem]"
            />
          )}
        </div>
        <div
          className={`flex gap-[1.6rem] sm:fixed sm:bottom-0 sm:left-0 sm:z-[100] sm:h-[100vh] sm:w-[6.7rem] sm:flex-col sm:items-center sm:justify-end sm:gap-[1rem] sm:border-r-[0.1rem] sm:pb-[1.5rem] ${theme === 'normal' ? 'sm:border-var-gray3 sm:bg-var-white' : 'sm:border-var-black3 sm:bg-var-black2'}`}
        >
          <HeaderButton
            buttonIcon={theme === 'normal' ? themeIcon : themeIconWhite}
            buttonName="테마"
            handleOnClick={handleSetTheme}
          />
          {isButtonVisible && (
            <div className="flex gap-[1.6rem] pr-[1.5rem] sm:flex-col sm:items-center sm:gap-[2.7rem] sm:pr-0">
              {createdByMe && (
                <div className="flex gap-[1.6rem] sm:flex-col sm:gap-[1rem]">
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
                          modalProps: {
                            dashboardId: router.query.dashboardId,
                            setInviteList: () => {},
                          },
                        }),
                      )
                    }
                  />
                </div>
              )}
              {userData && (
                <ProfileList
                  theme={theme}
                  members={members}
                  totalCount={totalCount}
                  LogInId={userData.id}
                />
              )}
            </div>
          )}
          <div
            className="relative flex cursor-pointer items-center border-l-2 border-var-gray3 pl-[3.2rem] sm:border-none sm:pl-0"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            {userData && (
              <UserInfo
                profileImageUrl={userData.profileImageUrl}
                nickname={userData.nickname}
                isHeader
              />
            )}
            {isDropdownOpen && <Dropdown theme={theme} />}
          </div>
        </div>
      </div>
    </>
  )
}
