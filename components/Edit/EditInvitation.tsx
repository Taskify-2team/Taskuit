import { useEffect, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { cancelInvite, getDashBoardInvitation } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { PaginationButton, ShortButton } from '..'
import EmptyInvite from '../EmptyInvite/EmptyInvite'

export default function EditInvitation() {
  const [inviteList, setInviteList] = useState<Invitation[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const router = useRouter()
  const { dashboardId } = router.query

  const handleCancel = async (id: number) => {
    if (dashboardId) {
      await cancelInvite(Number(dashboardId), id)
      alert('취소되었습니다!')
    }
  }

  useEffect(() => {
    const handleLoadList = async () => {
      if (dashboardId) {
        const result = await getDashBoardInvitation(Number(dashboardId), currentPage)
        setInviteList(result.invitations)
        setTotalPage(Math.ceil(result.totalCount / 4))
      }
    }
    handleLoadList()
  }, [currentPage, dashboardId])

  return (
    <div className="flex w-[62rem] flex-col gap-[2.7rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <div className="flex items-center justify-between">
        <p className="text-center text-[2rem] font-bold">초대 내역</p>
        <div className="flex items-center justify-end gap-[1.6rem]">
          <div className="text-[1.6rem]">
            {inviteList.length} 페이지중 {currentPage}
          </div>
          <PaginationButton
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
          <ShortButton text="초대하기" color="purple" />
        </div>
      </div>
      {inviteList[0] ? (
        <div className="flex flex-col">
          <p className="text-[1.6rem] text-var-gray4">이메일</p>
          <div className="flex flex-col border-b-[0.1rem]">
            {inviteList.map((item) => (
              <div key={item.id} className="flex justify-between px-0 py-[1.6rem]">
                <ShortButton color="white" text="취소" onClick={() => handleCancel(item.id)} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmptyInvite>초대한 멤버가 없습니다!</EmptyInvite>
      )}
    </div>
  )
}
