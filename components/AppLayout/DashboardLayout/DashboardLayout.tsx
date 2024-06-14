import { Card } from '@/types/dashboard'
import { CreateColumnButton, DashBoardColumn } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { useEffect, useRef } from 'react'
import { getCardList, updateCard } from '@/service/cards'
import { deleteCardItem, orderingCardList } from '@/store/reducers/cardReducer'
import { getDbUserId, getTagList, updateTags } from '@/service/tag'
import { useLoadUser } from '@/store/context/UserIdContext'
import findTag from '@/utils/findTag'
import useAsync from '@/hooks/useAsync'

interface DashboardLayoutProps {
  dashboardId: number
}

export default function DashboardLayout({ dashboardId }: DashboardLayoutProps) {
  const { data: columnList } = useAppSelector((state) => state.column.columnList)
  const { requestFunction: updateTagsRequest } = useAsync(updateTags)
  const { requestFunction: getTagListRequest } = useAsync(getTagList)
  const { userId } = useLoadUser()
  const dispatch = useAppDispatch()
  const dragItem = useRef({ id: 0 })
  const baseColumn = useRef(0)
  const dragOverColumn = useRef(0)
  const cursorId = useAppSelector((state) => state.card.cursorId[dragOverColumn.current])

  const dragStart = (card: Card, id: number) => {
    dragItem.current = card
    baseColumn.current = id
  }

  const dragEnter = (id: number) => {
    dragOverColumn.current = id
  }

  const drop = async () => {
    if (baseColumn.current !== dragOverColumn.current) {
      await dispatch(
        updateCard({
          newCardBody: { ...dragItem.current, columnId: dragOverColumn.current },
          cardId: dragItem.current.id,
        }),
      )

      await updateTagsRequest({
        userId: userDbId,
        columnId: dragOverColumn.current,
        cardId: dragItem.current.id,
        tags: findTag({ cardTags, cardId: dragItem.current.id }),
      })
      await getTagListRequest({ userId: userDbId, columnId: dragOverColumn.current })
      await dispatch(getCardList({ columnId: dragOverColumn.current, cursorId }))
      dispatch(orderingCardList({ columnId: dragOverColumn.current }))
      dispatch(deleteCardItem({ cardId: dragItem.current.id, columnId: baseColumn.current }))
    }
  }

  /** context의 userId를 db에 줘서 엑세스 토큰 역할을 하는 고유 id값 추출받는 코드 */
  const connectDbUserId = async () => {
    await dispatch(getDbUserId({ userId }))
  }

  useEffect(() => {
    if (!userDbId && userId) {
      connectDbUserId()
    }
  }, [userId])

  return (
    <div className="flex overflow-auto">
      {columnList?.map((column) => (
        <DashBoardColumn
          key={column.id}
          columnId={column.id}
          columnTitle={column.title}
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
        />
      ))}
      <section className="w-[35.4rem] p-[2rem] pt-[7.2rem]">
        <CreateColumnButton
          onClick={() => {
            dispatch(openModal({ modalName: 'AddColumn', modalProps: { dashboardId } }))
          }}
        />
      </section>
    </div>
  )
}
