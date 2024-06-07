import Image from 'next/image'
import searchIcon from '@/public/icons/searchIcon.svg'
import { useEffect, useRef, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { getInvitationList, postInvitation } from '@/service/invitations'
import useAsync from '@/hooks/useAsync'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import { ShortButton } from '..'
import EmptyInvite from '../EmptyInvite/EmptyInvite'

export default function InviteList() {
  const [invitationList, setInvitationList] = useState<Invitation[]>([])
  const [cursorId, setCursorId] = useState<number | null>(0)
  const [inviteTitle, setInviteTitle] = useState('')
  const obsRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { pending, requestFunction } = useAsync(getInvitationList)
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    if (inputRef.current) {
      if (inviteTitle !== inputRef.current.value) {
        setInvitationList([])
        setInviteTitle(inputRef.current.value)
      }
    }
  }

  const handleInvite = async (id: number, answer: boolean) => {
    await postInvitation(id, answer)
    setInvitationList(invitationList.filter((item) => item.id !== id))
  }

  const handleObserver = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (!pending && target.isIntersecting) {
      const data = await requestFunction(cursorId, inviteTitle)
      setInvitationList((prev) => [...prev, ...data.invitations])
      setCursorId(data.cursorId)
    }
  }

  useEffect(() => {
    const handleLoadList = async () => {
      const data = await requestFunction(cursorId, inviteTitle)
      setInvitationList((prev) => [...prev, ...data.invitations])
      setCursorId(data.cursorId)
    }
    handleLoadList()
  }, [inviteTitle, requestFunction])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && !pending && cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [cursorId, pending])

  return (
    <>
      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
        >
          <input
            placeholder="검색"
            className="h-[4rem] w-full rounded-[0.6rem] border border-solid border-var-gray3 px-[4.8rem] py-[1rem] text-[1.6rem]"
            ref={inputRef}
            onChange={() => {
              // 검색어 state 변경
            }}
            onBlur={handleSearch}
          />
          <Image
            src={searchIcon}
            alt="돋보기 아이콘"
            width={17}
            height={17}
            className="absolute left-[2rem] top-[1.2rem]"
          />
        </form>
      </div>
      <div className="grid grid-cols-3 text-center">
        <p className="text-[1.6rem] text-var-gray4">이름</p>
        <p className="text-[1.6rem] text-var-gray4">초대자</p>
        <p className="text-[1.6rem] text-var-gray4">수락 여부</p>
      </div>
      {invitationList[0] ? (
        <div className="max-h-[25rem] overflow-auto">
          {invitationList.map((item) => (
            <div
              key={item.id}
              className="grid h-[7.2rem] grid-cols-3 items-center border-b text-center"
            >
              <p className="text-[1.6rem]">{item.dashboard.title}</p>
              <p className="text-[1.6rem]">{item.inviter.nickname}</p>
              <div className="flex justify-center gap-[1rem]">
                <ShortButton
                  text="수락"
                  color="purple"
                  onClick={() => {
                    dispatch(openToast('acceptInvite'))
                    handleInvite(item.id, true)
                  }}
                />
                <ShortButton
                  text="거절"
                  color="white"
                  onClick={() => {
                    dispatch(openToast('refuseInvite'))
                    handleInvite(item.id, false)
                  }}
                />
              </div>
            </div>
          ))}
          <div ref={obsRef} />
        </div>
      ) : (
        <EmptyInvite>초대받은 대시보드가 없습니다!</EmptyInvite>
      )}
    </>
  )
}
