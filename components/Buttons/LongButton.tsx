export default function LongButton() {
  const isActive = true

  return (
    <span
      className={`inline-block w-[35rem] py-[1.4rem] lg:w-[52rem] ${isActive ? 'bg-[--violet-violet_5534DA]' : 'bg-[--gray-gray_9FA6B2]'} cursor-pointer rounded-[0.8rem] text-center text-[1.8rem] leading-tight text-[--white-white_FFFFFF]`}
    >
      버튼
    </span>
  )
}
