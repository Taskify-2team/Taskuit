import { useEffect, useState } from 'react'
import { deleteMemberList, getMemberList } from '@/service/members'
import { useRouter } from 'next/router'
import { Member } from '@/types/member'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'
import useAsync from '@/hooks/useAsync'
import { ModalPortal } from '@/Portal'
import { PaginationButton, ShortButton, UserInfo } from '../..'
import Loading from '../../Loading/Loading'

export default function EditMember() {
  const [memberList, setMemberList] = useState<Member[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const { pending, requestFunction } = useAsync(getMemberList)

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const deleteMember = async (id: number) => {
    await deleteMemberList(id)
    setMemberList(memberList.filter((item) => item.id !== id))
    dispatch(openToast('successDeleteMember'))
  }

  useEffect(() => {
    const handleLoadList = async () => {
      if (dashboardId) {
        const result = await requestFunction(currentPage, Number(dashboardId))
        setMemberList(result.members)
        setTotalPage(Math.ceil(result.totalCount / 4))
      }
    }
    handleLoadList()
  }, [currentPage, dashboardId, requestFunction])

  return (
    <>
      {pending && !memberList[0] && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div
        className={`flex w-[62rem] max-w-full flex-col gap-[2.7rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} p-[2.8rem]`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-center text-[2rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            멤버
          </p>
          <div className="flex items-center justify-end gap-[1.6rem]">
            <div
              className={`text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
            >
              {totalPage} 페이지중 {currentPage}
            </div>
            <PaginationButton
              currentPage={currentPage}
              totalPage={totalPage}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[1.6rem] text-var-gray4">이름</p>
          <div className="flex flex-col">
            {memberList.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between border-b-[0.1rem] px-0 py-[1.6rem] ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black1'}`}
              >
                <UserInfo profileImageUrl={item.profileImageUrl} nickname={item.nickname} />
                {!item.isOwner && (
                  <ShortButton color="white" text="삭제" onClick={() => deleteMember(item.id)} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
