import { ReactNode } from 'react'
import { SideMenu, DashBoardHeader } from '@/components'

const data = {}

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <DashBoardHeader />
      <div className="flex min-h-[100vh] bg-var-gray1 pt-[7rem]">
        <SideMenu data={data} />
        <div className="w-full p-[2rem] pl-[32rem]">{children}</div>
      </div>
    </>
  )
}
