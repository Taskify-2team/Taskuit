import { ReactNode } from 'react'
import SideMenu from '@/components/SideMenu/SideMenu'
import DashBoardHeader from '@/components/Headers/DashBoardHeader/DashBoardHeader'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main>
      <div>
        <DashBoardHeader />
      </div>
      <div className="flex">
        <SideMenu />
        <div>{children}</div>
      </div>
    </main>
  )
}
