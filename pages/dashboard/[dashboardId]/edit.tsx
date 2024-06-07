import { AppLayout, DeleteBoardButton } from '@/components'
import EditInvitation from '@/components/Edit/EditInvitation'
import EditMember from '@/components/Edit/EditMember'
import EditName from '@/components/Edit/EditName'
import { deleteDashBoard } from '@/service/dashboards'
import { useRouter } from 'next/router'

export default function Edit() {
  const router = useRouter()
  const { dashboardId } = router.query

  const handleDeleteDashboard = async () => {
    if (dashboardId) {
      await deleteDashBoard(Number(dashboardId))
      router.replace('/mydashboard')
    }
  }

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center gap-[1.2rem]">
        <EditName />
        <EditMember />
        <EditInvitation />
        <DeleteBoardButton onClick={() => handleDeleteDashboard()} />
      </div>
    </AppLayout>
  )
}
