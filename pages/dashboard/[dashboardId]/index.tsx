import { AppLayout, DashboardLayout } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { getColumnList } from '@/service/columns'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { dashboardId } = router.query

  const getColumnsData = useCallback(async () => {
    if (typeof dashboardId === 'string') {
      await dispatch(getColumnList(dashboardId))
    }
  }, [dashboardId])

  useEffect(() => {
    if (dashboardId) {
      getColumnsData()
    }
  }, [dashboardId, getColumnsData])

  return (
    <AppLayout>
      <div className="flex overflow-auto">
        <DashboardLayout dashboardId={Number(dashboardId)} />
      </div>
    </AppLayout>
  )
}
