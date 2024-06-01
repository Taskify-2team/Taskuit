import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import DarkHeader from '../Headers/DarkHeader/DarkHeader'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <DarkHeader />
      {children}
      <Footer />
    </>
  )
}
