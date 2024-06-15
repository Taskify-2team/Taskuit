import { Card } from '@/types/dashboard'
import { formatDateTimeDot } from '@/utils/formatDate'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import UserInfo from '../UserInfo/UserInfo'

interface CardInfoChipProps {
  card: Card
}

export default function CardInfoChip({ card }: CardInfoChipProps) {
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  return (
    <div
      className={`absolute right-0 top-[5.7rem] flex w-[20rem] flex-col gap-[2rem] rounded-[0.8rem] border sm:relative sm:right-unset sm:top-unset sm:mb-[1.6rem] sm:w-full sm:flex-row sm:justify-between ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1'} p-[1.6rem]`}
    >
      <div className="flex flex-col gap-[0.6rem]">
        <h4
          className={`text-[1.2rem] font-[600] leading-[2rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
        >
          {language === 'ko' ? '담당자' : 'Manager'}
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
          {language === 'ko' ? '마감일' : 'Due date'}
        </h4>
        <p className={`text-[1.4rem] ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray3'}`}>
          {formatDateTimeDot(card.dueDate)}
        </p>
      </div>
    </div>
  )
}
