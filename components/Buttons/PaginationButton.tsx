import Image from 'next/image'

export default function PaginationButton() {
  const next = false
  const back = false

  return (
    <div className="flex">
      <div className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-l-[0.4rem] border border-solid border-[--gray-gray_D9D9D9]">
        <Image
          src={next ? '/icons/arrowBack.svg' : '/icons/arrowBackGrey.svg'}
          alt="뒤로가기 화살표"
          width={16}
          height={16}
        />
      </div>
      <div className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-r-[0.4rem] border border-solid border-[--gray-gray_D9D9D9]">
        <Image
          src={back ? '/icons/arrowForward.svg' : '/icons/arrowForwardGrey.svg'}
          alt="앞으로가기 화살표"
          width={16}
          height={16}
        />
      </div>
    </div>
  )
}
