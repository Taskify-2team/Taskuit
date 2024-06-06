import { DashBoard } from '@/types/dashboard'
import Image from 'next/image'
import crownIcon from '@/public/icons/crown.svg'
import Link from 'next/link'

interface BoardButtonProps {
  board: DashBoard
}

export default function BoardButton({ board }: BoardButtonProps) {
  return (
    <Link href={`/dashboard/${board.id}`}>
      <div className="flex h-[7rem] w-[33.2rem] cursor-pointer items-center justify-between gap-[1.2rem] rounded-[0.6rem] border border-solid bg-[--white-white_FFFFFF] p-[2rem]">
        <div className="flex items-center justify-center gap-[0.8rem]">
          <div
            className="h-[0.8rem] w-[0.8rem] rounded-full"
            style={{ backgroundColor: board.color }}
          />
          <p className="ml-[0.8rem] text-[1.6rem]">{board.title}</p>
          {board.createdByMe && <Image src={crownIcon} alt="왕관 이미지" width={20} height={16} />}
        </div>
        <Image src="/icons/arrowForward.svg" alt="화살표 이미지" width={18} height={18} />
      </div>
    </Link>
  )
}
