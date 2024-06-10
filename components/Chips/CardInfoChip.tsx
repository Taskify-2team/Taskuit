import { Card } from '@/types/dashboard'
import { formatDateTimeDot } from '@/utils/formatDate'
import UserInfo from '../UserInfo/UserInfo'

interface CardInfoChipProps {
  card: Card
}

export default function CardInfoChip({ card }: CardInfoChipProps) {
  return (
    <div className="absolute right-0 top-[5.7rem] flex w-[20rem] flex-col gap-[2rem] rounded-[0.8rem] border border-var-gray3 p-[1.6rem]">
      <div className="flex flex-col gap-[0.6rem]">
        <h4 className="text-[1.2rem] font-[600] leading-[2rem]">담당자</h4>
        <UserInfo
          profileImageUrl={card.assignee.profileImageUrl}
          nickname={card.assignee.nickname}
          size="m"
        />
      </div>
      <div className="flex flex-col gap-[0.6rem]">
        <h4 className="text-[1.2rem] font-[600] leading-[2rem]">마감일</h4>
        <p className="text-[1.4rem] text-var-black2">{formatDateTimeDot(card.dueDate)}</p>
      </div>
    </div>
  )
}
