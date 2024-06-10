import { ReactNode } from 'react'
import { SideMenu, DashBoardHeader } from '@/components'
import { useLoadTheme } from '@/store/\bcontext/ThemeContext'

const data = {}

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { theme } = useLoadTheme()

  return (
    <>
      <DashBoardHeader />
      <div className="flex min-h-[100vh] bg-var-gray1 pt-[7rem]">
        <SideMenu data={data} />
        <div
          className={`w-full p-[2rem] pl-[32rem] ${theme === 'normal' ? 'bg-var-gray1' : 'bg-var-black3'} transition ease-linear`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
