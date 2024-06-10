import { Card, Column } from '@/types/dashboard'
import { CreateColumnButton, DashBoardColumn } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { useRef } from 'react'
import { updateDashBoardCard } from '@/service/cards'

interface DashboardLayoutProps {
  columns: Column[] | undefined
  setColumns: React.Dispatch<React.SetStateAction<Column[] | undefined>> | undefined
  dashboardId: number
}

export default function DashboardLayout({
  columns,
  setColumns,
  dashboardId,
}: DashboardLayoutProps) {
  const dispatch = useAppDispatch()
  const dragItem = useRef({ id: 0 })
  const baseColumn = useRef(0)
  const dragOverColumn = useRef(0)

  const dragStart = (card: Card, id: number) => {
    dragItem.current = card
    baseColumn.current = id
  }

  const dragEnter = (id: number) => {
    dragOverColumn.current = id
  }

  const drop = async () => {
    if (baseColumn.current !== dragOverColumn.current) {
      await updateDashBoardCard({
        newCardBody: { ...dragItem.current, columnId: dragOverColumn.current },
        cardId: dragItem.current.id,
      })
    }
  }

  return (
    <div className="flex overflow-auto">
      {columns?.map((column) => (
        <DashBoardColumn
          key={column.id}
          columnId={column.id}
          columnTitle={column.title}
          columnList={columns}
          setColumns={setColumns}
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
