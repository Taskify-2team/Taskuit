interface TagProps {
  tag: string
  bgColor: string
  textColor: string
}

export default function Tag({ tag, bgColor, textColor }: TagProps) {
  return (
    <li
      className="rounded-[0.4rem] px-[0.6rem] py-[0.4rem] text-[1.2rem]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {tag}
    </li>
  )
}
