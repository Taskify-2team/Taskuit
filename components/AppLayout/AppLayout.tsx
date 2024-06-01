import { ReactNode } from 'react'
import { SideMenu, DashBoardHeader } from '@/components'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <DashBoardHeader />
      <div className="flex bg-var-gray1">
        <SideMenu />
        <div className="p-[2rem]">{children}</div>
      </div>
    </>
  )
}
