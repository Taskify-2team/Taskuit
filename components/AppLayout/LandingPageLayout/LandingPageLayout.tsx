import { ReactNode } from 'react'
import { Footer, LightHeader } from '@/components'

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
