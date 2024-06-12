import { Card } from '@/types/dashboard'
import Image from 'next/image'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import TagChipList from '@/components/Chips/TagChipList'
import { DashBoardCardInfo } from '@/components'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useRef } from 'react'

interface DashBoardCardProps {
  card: Card
  columnTitle: string
  columnId: number
  dragStart: (card: Card, id: number) => void
  drop: () => void
}

export default function DashBoardCard({
  card,
  columnTitle,
  columnId,
  dragStart,
  drop,
}: DashBoardCardProps) {
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const draggableRef = useRef<HTMLButtonElement>(null)

  const handleOpenModal = () =>
    dispatch(
      openModal({
        modalName: 'DetailToDo',
        modalProps: { card, columnTitle },
      }),
    )

  const handleDragStart = () => {
    dragStart(card, columnId)
  }

  const handleDrag = () => {
    if (draggableRef.current) {
      draggableRef.current.classList.add('cursor-grabbing')
    }
  }

  const handleDragEnd = () => {
    drop()
    if (draggableRef.current) {
      draggableRef.current.classList.remove('cursor-grabbing')
    }
  }

  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className={`w-[31.4rem] animate-slideDown rounded-[0.6rem] border-[0.1rem] p-[2rem] outline-[0.1rem] hover:border-var-blue ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black2 bg-var-black2'}`}
      draggable
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={draggableRef}
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
      <h3
        className={`mb-[1rem] text-start text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
      >
        {card.title}
      </h3>
      <TagChipList tags={card.tags} />
      <DashBoardCardInfo card={card} />
    </button>
  )
}
