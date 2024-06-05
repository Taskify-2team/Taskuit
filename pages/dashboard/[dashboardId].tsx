import { AppLayout, DashBoardCard } from '@/components'
import useAsync from '@/hooks/useAsync'
import { getColumns } from '@/service/columns'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MyDashBoard() {
  const [data, setData] = useState()
  const router = useRouter()
  const { dashboardId } = router.query
  const { requestFunction: getColumnsRequest } = useAsync(getColumns)

  const getColumnsData = async () => {
    const result = await getColumnsRequest(dashboardId)
    setData(result.data.data)
  }
  console.log(data)

  useEffect(() => {
    getColumnsData()
  }, [])

  return (
    <AppLayout>
      <DashBoardCard
        card={{
          id: 2,
          title: 'title',
          description: 'dd',
          tags: ['d', 'dd'],
          dueDate: '33',
          assignee: { profileImageUrl: 'dd', nickname: 'dd', id: 2 },
          teamId: 'dd',
          columnId: 2,
          createdAt: 'dd',
          updatedAt: 'dd',
        }}
      />
    </AppLayout>
  )
}
