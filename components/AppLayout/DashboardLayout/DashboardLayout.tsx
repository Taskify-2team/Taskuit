import { Column } from '@/types/dashboard'
import { DashBoardColumn } from '@/components'

interface DashboardLayoutProps {
  columns: Column[] | undefined
  setColumns: React.Dispatch<React.SetStateAction<Column[] | undefined>> | undefined
}

export default function DashboardLayout({ columns, setColumns }: DashboardLayoutProps) {
  return (
    <div className="flex overflow-auto">
      {columns?.map((column) => (
        <DashBoardColumn
          key={column.id}
          columnId={column.id}
          columnTitle={column.title}
          progressList={columns}
          setColumns={setColumns}
        />
      ))}
    </div>
  )
}
