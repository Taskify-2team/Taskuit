interface ShortButtonProps {
  text: string
  color: 'white' | 'purple'
  onClick: () => void
}

export default function ShortButton({ text, color, onClick }: ShortButtonProps) {
  const colorVariants = {
    white:
      'border border-solid border-[--gray-gray_D9D9D9] bg-[--white-white_FFFFFF] text-[--violet-violet_5534DA]',
    purple: 'bg-[--violet-violet_5534DA] text-[--white-white_FFFFFF]',
  }

  return (
    <span
      onClick={onClick}
      className={`${colorVariants[color]} inline-block w-[8.4rem] cursor-pointer rounded-[0.4rem] py-[0.7rem] text-center text-[1.4rem] leading-tight`}
    >
      {text}
    </span>
  )
}
