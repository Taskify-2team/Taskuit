import Image from 'next/image'
import { useEffect, useState } from 'react'
import arrowBack from '@/public/icons/arrowBack.svg'
import arrowBackGrey from '@/public/icons/arrowBackGrey.svg'
import arrowForward from '@/public/icons/arrowForward.svg'
import arrowForwardGrey from '@/public/icons/arrowForwardGrey.svg'
import { useLoadTheme } from '@/store/\bcontext/ThemeContext'

interface PaginationButtonProps {
  currentPage: number
  totalPage: number
  handleNext: () => void
  handlePrev: () => void
}

export default function PaginationButton({
  currentPage,
  totalPage,
  handleNext,
  handlePrev,
}: PaginationButtonProps) {
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)
  const { theme } = useLoadTheme()

  useEffect(() => {
    if (currentPage < totalPage) {
      setNext(true)
    }
    if (currentPage > 1) {
      setPrev(true)
    }
    if (currentPage === totalPage) {
      setNext(false)
    }
    if (currentPage === 1) {
      setPrev(false)
    }
  }, [currentPage, totalPage])

  return (
    <div className="flex">
      <div
        className={`flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-l-[0.4rem] border border-solid ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black2 bg-var-black1'}`}
        onClick={() => {
          if (prev) {
            handlePrev()
          }
        }}
      >
        {theme === 'normal' ? (
          <Image
            src={prev ? arrowBack : arrowBackGrey}
            alt="뒤로가기 화살표"
            width={16}
            height={16}
          />
        ) : (
          <Image
            src={prev ? arrowBackGrey : arrowBack}
            alt="뒤로가기 화살표"
            width={16}
            height={16}
          />
        )}
      </div>
      <div
        className={`flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-r-[0.4rem] border border-solid ${theme === 'normal' ? 'border-var-gray3' : 'border-var-black2 bg-var-black1'}`}
        onClick={() => {
          if (next) {
            handleNext()
          }
        }}
      >
        {theme === 'normal' ? (
          <Image
            src={next ? arrowForward : arrowForwardGrey}
            alt="앞으로가기 화살표"
            width={16}
            height={16}
          />
        ) : (
          <Image
            src={next ? arrowForwardGrey : arrowForward}
            alt="앞으로가기 화살표"
            width={16}
            height={16}
          />
        )}
      </div>
    </div>
  )
}
