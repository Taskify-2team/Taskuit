import { ReactNode } from 'react'
import { Footer, LandingHeader } from '@/components'

interface LandingPageLayoutProps {
  children: ReactNode
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <>
      <LandingHeader />
      {children}
      <Footer />
    </>
  )
}
