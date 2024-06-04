import { useEffect, useState } from 'react'
import Image from 'next/image'
import darkLogo from '@/public/icons/darklogo.svg'
import darkLogosmall from '@/public/icons/darklogosmall.svg'

export default function DarkHeader() {
  const [logoSrc, setLogoSrc] = useState<string>(darkLogo)

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 400) {
        setLogoSrc(darkLogosmall)
      } else {
        setLogoSrc(darkLogo)
      }
    }
    window.addEventListener('resize', updateLogo)
    updateLogo()

    return () => window.removeEventListener('resize', updateLogo)
  }, [])

  return (
    <div className="flex h-[7rem] w-full items-center justify-between bg-black pl-[1.6rem] pr-[8rem]">
      <Image src={logoSrc} alt="다크 헤더 로고" />
      <div className="flex gap-[3.6rem]">
        <p className="text-[1.6rem] text-white">로그인</p>
        <p className="text-[1.6rem] text-white">회원가입</p>
      </div>
    </div>
  )
}
