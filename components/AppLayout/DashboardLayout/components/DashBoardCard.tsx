import { Card } from '@/types/dashboard'
import Image from 'next/image'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import TagChipList from '@/components/Chips/TagChipList'
import { DashBoardCardInfo } from '@/components'

interface DashBoardCardProps {
  card: Card
  columnTitle: string
  onDelete: (props: number) => void
}

export default function DashBoardCard({ card, columnTitle, onDelete }: DashBoardCardProps) {
  const dispatch = useAppDispatch()

  const handleOpenModal = () =>
    dispatch(openModal({ modalName: 'DetailToDo', modalProps: { card, columnTitle, onDelete } }))

  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className="w-[31.4rem] cursor-pointer rounded-[0.6rem] border-[0.1rem] border-var-gray3 bg-var-white p-[2rem]"
    >
      {card.imageUrl && (
        <div className="relative mb-[1.2rem] h-[16rem]">
          <Image fill src={card.imageUrl} alt="카드 이미지" className="object-cover" />
        </div>
      )}
      <h3 className="mb-[1rem] text-start text-[1.6rem]">{card.title}</h3>
      <TagChipList tags={card.tags} />
      <DashBoardCardInfo card={card} />
    </button>
  )
}
