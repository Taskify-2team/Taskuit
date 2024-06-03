import { useEffect, useState } from 'react'
import Image from 'next/image'
import lightLogo from '@/public/icons/lightLogo.svg'
import lightLogosmall from '@/public/icons/lightlogosmall.svg'

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
      <Image src={logoSrc} alt="라이트 헤더 로고" />
      <div className="flex gap-[3.6rem]">
        <p className="text-[1.6rem]">로그인</p>
        <p className="text-[1.6rem]">회원가입</p>
      </div>
    </div>
  )
}
