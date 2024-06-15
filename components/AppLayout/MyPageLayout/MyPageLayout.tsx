import { useLoadTheme } from '@/store/context/ThemeContext'
import Image from 'next/image'
import backIcon from '@/public/icons/arrowBack.svg'
import backIconGray from '@/public/icons/arrowBackGrey.svg'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface MyPageLayoutProps {
  EditProfile: ReactNode
  EditPassword: ReactNode
}

export default function MyPageLayout({ EditProfile, EditPassword }: MyPageLayoutProps) {
  const { theme } = useLoadTheme()
  const router = useRouter()
  return (
    <div className="flex flex-col gap-[1.2rem] p-[2rem] sm:p-[1.2rem]">
      <div
        className="my-[1.3rem] flex w-fit cursor-pointer gap-[0.6rem]"
        onClick={() => router.back()}
      >
        <Image
          src={theme === 'normal' ? backIcon : backIconGray}
          alt="화살표"
          width={20}
          height={20}
        />
        <p className={`text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}>
          돌아가기
        </p>
      </div>
      {EditProfile}
      {EditPassword}
    </div>
  )
}
