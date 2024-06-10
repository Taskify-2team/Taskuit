import { CreateTodoButton, DashBoardCard, DashBoardColumnHeader } from '@/components'
import { getDashBoardCard } from '@/service/cards'
import { useCallback, useEffect, useRef, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Card, Column } from '@/types/dashboard'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'

interface DashBoardColumnProps {
  columnId: number
  columnTitle: string
  setColumns: React.Dispatch<React.SetStateAction<Column[] | undefined>> | undefined
  columnList: Column[]
  dragStart: (card: Card, id: number) => void
  dragEnter: (id: number) => void
  drop: () => void
}

export default function DashBoardColumn({
  columnId,
  columnTitle,
  setColumns,
  columnList,
  dragStart,
  dragEnter,
  drop,
}: DashBoardColumnProps) {
  const obsRef = useRef(null)
  const dispatch = useAppDispatch()
  const [cursorId, setCursorId] = useState<number | null>(0)
  const [cardList, setCardList] = useState<Card[]>([])
  const { requestFunction: getCardsRequest, pending } = useAsync(getDashBoardCard)

  const getCardsData = useCallback(async () => {
    if (typeof columnId === 'number') {
      const result = await getCardsRequest({ columnId, cursorId })
      if (result) {
        setCardList((prev) => [...prev, ...result.data.cards])
        setCursorId(result.data.cursorId)
      }
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
      <DashBoardColumnHeader
        setColumns={setColumns}
        cardList={cardList}
        columnId={columnId}
        columnTitle={columnTitle}
      />
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
                columnList={columnList}
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
