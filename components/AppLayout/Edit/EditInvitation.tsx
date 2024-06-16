import { useEffect, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { cancelInvite, getDashBoardInvitation } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import { openModal } from '@/store/reducers/modalReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { ModalPortal } from '@/Portal'
import useAsync from '@/hooks/useAsync'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { PaginationButton, ShortButton } from '../..'
import EmptyInvite from '../MyDashboard/EmptyInvite'
import Loading from '../../Loading/Loading'

export default function EditInvitation() {
  const [inviteList, setInviteList] = useState<Invitation[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()
  const { pending, requestFunction } = useAsync(getDashBoardInvitation)

  const handleCancel = async (id: number) => {
    if (dashboardId) {
      await cancelInvite(Number(dashboardId), id)
      dispatch(openToast('cancelInvite'))
      setInviteList(inviteList.filter((item) => item.id !== id))
    }
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    const handleLoadList = async () => {
      if (dashboardId) {
        const { invitations, totalCount } = await requestFunction(Number(dashboardId), currentPage)
        setInviteList(invitations)
        setTotalPage(Math.ceil(totalCount / 4))
      }
    }
    handleLoadList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dashboardId])

  return (
    <>
      {pending && !inviteList[0] && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div
        className={`flex w-[62rem] max-w-full flex-col gap-[2.7rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} p-[2.8rem] sm:p-[2rem]`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-center text-[2rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            {language === 'ko' ? '초대 내역' : 'Invited List'}
          </p>
          <div className="flex items-center justify-end gap-[1.6rem] sm:relative">
            <div
              className={`text-[1.6rem] sm:text-[1.3rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
            >
              {totalPage} {language === 'ko' ? '페이지중' : 'pages'} {currentPage}
            </div>
            <PaginationButton
              currentPage={currentPage}
              totalPage={totalPage}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
            <ShortButton
              text={language === 'ko' ? '초대하기' : 'Invite'}
              color="purple"
              onClick={() => {
                dispatch(
                  openModal({
                    modalName: 'AddMember',
                    modalProps: { dashboardId, setInviteList },
                  }),
                )
              }}
              className="sm:absolute sm:top-[6.5rem]"
            />
          </div>
        </div>
        {inviteList[0] ? (
          <div className="flex flex-col">
            <p className="text-[1.6rem] text-var-gray4">이메일</p>
            <div className="flex flex-col">
              {inviteList.map((item) => (
                <div
                  key={item.invitee.id}
                  className={`flex items-center justify-between border-b-[0.1rem] px-0 py-[1.6rem] ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black1'}`}
                >
                  <p
                    className={`text-center text-[1.6rem] font-normal ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
                  >
                    {item.invitee.email}
                  </p>
                  <ShortButton color="white" text="취소" onClick={() => handleCancel(item.id)} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <EmptyInvite>
            {language === 'ko' ? '초대한 멤버가 없습니다!' : 'No invited members!'}
          </EmptyInvite>
        )}
      </div>
    </>
  )
}
