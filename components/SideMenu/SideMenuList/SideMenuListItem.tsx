import Image from 'next/image'
import crownicon from '@/public/icons/crownicon.svg'
import CircleChip from '@/components/Chips/CircleChip'
import Link from 'next/link'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { SideMenuListItemProps } from '@/types/sidemenu'

export default function SideMenuListItem({
  id,
  color,
  title = '대시보드 제목 예시',
  createdByMe = true,
}: SideMenuListItemProps) {
  const { theme } = useLoadTheme()

  return (
    <Link href={`/dashboard/${id}`}>
      <div className="my-[2.7rem] flex items-center gap-[1.6rem]">
        <CircleChip color={color} />
        <div
          className={`text-[1.8rem] sm:hidden ${theme === 'normal' ? `text-var-gray5` : `text-white`}`}
        >
          {title}
        </div>
        <div className="ml-[-1.2rem] sm:hidden">
          {createdByMe && <Image src={crownicon} alt="크라운 아이콘" />}
        </div>
      </div>
    </Link>
  )
}
