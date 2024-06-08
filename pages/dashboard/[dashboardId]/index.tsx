import { AppLayout, DashboardLayout } from '@/components'
import useAsync from '@/hooks/useAsync'
import { getColumns } from '@/service/columns'
import { Column } from '@/types/dashboard'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function Dashboard() {
  const [columns, setColumns] = useState<Column[]>()
  const router = useRouter()
  const { dashboardId } = router.query
  const { requestFunction: getColumnsRequest } = useAsync(getColumns)

  const getColumnsData = useCallback(async () => {
    if (typeof dashboardId === 'string') {
      const result = await getColumnsRequest(dashboardId)
      setColumns(result?.data.data)
    }
  }, [dashboardId, getColumnsRequest])

  useEffect(() => {
    if (dashboardId) {
      getColumnsData()
    }
  }, [dashboardId, getColumnsData])

  return (
    <AppLayout>
      <div className="flex overflow-auto">
        <DashboardLayout columns={columns} />
      </div>
    </AppLayout>
  )
}
