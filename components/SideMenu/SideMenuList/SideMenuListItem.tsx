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
  isFocused = false,
}: SideMenuListItemProps) {
  const { theme } = useLoadTheme()
  let sideMenuItemClass = `my-[0.5rem] py-[1.2rem] flex items-center gap-[1.6rem] rounded-[0.4rem] pl-[1rem] sm:pl-0`
  sideMenuItemClass += theme === 'normal' ? ' hover:bg-var-violet' : ' hover:bg-var-gray5'

  if (isFocused) {
    sideMenuItemClass +=
      theme === 'normal' ? ' bg-var-violet font-semibold' : ' bg-var-gray5 font-semibold'
  }

  return (
    <Link href={`/dashboard/${id}`}>
      <div className={sideMenuItemClass}>
        <CircleChip color={color} />
        <div
          className={`ellipsis w-fit text-[1.8rem] sm:hidden ${theme === 'normal' ? `text-var-gray5` : `text-white`}`}
        >
          {title}
        </div>
        <div className="ml-[-1.2rem] shrink-0 sm:hidden">
          {createdByMe && <Image src={crownicon} alt="크라운 아이콘" />}
        </div>
      </div>
    </Link>
  )
}
