interface WhiteButtonProps {
  text: string
  onClick: () => void
}

export default function WhiteButton({ text, onClick }: WhiteButtonProps) {
  return (
    <span
      onClick={onClick}
      className="inline-block w-[8.4rem] cursor-pointer rounded-[0.4rem] border border-solid border-[--gray-gray_D9D9D9] bg-[--white-white_FFFFFF] py-[0.7rem] text-center text-[1.4rem] leading-tight text-[--violet-violet_5534DA]"
    >
      {text}
    </span>
  )
}
