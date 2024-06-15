import { useLoadTheme } from '@/store/context/ThemeContext'
import { HeaderButtonItems } from '@/types/header'
import Image from 'next/image'

export default function HeaderButton({ buttonIcon, buttonName, handleOnClick }: HeaderButtonItems) {
  const { theme } = useLoadTheme()

  return (
    <button
      type="button"
      className={`flex shrink-0 items-center gap-[0.5rem] rounded-xl border border-solid px-[1.6rem] py-[0.8rem] hover:border-var-blue sm:p-[0.8rem] md:p-[0.8rem] ${theme === 'normal' ? 'border-[#d9d9d9] bg-var-white' : 'border-var-black1 bg-var-black1'}`}
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
