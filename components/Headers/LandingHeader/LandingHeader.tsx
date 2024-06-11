import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import themeIcon from '@/public/icons/brightness_89411.svg'
import logo from '@/public/images/taskuitLogo_main.png'
import { useLoadTheme } from '@/store/context/ThemeContext'
import HeaderButton from '../DashBoardHeader/buttons/HeaderButton'

export default function LightHeader() {
  const [isLogoFontVisible, setIsLogoFontVisible] = useState(true)
  const { handleSetTheme, theme } = useLoadTheme()

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
    <div
      className={`flex h-[7rem] w-full items-center justify-between ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2 text-white'} pl-[1.6rem] pr-[8rem]`}
    >
      <Link href="/">
        <div className="flex items-center gap-[1rem]">
          <Image src={logo} height={39} alt="라이트 헤더 로고" />
          {isLogoFontVisible && (
            <p className="text-[2.5rem] font-bold text-primary-violet">Taskuit</p>
          )}
        </div>
      </Link>
      <div className="flex gap-[3.6rem]">
        <HeaderButton buttonIcon={themeIcon} buttonName="테마" handleOnClick={handleSetTheme} />
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
