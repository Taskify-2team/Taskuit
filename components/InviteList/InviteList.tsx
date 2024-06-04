import Image from 'next/image'
import searchIcon from '@/public/icons/searchIcon.svg'
import emptyIcon from '@/public/icons/emptyDashBoard.svg'
import { useEffect, useRef, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { getInvitationList } from '@/service/invitations'
import useAsync from '@/hooks/useAsync'
import { ShortButton } from '..'

export default function InviteList() {
  const [invitationList, setInvitationList] = useState<Invitation[]>([])
  const [cursorId, setCursorId] = useState<number | null>(0)
  const obsRef = useRef(null)
  const { pending, requestFunction } = useAsync(getInvitationList)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    const id = sessionStorage.getItem('cursorId')
    if (!pending && target.isIntersecting) {
      setCursorId(Number(id))
    }
  }

  useEffect(() => {
    const handleLoadList = async () => {
      const data = await requestFunction(cursorId)
      setInvitationList((prev) => [...prev, ...data.invitations])
      sessionStorage.setItem('cursorId', data.cursorId)
    }
    handleLoadList()
  }, [cursorId])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && !pending && !cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [pending])

  return invitationList ? (
    <>
      <div className="relative">
        <input
          placeholder="검색"
          className="h-[4rem] w-full rounded-[0.6rem] border border-solid border-[--gray-gray_D9D9D9] px-[4.8rem] py-[1rem] text-[1.6rem]"
        />
        <Image
          src={searchIcon}
          alt="돋보기 아이콘"
          width={17}
          height={17}
          className="absolute left-[2rem] top-[1.2rem]"
        />
      </div>
      <div className="grid grid-cols-3 text-center">
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">이름</p>
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">초대자</p>
        <p className="text-[1.6rem] text-[--gray-gray_9FA6B2]">수락 여부</p>
      </div>
      <div className="max-h-[40rem] overflow-auto">
        {invitationList.map((item) => (
          <div
            key={item.id}
            className="grid h-[7.2rem] grid-cols-3 items-center border-b text-center"
          >
            <p className="text-[1.6rem]">{item.dashboard.title}</p>
            <p className="text-[1.6rem]">{item.inviter.nickname}</p>
            <div className="flex justify-center gap-[1rem]">
              <ShortButton text="수락" color="purple" onClick={() => console.log(1)} />
              <ShortButton text="거절" color="white" onClick={() => console.log(1)} />
            </div>
          </div>
        ))}
        <div ref={obsRef} />
      </div>
    </>
  ) : (
    <div className="flex w-full flex-col items-center justify-center gap-[2.4rem] py-[6rem]">
      <Image src={emptyIcon} alt="비어있는 대시보드 아이콘" width={100} height={100} />
      <p className="text-[1.8rem] text-[--gray-gray_9FA6B2]">아직 초대받은 대시보드가 없어요!</p>
    </div>
  )
}
