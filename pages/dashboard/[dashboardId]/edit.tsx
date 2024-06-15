import { AppLayout, BackButton, DeleteBoardButton } from '@/components'
import EditInvitation from '@/components/AppLayout/Edit/EditInvitation'
import EditMember from '@/components/AppLayout/Edit/EditMember'
import EditName from '@/components/AppLayout/Edit/EditName'
import { deleteDashBoard } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/useApp'
import { useEffect } from 'react'
import { closeModal } from '@/store/reducers/modalReducer'

export default function Edit() {
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()

  const handleDeleteDashboard = async () => {
    if (dashboardId) {
      await deleteDashBoard(Number(dashboardId))
      router.replace('/mydashboard')
    }
  }

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  return (
    <AppLayout>
      <div className="flex flex-col gap-[1.2rem] p-[2rem]">
        <BackButton />
        <EditName />
        <EditMember />
        <EditInvitation />
        <DeleteBoardButton onClick={() => handleDeleteDashboard()} />
      </div>
    </AppLayout>
  )
}
