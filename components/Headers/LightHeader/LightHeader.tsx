import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/public/images/taskuitLogo.png'
import lightLogo from '@/public/icons/lightLogo.svg'
import lightLogosmall from '@/public/icons/lightlogosmall.svg'
import Link from 'next/link'

export default function LightHeader() {
  const [logoSrc, setLogoSrc] = useState<string>(lightLogo)

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 400) {
        setLogoSrc(lightLogosmall)
      } else {
        setLogoSrc(lightLogo)
      }
    }
    window.addEventListener('resize', updateLogo)
    updateLogo()

    return () => window.removeEventListener('resize', updateLogo)
  }, [])

  return (
    <div className="flex h-[7rem] w-full items-center justify-between bg-white pl-[1.6rem] pr-[8rem]">
      <Link href="/">
        <div className="flex items-center gap-[1rem]">
          <Image src={logo} height={39} alt="라이트 헤더 로고" />
          <p className="text-[2.5rem] font-bold text-[#1A57C9]">Taskuit</p>
        </div>
      </Link>
      <div className="flex gap-[3.6rem]">
        <Link href="/login">
          <p className="text-[1.6rem]">로그인</p>
        </Link>
        <Link href="/signup">
          <p className="text-[1.6rem]">회원가입</p>
        </Link>
      </div>
    </div>
  )
}
