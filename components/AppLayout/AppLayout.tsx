import { ReactNode } from 'react'
import { SideMenu, DashBoardHeader } from '@/components'
import { useLoadTheme } from '@/store/context/ThemeContext'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { theme } = useLoadTheme()

  return (
    <>
      <DashBoardHeader />
      <div className="flex min-h-[100vh] bg-var-gray1">
        <SideMenu />
        <div
          className={`w-full pl-[30rem] pt-[8rem] ${theme === 'normal' ? 'bg-var-gray1' : 'bg-var-black3'} transition ease-linear`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
