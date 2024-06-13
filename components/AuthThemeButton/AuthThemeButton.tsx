import Image from 'next/image'
import themeIcon from '@/public/icons/brightness_89411.svg'
import themeIconWhite from '@/public/icons/brightnessWhite.svg'
import { AuthThemeButtonProps } from '@/types/auth'

export default function AuthThemeButton({ theme, handleSetTheme }: AuthThemeButtonProps) {
  const handleClick = () => {
    handleSetTheme()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`fixed bottom-[5rem] right-[5rem] flex h-[5.5rem] w-[8rem] items-center justify-center gap-[0.5rem] rounded-full border sm:right-[2rem] ${theme === 'normal' ? 'border-var-gray5 bg-var-white' : 'border-var-gray5 bg-var-black2 text-white'}`}
    >
      <Image
        alt="테마 아이콘"
        src={theme === 'normal' ? themeIcon : themeIconWhite}
        className="h-[2rem] w-[2rem]"
      />
      <span className="text-[1.8rem]">테마</span>
    </button>
  )
}
