import { AppLayout } from '@/components'
import useAsync from '@/hooks/useAsync'
import { getColumns } from '@/service/columns'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [columns, setColumns] = useState()
  const router = useRouter()
  const { dashboardId } = router.query
  const { requestFunction: getColumnsRequest } = useAsync(getColumns)

  const getColumnsData = async () => {
    const result = await getColumnsRequest(dashboardId)
    setColumns(result?.data.data)
  }
  console.log(columns)

  useEffect(() => {
    if (dashboardId) {
      getColumnsData()
    }
  }, [dashboardId])

  return (
    <AppLayout>{columns?.map((column) => <div key={column.id}>{column.title}</div>)}</AppLayout>
  )
}
