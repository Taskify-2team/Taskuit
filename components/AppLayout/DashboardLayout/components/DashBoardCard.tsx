import { Card, Column } from '@/types/dashboard'
import Image from 'next/image'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import TagChipList from '@/components/Chips/TagChipList'
import { DashBoardCardInfo } from '@/components'

interface DashBoardCardProps {
  card: Card
  progressList: Column[]
  columnTitle: string
  onDelete: (props: number) => void
}

export default function DashBoardCard({
  card,
  progressList,
  columnTitle,
  onDelete,
}: DashBoardCardProps) {
  const dispatch = useAppDispatch()

  const handleOpenModal = () =>
    dispatch(
      openModal({
        modalName: 'DetailToDo',
        modalProps: { card, progressList, columnTitle, onDelete },
      }),
    )

  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className="w-[31.4rem] cursor-pointer rounded-[0.6rem] border-[0.1rem] border-var-gray3 bg-var-white p-[2rem]"
    >
      {card.imageUrl && (
        <Image
          width={400}
          height={400}
          src={card.imageUrl}
          alt="카드 이미지"
          className="mb-[1.2rem] rounded-[0.6rem] object-cover"
          priority
        />
      )}
      <h3 className="mb-[1rem] text-start text-[1.6rem]">{card.title}</h3>
      <TagChipList tags={card.tags} />
      <DashBoardCardInfo card={card} />
    </button>
  )
}
