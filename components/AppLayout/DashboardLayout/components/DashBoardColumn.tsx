import { CreateTodoButton, DashBoardCard, DashBoardColumnHeader } from '@/components'
import { getCardList, getDashBoardCard } from '@/service/cards'
import { useCallback, useEffect, useRef, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Card } from '@/types/dashboard'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { Tag, getTagList } from '@/service/tag'
import { useDbId } from '@/store/context/DbIdContext'
import findTag from '@/utils/findTag'

interface DashBoardColumnProps {
  columnId: number
  columnTitle: string
  dragStart: (card: Card, id: number, tags: Tag[]) => void
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
  const cursorId = useAppSelector((state) => state.card.cursorId[columnId])
  const { cardListStatus } = useAppSelector((state) => state.card)
  const [tagList, setTagList] = useState([])
  const { dbId } = useDbId()
  const obsRef = useRef(null)
  const dispatch = useAppDispatch()
  const { requestFunction: getCardsRequest, pending } = useAsync(getDashBoardCard)
  const { requestFunction: getTagListRequest } = useAsync(getTagList)

  const getCardsData = useCallback(async () => {
    if (typeof columnId === 'number') {
      await dispatch(getCardList({ columnId, cursorId }))
    }
  }, [columnId, getCardsRequest, cursorId])

  const getTagsData = useCallback(async () => {
    if (dbId) {
      const result = await getTagListRequest({ userId: dbId, columnId })
      if (!result) return

      setTagList(result)
    }
  }, [getTagListRequest])

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (cardListStatus !== 'pending' && target.isIntersecting) {
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
    if (dbId) {
      getTagsData()
    }
  }, [dbId, cardList])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && cardListStatus !== 'pending' && cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [cursorId, pending, handleObserver])

  return (
    <section
      className="flex w-[35.4rem] flex-col gap-[1.6rem] border-r border-r-var-gray2 p-[2rem]"
      onDragEnter={() => dragEnter(columnId)}
      onDragOver={(e) => e.preventDefault()}
    >
      <DashBoardColumnHeader columnId={columnId} columnTitle={columnTitle} />
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
            cardList.map((cardItem: Card) => {
              const tag = findTag({ cardTags: tagList, cardId: cardItem.id })
              return (
                <DashBoardCard
                  key={cardItem.id}
                  columnTitle={columnTitle}
                  card={cardItem}
                  columnId={columnId}
                  dragStart={dragStart}
                  drop={drop}
                  tagList={tag}
                />
              )
            })}
          <div ref={obsRef} />
        </div>
      )}
    </section>
  )
}
