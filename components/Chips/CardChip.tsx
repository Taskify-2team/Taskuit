interface CardChipProps {
  text: string
}

export default function CardChip({ text }: CardChipProps) {
  return (
    <div className="w-fit rounded-[0.4rem] bg-[#F9EEE3] px-[0.6rem] py-[0.4rem] text-[1.2rem] text-[#D58D49]">
      {text}
    </div>
  )
}
