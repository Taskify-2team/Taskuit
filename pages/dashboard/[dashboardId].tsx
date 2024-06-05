import { AppLayout } from '@/components'
import DashBoardColumn from '@/components/DashBoard/DashBoardColumn'
import useAsync from '@/hooks/useAsync'
import { getColumns } from '@/service/columns'
import { Column } from '@/types/dashboard'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [columns, setColumns] = useState<Column[]>()
  const router = useRouter()
  const { dashboardId } = router.query
  const { requestFunction: getColumnsRequest } = useAsync(getColumns)

  const getColumnsData = async () => {
    if (typeof dashboardId === 'string') {
      const result = await getColumnsRequest(dashboardId)
      setColumns(result?.data.data)
    }
  }

  useEffect(() => {
    if (dashboardId) {
      getColumnsData()
    }
  }, [dashboardId])

  return (
    <AppLayout>
      <div className="flex">
        {columns?.map((column) => (
          <div key={column.id}>
            {column.title}
            <DashBoardColumn />
          </div>
        ))}
      </div>
    </AppLayout>
  )
}
