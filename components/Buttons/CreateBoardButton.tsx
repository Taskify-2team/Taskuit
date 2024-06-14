import Image from 'next/image'
import addLogo from '@/public/icons/addLogo.svg'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function CreateBoardButton({ handleClick }: { handleClick: () => void }) {
  const { theme } = useLoadTheme()

  return (
    <div
      className={`flex h-[7rem] w-[calc((100%-2.6rem)/3)] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[0.6rem] border border-solid sm:h-[5.8rem] sm:w-full md:w-[calc((100%-2.6rem)/2)] ${theme === 'normal' ? 'bg-var-white' : 'border-var-black2 bg-var-black2'}`}
      onClick={handleClick}
    >
      <p
        className={`text-nowrap text-[1.8rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
      >
        새로운 대시보드
      </p>
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-var-gray3 bg-var-violet p-[0.3rem]">
        <Image src={addLogo} alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
