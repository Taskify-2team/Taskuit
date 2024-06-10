import Image from 'next/image'
import crownicon from '@/public/icons/crownicon.svg'
import CircleChip from '@/components/Chips/CircleChip'
import Link from 'next/link'

interface SideMenuListItemProps {
  id: number
  color: string
  title: string
  createdByMe: boolean
}

export default function SideMenuListItem({
  id,
  color,
  title = '대시보드 제목 예시',
  createdByMe = true,
}: SideMenuListItemProps) {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="my-[2.7rem] flex items-center gap-[3rem]">
        <CircleChip color={color} />
        <div className="text-[1.8rem] text-[#787486]">{title}</div>
        <div className="ml-[-2.0rem]">
          {createdByMe && <Image src={crownicon} alt="크라운 아이콘" />}
        </div>
      </div>
    </Link>
  )
}
