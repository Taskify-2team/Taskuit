import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import cancel from '@/public/icons/cancel.svg'
import check from '@/public/icons/checkWhite.svg'
import { closeMyToast } from '@/store/reducers/myToastReducer'

export default function MyToastLayout() {
  const [isVisible, setVisible] = useState(false)
  const { text, warn } = useAppSelector((state) => state.myToast) || {}
  const dispatch = useAppDispatch()

  const closeButtonClickHandler = () => {
    dispatch(closeMyToast())
    setVisible(false)
  }

  useEffect(() => {
    setVisible(true)
    let timer: NodeJS.Timeout
    let visibleTimer: NodeJS.Timeout

    if (text) {
      visibleTimer = setTimeout(() => {
        setVisible(false)
      }, 2700)

      timer = setTimeout(() => {
        closeButtonClickHandler()
      }, 3000)
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(visibleTimer)
    }
  }, [text])

  if (!text) return null

  return (
    <div
      className={`${isVisible ? 'animate-slideDown' : 'animate-slideUp'} fixed right-[2.5rem] top-[9.5rem] z-20 flex h-[6rem] w-[28rem] items-center justify-between gap-[1.5rem] overflow-hidden rounded-[0.6rem] border-[0.1rem] border-var-gray2 bg-var-white px-[2rem] py-[2rem] shadow-lg`}
    >
      <div
        className={`flex size-[3rem] items-center justify-center rounded-[0.6rem] ${warn ? 'bg-[#F7DBF0]' : 'bg-[#E7F7DB]'}`}
      >
        <div
          className={`flex size-[2rem] items-center justify-center rounded-[50%] ${warn ? 'bg-[#D549B6]' : 'bg-var-green'}`}
        >
          <div className="relative size-[1.2rem]">
            <Image fill src={check} alt="체크 버튼" />
          </div>
        </div>
      </div>
      <p className="flex-1 text-[1.2rem]">{text}</p>
      <button
        type="button"
        className="relative size-[1rem] text-var-black3"
        onClick={() => dispatch(closeMyToast())}
      >
        <Image fill src={cancel} alt="취소 버튼" />
      </button>
      <div
        className={`absolute left-0 top-0 h-[0.3rem] w-[28rem] animate-timer ${warn ? 'bg-[#D549B6]' : 'bg-var-green'}`}
      />
    </div>
  )
}
