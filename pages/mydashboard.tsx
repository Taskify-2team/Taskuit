import { AppLayout } from '@/components'
import InviteList from '@/components/InviteList/InviteList'
import MyDashBoardList from '@/components/MyDashBoardList/MyDashBoardList'

export default function MyDashBoard() {
  return (
    <AppLayout>
      <div className="mx-auto my-0 flex w-[102.2rem] flex-col">
        <MyDashBoardList />
        <div className="mt-[3rem] flex w-full flex-col gap-[2rem] rounded-[0.8rem] bg-var-white px-[2.8rem] py-[3rem]">
          <p className="text-[2.4rem] font-bold">초대받은 대시보드</p>
          <InviteList />
        </div>
      </div>
    </AppLayout>
  )
}
