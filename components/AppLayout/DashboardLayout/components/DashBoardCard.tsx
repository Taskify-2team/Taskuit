import { Card } from '@/types/dashboard'
import Image from 'next/image'
import { formatDate } from '@/utils/formatDate'
import calenderIcon from '@/public/icons/calendarGray5.svg'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import UserProfile from '@/components/UserInfo/UserProfile'
import TagChipList from '@/components/Chips/TagChipList'

interface CardProps {
  card: Card
  columnTitle: string
  onDelete: (props: number) => void
}

export default function DashBoardCard({ card, columnTitle, onDelete }: CardProps) {
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      onClick={() =>
        dispatch(
          openModal({ modalName: 'DetailToDo', modalProps: { card, columnTitle, onDelete } }),
        )
      }
      className="w-[31.4rem] cursor-pointer rounded-[0.6rem] border-[0.1rem] border-var-gray3 bg-var-white p-[2rem]"
    >
      {card.imageUrl && (
        <div className="relative mb-[1.2rem] h-[16rem]">
          <Image fill src={card.imageUrl} alt="카드 이미지" className="object-cover" />
        </div>
      )}
      <h3 className="mb-[1rem] text-start text-[1.6rem]">{card.title}</h3>
      <TagChipList tags={card.tags} />
      <div className="flex justify-between">
        <div className="flex items-center gap-[0.6rem] text-[1.2rem] text-var-gray5">
          <Image src={calenderIcon} alt="날짜" width="18" height="18" />
          {formatDate(card.createdAt)}
        </div>
        <UserProfile
          profileImageUrl={card.assignee.profileImageUrl}
          nickname={card.assignee.nickname}
          size="s"
        />
      </div>
    </button>
  )
}
