import Image from 'next/image'
import emptyPageImage from '@/public/images/taskuitLogo_404.png'
import { LongButton } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-[2rem]">
      <Image src={emptyPageImage} alt="404이미지" width={400} />
      <p className="text-[4rem] font-bold">잘못된 접근입니다!</p>
      <Link href="/" replace>
        <LongButton type="button" disabled={false}>
          <p className="text-[2rem]">메인으로 이동</p>
        </LongButton>
      </Link>
    </div>
  )
}
