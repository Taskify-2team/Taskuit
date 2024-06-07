import { CreateTodoButton, DashBoardCard } from '@/components'
import Image from 'next/image'
import settingIcon from '@/public/icons/settingicon.svg'
import { getDashBoardCard } from '@/service/cards'
import { useCallback, useEffect, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Card } from '@/types/dashboard'
import CircleChip from '../Chips/CircleChip'

interface DashBoardColumnProps {
  columnId: number
  columnTitle: string
}

export default function DashBoardColumn({ columnId, columnTitle }: DashBoardColumnProps) {
  const [cardList, setCardList] = useState<Card[]>([])
  const { requestFunction: getCardsRequest } = useAsync(getDashBoardCard)

  const getCardsData = useCallback(async () => {
    if (typeof columnId === 'number') {
      const result = await getCardsRequest(columnId)
      setCardList(result?.data.cards)
    }
  }, [columnId, getCardsRequest])

  const handleSettingButtonClick = () => {}

  const handleDeleteCard = (deletedCardId: number) => {
    setCardList(cardList.filter((cardItem) => cardItem.id !== deletedCardId))
  }

  useEffect(() => {
    if (columnId) {
      getCardsData()
    }
  }, [columnId, getCardsData])

  return (
    <section className="flex flex-col gap-[1.6rem] pr-[2rem]">
      <div className="mb-[0.9rem] flex items-center justify-between">
        <div className="flex items-center gap-[0.8rem]">
          <CircleChip color="#5534DA" />
          <h3 className="mr-[0.4rem] text-[1.8rem] font-[700]">{columnTitle}</h3>
          {cardList && (
            <div className="rounded-[0.4rem] bg-var-gray2 px-[0.6rem] py-[0.3rem] text-[1.2rem] text-var-gray5">
              {cardList.length}
            </div>
          )}
        </div>
        <button type="button" onClick={handleSettingButtonClick}>
          <Image src={settingIcon} alt="설정" width="24" height="24" />
        </button>
      </div>
      <CreateTodoButton />
      {cardList.length > 0 &&
        cardList.map((cardItem) => (
          <DashBoardCard
            key={cardItem.id}
            columnTitle={columnTitle}
            card={{
              id: cardItem.id,
              title: cardItem.title,
              description: cardItem.description,
              tags: cardItem.tags,
              dueDate: cardItem.dueDate,
              assignee: cardItem.assignee,
              teamId: cardItem.teamId,
              columnId: cardItem.columnId,
              createdAt: cardItem.createdAt,
              updatedAt: cardItem.updatedAt,
            }}
            onDelete={handleDeleteCard}
          />
        ))}
    </section>
  )
}
