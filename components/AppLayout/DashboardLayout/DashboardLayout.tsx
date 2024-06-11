import { Card } from '@/types/dashboard'
import { CreateColumnButton, DashBoardColumn } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { useRef } from 'react'
import { getCardList, updateDashBoardCard } from '@/service/cards'
import { deleteCardItem } from '@/store/reducers/cardReducer'

interface DashboardLayoutProps {
  dashboardId: number
}

export default function DashboardLayout({ dashboardId }: DashboardLayoutProps) {
  const { data: columnList } = useAppSelector((state) => state.column.columnList)
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

  const refreshCardList = async () => {
    await dispatch(getCardList({ columnId: dragOverColumn.current, cursorId }))
  }

  const drop = async () => {
    if (baseColumn.current !== dragOverColumn.current) {
      await updateDashBoardCard({
        newCardBody: { ...dragItem.current, columnId: dragOverColumn.current },
        cardId: dragItem.current.id,
      })
    }
    dispatch(deleteCardItem({ cardId: dragItem.current.id, columnId: baseColumn.current }))
    refreshCardList()
  }

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
      <section className="w-[35.4rem] pt-[5.2rem]">
        <CreateColumnButton
          onClick={() => {
            dispatch(openModal({ modalName: 'AddColumn', modalProps: { dashboardId } }))
          }}
        />
      </section>
    </div>
  )
}
