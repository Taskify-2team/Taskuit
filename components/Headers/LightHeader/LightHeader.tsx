import { useEffect, useState } from 'react'
import Image from 'next/image'
import lightlogo from './lightLogo.svg'
import lightlogosmall from './lightlogosmall.svg'

export default function LightHeader() {
  const [logoSrc, setLogoSrc] = useState<string>(lightlogo)

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 400) {
        setLogoSrc(lightlogosmall)
      } else {
        setLogoSrc(lightlogo)
      }
    }
    window.addEventListener('resize', updateLogo)
    updateLogo()

    return () => window.removeEventListener('resize', updateLogo)
  }, [])

  return (
    <div className="flex justify-between items-center h-[7rem] pr-[8rem] pl-[1.6rem] bg-white w-full">
      <Image src={logoSrc} alt="라이트 헤더 로고" />
      <div className="flex gap-[3.6rem]">
        <p className="text-[1.6rem]">로그인</p>
        <p className="text-[1.6rem]">회원가입</p>
      </div>
    </div>
  )
}
