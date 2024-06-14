import { Card } from '@/types/dashboard'
import { CreateColumnButton, DashBoardColumn } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { useEffect, useRef } from 'react'
import { getCardList, updateCard } from '@/service/cards'
import { deleteCardItem, orderingCardList } from '@/store/reducers/cardReducer'
import { getDbUserId } from '@/service/tag'
import { useLoadUser } from '@/store/context/UserIdContext'

interface DashboardLayoutProps {
  dashboardId: number
}

export default function DashboardLayout({ dashboardId }: DashboardLayoutProps) {
  const { data: columnList } = useAppSelector((state) => state.column.columnList)
  const { userId } = useLoadUser()
  const dispatch = useAppDispatch()
  const dragItem = useRef({ id: 0 })
  const baseColumn = useRef(0)
  const dragOverColumn = useRef(0)
  const cursorId = useAppSelector((state) => state.card.cursorId[dragOverColumn.current])
  const { userDbId } = useAppSelector((state) => state.tag)

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
      await dispatch(getCardList({ columnId: dragOverColumn.current, cursorId }))
      dispatch(orderingCardList({ columnId: dragOverColumn.current }))
      dispatch(deleteCardItem({ cardId: dragItem.current.id, columnId: baseColumn.current }))
    }
  }

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
