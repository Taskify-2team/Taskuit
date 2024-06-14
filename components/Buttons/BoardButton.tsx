import { DashBoard } from '@/types/dashboard'
import Image from 'next/image'
import crownIcon from '@/public/icons/crown.svg'
import arrowForwardIcon from '@/public/icons/arrowForward.svg'
import Link from 'next/link'
import { useLoadTheme } from '@/store/context/ThemeContext'
import CircleChip from '../Chips/CircleChip'

interface BoardButtonProps {
  board: DashBoard
}

export default function BoardButton({ board }: BoardButtonProps) {
  const { theme } = useLoadTheme()

  return (
    <Link
      href={`/dashboard/${board.id}`}
      className="w-[calc((100%-2.6rem)/3)] sm:w-full md:w-[calc((100%-2.6rem)/2)]"
    >
      <div
        className={`flex h-[7rem] cursor-pointer items-center justify-between gap-[1.2rem] rounded-[0.6rem] sm:h-[5.8rem] ${theme === 'normal' ? 'bg-var-white' : 'border-var-black2 bg-var-black2'} border border-solid px-[2rem]`}
      >
        <div className="flex items-center justify-center gap-[0.8rem]">
          <CircleChip color={board.color} />
          <p
            className={`ellipsis ml-[0.8rem] text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            {board.title}
          </p>
          {board.createdByMe && <Image src={crownIcon} alt="왕관 이미지" width={20} height={16} />}
        </div>
        <Image src={arrowForwardIcon} alt="화살표 이미지" width={18} height={18} />
      </div>
    </Link>
  )
}
