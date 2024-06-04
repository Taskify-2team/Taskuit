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
      <div className="flex bg-var-gray1">
        <SideMenu data={data} />
        <div className="w-full p-[2rem]">{children}</div>
      </div>
    </>
  )
}
