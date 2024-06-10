import { Column } from '@/types/dashboard'
import { CreateColumnButton, DashBoardColumn } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'

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
  return (
    <div className="flex overflow-auto">
      {columns?.map((column) => (
        <DashBoardColumn
          key={column.id}
          columnId={column.id}
          columnTitle={column.title}
          setColumns={setColumns}
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
