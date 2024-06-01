interface PurpleButtonProps {
  text: string
}

export default function PurpleButton({ text }: PurpleButtonProps) {
  return (
    <span className="inline-block w-[8.4rem] cursor-pointer rounded-[0.4rem] bg-[--violet-violet_5534DA] py-[0.7rem] text-center text-[1.4rem] leading-tight text-[--white-white_FFFFFF]">
      {text}
    </span>
  )
}
