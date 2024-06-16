/* eslint-disable react/jsx-no-useless-fragment */
import { CreateTodoButton, DashBoardCard, DashBoardColumnHeader } from '@/components'
import { getCardList } from '@/service/cards'
import { useCallback, useEffect, useRef, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Card } from '@/types/dashboard'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { useLoadTheme } from '@/store/context/ThemeContext'
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
  const { theme } = useLoadTheme()
  const cardList = useAppSelector((state) => state.card.cardList[columnId])
  const cursorId = useAppSelector((state) => state.card.cursorId[columnId])
  const { cardListStatus } = useAppSelector((state) => state.card)
  const [tagList, setTagList] = useState([])
  const { dbId } = useDbId()
  const obsRef = useRef(null)
  const dispatch = useAppDispatch()
  const { requestFunction: getTagListRequest } = useAsync(getTagList)

  const getCardsData = useCallback(async () => {
    if (typeof columnId === 'number') {
      await dispatch(getCardList({ columnId, cursorId }))
    }
  }, [columnId, getCardList, cursorId])

  const getTagsData = useCallback(async () => {
    if (columnId) {
      const result = await getTagListRequest(columnId)
      if (!result) return

      setTagList(result)
    }
  }, [getTagListRequest, columnId])

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (cardListStatus !== 'pending' && target.isIntersecting) {
        getCardsData()
      }
    },
    [getCardsData, cardListStatus],
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
  }, [cursorId, cardListStatus, handleObserver])

  return (
    <section
      className={`flex w-[35.4rem] flex-col gap-[1.6rem] border-r p-[2rem] sm:w-full sm:gap-[1rem] sm:border-b sm:px-[1.2rem] sm:py-[1.7rem] ${theme === 'normal' ? 'border-var-gray2' : 'border-var-black2'}`}
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
      <div
        className="w-full overflow-y-auto sm:!max-h-[50rem]"
        style={{ maxHeight: 'calc(100vh - 225px)' }}
      >
        <div className="flex flex-col gap-[1.6rem] sm:w-full sm:gap-[1rem]">
          {cardList?.length > 0 &&
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
          <div style={{ height: '1px' }} ref={obsRef} />
        </div>
      </div>
    </section>
  )
}
