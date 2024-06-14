import { Card } from '@/types/dashboard'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { DashBoardCardInfo, TagChip } from '@/components'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useEffect, useState } from 'react'
import findTag from '@/utils/findTag'

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
  const cardTags = useAppSelector((state) => state.tag.tagList[columnId])
  const { theme } = useLoadTheme()
  const [tags, setTags] = useState([])

  const handleOpenModal = () =>
    dispatch(
      openModal({
        modalName: 'DetailToDo',
        modalProps: { card, columnTitle },
      }),
    )

  useEffect(() => {
    if (cardTags) {
      setTags(findTag({ cardTags, cardId: card.id }))
    }
  }, [cardTags])

  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className={`w-[31.4rem] animate-slideDown rounded-[0.6rem] border-[0.1rem] p-[2rem] outline-[0.1rem] hover:border-var-blue ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black2 bg-var-black2'}`}
      draggable
      onDragStart={() => dragStart(card, columnId)}
      onDragEnd={() => drop()}
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
      <div className="mb-[1.2rem]">
        <ul className="flex gap-[0.6rem]">{tags?.map((tag) => <TagChip key={tag} tag={tag} />)}</ul>
      </div>
      <DashBoardCardInfo card={card} />
    </button>
  )
}
