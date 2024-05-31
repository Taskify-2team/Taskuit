export default function LongButton() {
  const isActive = true

  return (
    <span
      className={`inline-block lg:w-[52rem] w-[35rem] py-[1.4rem] ${isActive ? 'bg-[--violet-violet_5534DA]' : 'bg-[--gray-gray_9FA6B2]'} text-[1.8rem] text-[--white-white_FFFFFF] text-center rounded-[0.8rem] cursor-pointer leading-tight`}
    >
      버튼
    </span>
  )
}
