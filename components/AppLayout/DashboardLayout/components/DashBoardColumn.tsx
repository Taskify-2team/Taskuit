import { CreateTodoButton, DashBoardCard, DashBoardColumnHeader } from '@/components'
import { getCardList, getDashBoardCard } from '@/service/cards'
import { useCallback, useEffect, useRef, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Card } from '@/types/dashboard'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'

interface DashBoardColumnProps {
  columnId: number
  columnTitle: string
  dragStart: (card: Card, id: number) => void
  dragEnter: (id: number) => void
  drop: () => void
}

export default function DashBoardColumn({
  columnId,
  columnTitle,
  dragStart,
  dragEnter,
  drop,
}: DashBoardColumnProps) {
  const cardList = useAppSelector((state) => state.card.cardList[columnId])
  const obsRef = useRef(null)
  const dispatch = useAppDispatch()
  const [cursorId, setCursorId] = useState<number>(0)
  // const [cardList, setCardList] = useState<Card[]>([])
  const { requestFunction: getCardsRequest, pending } = useAsync(getDashBoardCard)

  const getCardsData = useCallback(async () => {
    if (typeof columnId === 'number') {
      // const result = await getCardsRequest({ columnId, cursorId })
      // if (result) {
      //   setCardList((prev) => [...prev, ...result.data.cards])
      //   setCursorId(result.data.cursorId)
      // }
      await dispatch(getCardList({ columnId, cursorId }))
    }
  }, [columnId, getCardsRequest, cursorId])

  const handleDeleteCard = (deletedCardId: number) => {
    setCardList(cardList.filter((cardItem) => cardItem.id !== deletedCardId))
  }

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (!pending && target.isIntersecting) {
        getCardsData()
      }
    },
    [getCardsData, pending],
  )

  useEffect(() => {
    getCardsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && !pending && cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [cursorId, pending, handleObserver])

  return (
    <section
      className="flex w-[35.4rem] flex-col gap-[1.6rem] pr-[2rem]"
      onDragEnter={() => dragEnter(columnId)}
    >
      <DashBoardColumnHeader cardList={cardList} columnId={columnId} columnTitle={columnTitle} />
      <CreateTodoButton
        onClick={() =>
          dispatch(
            openModal({
              modalName: 'AddToDo',
              modalProps: { columnId },
            }),
          )
        }
      />
      {cardList && (
        <div className="flex flex-col gap-[1.6rem]">
          {cardList.length > 0 &&
            cardList.map((cardItem) => (
              <DashBoardCard
                key={cardItem.id}
                columnTitle={columnTitle}
                card={cardItem}
                columnId={columnId}
                onDelete={handleDeleteCard}
                dragStart={dragStart}
                drop={drop}
              />
            ))}
          <div ref={obsRef} />
        </div>
      )}
    </section>
  )
}
