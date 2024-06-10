import { AppLayout } from '@/components'
import InviteList from '@/components/InviteList/InviteList'
import MyDashBoardList from '@/components/MyDashBoardList/MyDashBoardList'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function MyDashBoard() {
  const { theme } = useLoadTheme()

  return (
    <AppLayout>
      <div className="mx-auto my-0 flex w-[102.2rem] flex-col">
        <MyDashBoardList />
        <div
          className={`mt-[3rem] flex w-full flex-col gap-[2rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} px-[2.8rem] py-[3rem]`}
        >
          <p
            className={`text-[2.4rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            초대받은 대시보드
          </p>
          <InviteList />
        </div>
      </div>
    </AppLayout>
  )
}
