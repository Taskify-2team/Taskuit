import { Column } from '@/types/dashboard'
import DashBoardColumn from './components/DashBoardColumn'

interface DashboardLayoutProps {
  columns: Column[] | undefined
}

export default function DashboardLayout({ columns }: DashboardLayoutProps) {
  return (
    <div className="flex overflow-auto">
      {columns?.map((column) => (
        <DashBoardColumn key={column.id} columnId={column.id} columnTitle={column.title} />
      ))}
    </div>
  )
}
