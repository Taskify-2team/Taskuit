import { useLoadTheme } from '@/store/context/ThemeContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import backIcon from '@/public/icons/arrowBack.svg'
import backIconGray from '@/public/icons/arrowBackGrey.svg'
import { useLoadLanguage } from '@/store/context/LanguageContext'

export default function BackButton() {
  const { theme } = useLoadTheme()
  const router = useRouter()
  const { language } = useLoadLanguage()

  return (
    <div
      className="my-[1.3rem] flex w-fit cursor-pointer gap-[0.6rem]"
      onClick={() => router.back()}
    >
      <Image
        src={theme === 'normal' ? backIcon : backIconGray}
        alt="화살표"
        width={20}
        height={20}
      />
      <p className={`text-[1.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}>
        {language === 'ko' ? '돌아가기' : 'Back'}
      </p>
    </div>
  )
}
