import { Card } from '@/types/dashboard'
import { formatDateTimeDot } from '@/utils/formatDate'
import { useLoadTheme } from '@/store/context/ThemeContext'
import UserInfo from '../UserInfo/UserInfo'

interface CardInfoChipProps {
  card: Card
}

export default function CardInfoChip({ card }: CardInfoChipProps) {
  const { theme } = useLoadTheme()

  return (
    <div
      className={`absolute right-0 top-[5.7rem] flex w-[20rem] flex-col gap-[2rem] rounded-[0.8rem] border ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1'} p-[1.6rem]`}
    >
      <div className="flex flex-col gap-[0.6rem]">
        <h4
          className={`text-[1.2rem] font-[600] leading-[2rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
        >
          담당자
        </h4>
        <UserInfo
          profileImageUrl={card.assignee.profileImageUrl}
          nickname={card.assignee.nickname}
          size="m"
        />
      </div>
      <div className="flex flex-col gap-[0.6rem]">
        <h4
          className={`text-[1.2rem] font-[600] leading-[2rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
        >
          마감일
        </h4>
        <p className={`text-[1.4rem] ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray3'}`}>
          {formatDateTimeDot(card.dueDate)}
        </p>
      </div>
    </div>
  )
}
