import { ReactNode } from 'react'
import Footer from '@/components/Footer/Footer'
import LightHeader from '@/components/Headers/LightHeader/LightHeader'

interface LandingPageLayoutProps {
  children: ReactNode
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <>
      <LightHeader />
      {children}
      <Footer />
    </>
  )
}
