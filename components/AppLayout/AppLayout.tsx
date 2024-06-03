import { ReactNode } from 'react'
import { SideMenu, DashBoardHeader } from '@/components'



interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  
  return (
    <>
       <DashBoardHeader title={'대시보드 타이틀'} profileImageUrl={''}/>
      <div className="flex bg-var-gray1">
        <SideMenu />
        <div className="w-full p-[2rem]">{children}</div>
      </div>
    </>
  )
}
