import Image from 'next/image'

export default function PaginationButton() {
  const next = false
  const back = false

  return (
    <div className="flex">
      <div className="w-[4rem] h-[4rem] flex items-center justify-center border border-solid border-[--gray-gray_D9D9D9] rounded-l-[0.4rem] cursor-pointer">
        <Image
          src={next ? '/icons/arrowBack.svg' : '/icons/arrowBackGrey.svg'}
          alt="뒤로가기 화살표"
          width={16}
          height={16}
        />
      </div>
      <div className="w-[4rem] h-[4rem] flex items-center justify-center border border-solid border-[--gray-gray_D9D9D9] rounded-r-[0.4rem] cursor-pointer">
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
