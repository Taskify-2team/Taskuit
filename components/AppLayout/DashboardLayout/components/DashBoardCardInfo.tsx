import { Card } from '@/types/dashboard'
import Image from 'next/image'
import calenderIcon from '@/public/icons/calendarGray5.svg'
import { UserProfile } from '@/components'
import { formatDateDot } from '@/utils/formatDate'

interface DashBoardCardInfoProps {
  card: Card
}

export default function DashBoardCardInfo({ card }: DashBoardCardInfoProps) {
  return (
    <div className="flex animate-slideDown justify-between">
      <div className="flex items-center gap-[0.6rem] text-[1.2rem] text-var-gray5">
        <Image src={calenderIcon} alt="날짜" width="18" height="18" />
        {formatDateDot(card.dueDate)}
      </div>
      <UserProfile
        profileImageUrl={card.assignee.profileImageUrl}
        nickname={card.assignee.nickname}
        size="s"
      />
    </div>
  )
}
