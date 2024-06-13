import Image from 'next/image'
import cancelBtn from '@/public/icons/cancel.svg'

interface TagChipProps {
  tag: string
  onDelete?: () => void
  bgColor: string
  textColor: string
}

export default function TagChip({ tag, bgColor, textColor, onDelete }: TagChipProps) {
  return (
    <li
      className="relative w-fit rounded-[0.4rem] px-[0.6rem] py-[0.4rem] text-[1.2rem]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {tag}
      {onDelete && (
        <button
          onClick={onDelete}
          type="button"
          className="absolute right-[-0.5rem] top-[-0.5rem] rounded-full bg-var-gray1 p-[0.3rem] hover:bg-var-gray2"
        >
          <div className="relative size-[0.7rem] opacity-80">
            <Image fill src={cancelBtn} alt="삭제버튼" />
          </div>
        </button>
      )}
    </li>
  )
}
