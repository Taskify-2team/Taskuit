interface TagChipProps {
  tag: string
  textColor: string
  bgColor: string
}

export default function TagChip({ tag, textColor, bgColor }: TagChipProps) {
  return (
    <li
      className="w-fit rounded-[0.4rem] bg-[#F9EEE3] px-[0.6rem] py-[0.4rem] text-[1.2rem] text-[#D58D49]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {tag}
    </li>
  )
}
