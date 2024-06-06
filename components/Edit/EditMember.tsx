import { useEffect, useState } from 'react'
import { getMemberList } from '@/service/members'
import { useRouter } from 'next/router'
import { Member } from '@/types/member'
import { PaginationButton, ShortButton, UserInfo } from '..'

export default function EditMember() {
  const [memberList, setMemberList] = useState<Member[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const router = useRouter()
  const { dashboardId } = router.query

  const deleteMember = async (id: number) => {
    await deleteMember(id)
    alert('삭제되었습니다!')
  }

  useEffect(() => {
    const handleLoadList = async () => {
      if (dashboardId) {
        const result = await getMemberList(currentPage, Number(dashboardId))
        setMemberList(result.members)
        setTotalPage(Math.ceil(result.totalCount / 4))
      }
    }
    handleLoadList()
  }, [currentPage, dashboardId])

  return (
    <div className="flex w-[62rem] flex-col gap-[2.7rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <div className="flex items-center justify-between">
        <p className="text-center text-[2rem] font-bold">멤버</p>
        <div className="flex items-center justify-end gap-[1.6rem]">
          <div className="text-[1.6rem]">
            {memberList.length} 페이지중 {currentPage}
          </div>
          <PaginationButton
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[1.6rem] text-var-gray4">이름</p>
        <div className="flex flex-col border-b-[0.1rem]">
          {memberList.map((item) => (
            <div key={item.id} className="flex justify-between px-0 py-[1.6rem]">
              <UserInfo profileImageUrl={item.profileImageUrl} nickname={item.nickname} />
              <ShortButton color="white" text="삭제" onClick={() => deleteMember(item.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
