import { AppLayout, DeleteBoardButton } from '@/components'
import EditInvitation from '@/components/Edit/EditInvitation'
import EditMember from '@/components/Edit/EditMember'
import EditName from '@/components/Edit/EditName'
import { deleteDashBoard } from '@/service/dashboards'
import { useRouter } from 'next/router'
import backIcon from '@/public/icons/arrowBack.svg'
import backIconGray from '@/public/icons/arrowBackGrey.svg'
import Image from 'next/image'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function Edit() {
  const router = useRouter()
  const { dashboardId } = router.query
  const { theme } = useLoadTheme()

  const handleDeleteDashboard = async () => {
    if (dashboardId) {
      await deleteDashBoard(Number(dashboardId))
      router.replace('/mydashboard')
    }
  }

  return (
    <AppLayout>
      <div className="flex flex-col gap-[1.2rem] p-[2rem]">
        <div
          className="my-[1.3rem] flex w-fit cursor-pointer gap-[0.6rem]"
          onClick={() => router.back()}
        >
          <Image
            src={theme === 'normal' ? backIcon : backIconGray}
            alt="화살표"
            width={20}
            height={20}
          />
          <p
            className={`text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            돌아가기
          </p>
        </div>
        <EditName />
        <EditMember />
        <EditInvitation />
        <DeleteBoardButton onClick={() => handleDeleteDashboard()} />
      </div>
    </AppLayout>
  )
}
