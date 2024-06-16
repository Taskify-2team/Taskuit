/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
import { Card } from '@/types/dashboard'
import Image from 'next/image'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { DashBoardCardInfo, TagChip } from '@/components'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { Tag } from '@/service/tag'
import LoadingTag from '@/components/Loading/LoadingTag'
import LoadingBox from '@/components/Loading/LoadingBox'
import { useState } from 'react'

interface DashBoardCardProps {
  card: Card
  tagList: Tag[]
  columnTitle: string
  columnId: number
  dragStart: (card: Card, id: number, tags: Tag[]) => void
  drop: () => void
}

export default function DashBoardCard({
  card,
  tagList,
  columnTitle,
  columnId,
  dragStart,
  drop,
}: DashBoardCardProps) {
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const [isImageLoading, setImageLoading] = useState(!!card.imageUrl)

  const handleOpenModal = () =>
    dispatch(
      openModal({
        modalName: 'DetailToDo',
        modalProps: { card, columnTitle, tags: tagList },
      }),
    )

  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className={`w-[100%] animate-slideDown rounded-[0.6rem] border-[0.1rem] p-[2rem] hover:border-var-blue ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black2 bg-var-black2'}`}
      draggable
      onDragStart={() => dragStart(card, columnId, tagList)}
      onDragEnd={() => drop()}
    >
      {isImageLoading && <LoadingBox theme={theme} />}
      {card.imageUrl && (
        <Image
          onLoad={() => setImageLoading(false)}
          width={400}
          height={0}
          src={card.imageUrl}
          alt="카드 이미지"
          className="mb-[1.2rem] animate-slideDown rounded-[0.6rem] object-cover"
          priority
        />
      )}
      <h3
        className={`ellipsis mb-[1rem] animate-slideDown text-start text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
      >
        {card.title}
      </h3>
      <div className="mb-[1.2rem]">
        {tagList ? (
          <ul className="flex flex-wrap gap-[0.6rem]">
            {tagList.map((tag) => (
              <TagChip key={tag.text} tag={tag} />
            ))}
          </ul>
        ) : (
          <LoadingTag theme={theme} />
        )}
      </div>
      <DashBoardCardInfo card={card} />
    </button>
  )
}
