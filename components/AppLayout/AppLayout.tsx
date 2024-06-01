import { ReactNode } from 'react'
import SideMenu from '@/components/SideMenu/SideMenu'
import DashBoardHeader from '@/components/Headers/DashBoardHeader/DashBoardHeader'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <DashBoardHeader />
      <div className="bg-var-gray1 flex">
        <SideMenu />
        <div className="p-[2rem]">{children}</div>
      </div>
    </>
  )
}
