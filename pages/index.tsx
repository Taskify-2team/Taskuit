import LandingPageLayout from '@/components/AppLayout/LandingPageLayout/LandingPageLayout'
import Link from 'next/link'

export default function Home() {
  return (
    <LandingPageLayout>
      <div className="flex justify-center">
        <Link href="/mypage">내정보수정</Link>
      </div>
    </LandingPageLayout>
  )
}
