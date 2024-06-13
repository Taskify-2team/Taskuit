import Image from 'next/image'
import loadingImage from '@/public/images/loadingImage.png'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function Loading() {
  const { theme } = useLoadTheme()

  return (
    <div
      className={`fixed top-0 z-[100] flex h-screen w-screen flex-col items-center justify-center gap-[1rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'}`}
    >
      <Image src={loadingImage} width={100} alt="로딩이미지" className="animate-spin" />
      <p className="font-[Logo] text-[4rem] font-bold text-primary-violet">Loading...</p>
    </div>
  )
}
