import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import arrowBack from '@/public/icons/arrowBack.svg'
import arrowBackGrey from '@/public/icons/arrowBackGrey.svg'
import arrowForward from '@/public/icons/arrowForward.svg'
import arrowForwardGrey from '@/public/icons/arrowForwardGrey.svg'

interface PaginationButtonProps {
  currentPage: number
  totalPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export default function PaginationButton({
  currentPage,
  totalPage,
  setCurrentPage,
}: PaginationButtonProps) {
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  const moveNext = () => {
    if (next) {
      setCurrentPage(currentPage + 1)
    }
  }

  const movePrev = () => {
    if (prev) {
      setCurrentPage(currentPage - 1)
    }
  }

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
        className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-l-[0.4rem] border border-solid border-var-gray3"
        onClick={movePrev}
      >
        <Image
          src={prev ? arrowBack : arrowBackGrey}
          alt="뒤로가기 화살표"
          width={16}
          height={16}
        />
      </div>
      <div
        className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-r-[0.4rem] border border-solid border-var-gray3"
        onClick={moveNext}
      >
        <Image
          src={next ? arrowForward : arrowForwardGrey}
          alt="앞으로가기 화살표"
          width={16}
          height={16}
        />
      </div>
    </div>
  )
}
