import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/taskuitLogo.png'

export default function DarkHeader() {
  const [isLogoFontVisible, setIsLogoFontVisible] = useState(true)

  useEffect(() => {
    const updateLogoFont = () => {
      if (window.innerWidth < 400) {
        setIsLogoFontVisible(false)
      } else {
        setIsLogoFontVisible(true)
      }
    }
    window.addEventListener('resize', updateLogoFont)
    updateLogoFont()

    return () => window.removeEventListener('resize', updateLogoFont)
  }, [])

  return (
    <div className="flex h-[7rem] w-full items-center justify-between bg-black pl-[1.6rem] pr-[8rem]">
      <div className="flex items-center gap-[1rem]">
        <Image src={logo} height={39} alt="로고 아이콘" />
        {isLogoFontVisible && <p className="text-[2.5rem] font-bold text-[#1A57C9]">Taskuit</p>}
      </div>
      <div className="flex gap-[3.6rem]">
        <Link href="/login">
          <p className="text-[1.6rem] text-white">로그인</p>
        </Link>
        <Link href="/signup">
          <p className="text-[1.6rem] text-white">회원가입</p>
        </Link>
      </div>
    </div>
  )
}
