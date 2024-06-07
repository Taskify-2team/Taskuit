import { AppLayout, DeleteBoardButton } from '@/components'
import EditInvitation from '@/components/Edit/EditInvitation'
import EditMember from '@/components/Edit/EditMember'
import EditName from '@/components/Edit/EditName'
import { deleteDashBoard } from '@/service/dashboards'
import { useRouter } from 'next/router'
import backIcon from '@/public/icons/arrowBack.svg'
import Image from 'next/image'

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
      <div className="flex flex-col gap-[1.2rem]">
        <div className="flex cursor-pointer gap-[0.6rem] py-[1.3rem]" onClick={() => router.back()}>
          <Image src={backIcon} alt="화살표" width={20} height={20} />
          <p className="text-[1.6rem]">돌아가기</p>
        </div>
        <EditName />
        <EditMember />
        <EditInvitation />
        <DeleteBoardButton onClick={() => handleDeleteDashboard()} />
      </div>
    </AppLayout>
  )
}
