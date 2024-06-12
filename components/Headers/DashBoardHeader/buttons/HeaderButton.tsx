import { useLoadTheme } from '@/store/context/ThemeContext'
import Image, { StaticImageData } from 'next/image'

interface ButtonItems {
  buttonIcon: StaticImageData
  buttonName: string
  handleOnClick?: () => void
}

export default function HeaderButton({ buttonIcon, buttonName, handleOnClick }: ButtonItems) {
  const { theme } = useLoadTheme()

  return (
    <button
      type="button"
      className={`flex items-center gap-[0.3rem] rounded-xl border border-solid px-[1.6rem] sm:px-[0.3rem] md:px-[0.8rem] ${theme === 'normal' ? 'border-[#d9d9d9] bg-var-white' : 'border-var-black1 bg-var-black1'}`}
      onClick={() => {
        if (handleOnClick) {
          handleOnClick()
        }
      }}
    >
      <Image src={buttonIcon} alt="버튼 아이콘" width={18} height={18} />
      <p className="text-[1.6rem] sm:hidden md:hidden">{buttonName}</p>
    </button>
  )
}
