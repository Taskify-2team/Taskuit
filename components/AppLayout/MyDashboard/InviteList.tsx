import Image from 'next/image'
import searchIcon from '@/public/icons/searchIcon.svg'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { getInvitationList, postInvitation } from '@/service/invitations'
import useAsync from '@/hooks/useAsync'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import useDebounce from '@/hooks/useDebounce'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { ModalPortal } from '@/Portal'
import { useRouter } from 'next/router'
import { ShortButton } from '../..'
import EmptyInvite from './EmptyInvite'
import Loading from '../../Loading/Loading'

export default function InviteList() {
  const [invitationList, setInvitationList] = useState<Invitation[]>([])
  const [cursorId, setCursorId] = useState<number | null>(0)
  const [inviteTitle, setInviteTitle] = useState('')
  const obsRef = useRef(null)
  const router = useRouter()
  const { pending, requestFunction } = useAsync(getInvitationList)
  const dispatch = useAppDispatch()
  const { deBounceValue } = useDebounce(inviteTitle, 200)
  const { theme } = useLoadTheme()

  const handleLoadList = async () => {
    const data = await requestFunction(cursorId, deBounceValue)
    setInvitationList((prev) => [...prev, ...data.invitations])
    setCursorId(data.cursorId)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInvitationList([])
    setCursorId(null)
    setInviteTitle(e.target.value)
  }

  const handleInvite = async (id: number, answer: boolean) => {
    const result = await postInvitation(id, answer)
    if (answer) {
      router.push(`/dashboard/${result.data.dashboard.id}`)
    }
    setInvitationList(invitationList.filter((item) => item.id !== id))
  }

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (!pending && target.isIntersecting) {
      handleLoadList()
    }
  }

  useEffect(() => {
    handleLoadList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deBounceValue])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && !pending && cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorId, pending])

  return (
    <>
      {pending && !invitationList[0] && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            placeholder="검색"
            className={`h-[4rem] w-full rounded-[0.6rem] border border-solid ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black1 bg-var-black1'} px-[4.8rem] py-[1rem] text-[1.6rem]`}
            onChange={handleInputChange}
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
      <div className="grid grid-cols-3 text-center sm:hidden">
        <p className="text-[1.6rem] text-var-gray4">이름</p>
        <p className="text-[1.6rem] text-var-gray4">초대자</p>
        <p className="text-[1.6rem] text-var-gray4">수락 여부</p>
      </div>
      {invitationList[0] ? (
        <div className="max-h-[25rem] overflow-auto">
          {invitationList.map((item) => (
            <div
              key={item.id}
              className={`grid h-[7.2rem] grid-cols-3 items-center border-b text-center sm:mt-[1.6rem] sm:flex sm:h-auto sm:flex-col sm:items-start sm:gap-[1rem] ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black1'}`}
            >
              <div className="sm:flex">
                <h4 className="hidden w-[5.3rem] text-left text-[1.4rem] text-var-gray4 sm:block">
                  이름
                </h4>
                <p
                  className={`text-[1.6rem] sm:text-[1.4rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
                >
                  {item.dashboard.title}
                </p>
              </div>
              <div className="sm:flex">
                <h4 className="hidden w-[5.3rem] text-left text-[1.4rem] text-var-gray4 sm:block">
                  초대자
                </h4>
                <p
                  className={`text-[1.6rem] sm:text-[1.4rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
                >
                  {item.inviter.nickname}
                </p>
              </div>
              <div className="flex justify-center gap-[1rem] sm:mb-[1.6rem] sm:mt-[0.6rem] sm:w-full sm:justify-stretch">
                <ShortButton
                  text="수락"
                  color="purple"
                  onClick={() => {
                    dispatch(openToast('acceptInvite'))
                    handleInvite(item.id, true)
                  }}
                  isGrowInMo
                />
                <ShortButton
                  text="거절"
                  color="white"
                  onClick={() => {
                    dispatch(openToast('refuseInvite'))
                    handleInvite(item.id, false)
                  }}
                  isGrowInMo
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
