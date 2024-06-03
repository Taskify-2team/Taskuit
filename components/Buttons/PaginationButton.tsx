import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PaginationButtonProps {
  currentPage: number
  totalPage: number
}

export default function PaginationButton({ currentPage, totalPage }: PaginationButtonProps) {
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  useEffect(() => {
    if (currentPage < totalPage) {
      setNext(true)
    } else if (currentPage > 1) {
      setPrev(true)
    } else if (currentPage === totalPage) {
      setNext(false)
      setPrev(false)
    }
  }, [currentPage, totalPage])

  return (
    <div className="flex">
      <div className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-l-[0.4rem] border border-solid border-[--gray-gray_D9D9D9]">
        <Image
          src={prev ? '/icons/arrowBack.svg' : '/icons/arrowBackGrey.svg'}
          alt="뒤로가기 화살표"
          width={16}
          height={16}
        />
      </div>
      <div className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-r-[0.4rem] border border-solid border-[--gray-gray_D9D9D9]">
        <Image
          src={next ? '/icons/arrowForward.svg' : '/icons/arrowForwardGrey.svg'}
          alt="앞으로가기 화살표"
          width={16}
          height={16}
        />
      </div>
    </div>
  )
}
