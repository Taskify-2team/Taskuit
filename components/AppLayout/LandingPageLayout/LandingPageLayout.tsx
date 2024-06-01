import { ReactNode } from 'react'
import Footer from '@/components/Footer/Footer'
import DarkHeader from '@/components/Headers/DarkHeader/DarkHeader'

interface LandingPageLayoutProps {
  children: ReactNode
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <>
      <DarkHeader />
      {children}
      <Footer />
    </>
  )
}
