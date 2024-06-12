import Image from 'next/image'
import Link from 'next/link'
import emailIcon from '@/public/icons/emailIconDark.svg'
import emailIconWhite from '@/public/icons/emailIcon.svg'
import facebookIcon from '@/public/icons/facebookIconDark.svg'
import facebookIconWhite from '@/public/icons/facebookIcon.svg'
import instagramIcon from '@/public/icons/instagramIconDark.svg'
import instagramIconWhite from '@/public/icons/instagramIcon.svg'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function Footer() {
  const { theme } = useLoadTheme()

  return (
    <div
      className={`flex h-[10rem] w-full items-center justify-between px-[14rem] sm:mt-[3rem] sm:flex-col sm:gap-[1.2rem] md:px-[4rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'}`}
    >
      <p
        className={`text-[1.6rem] font-normal ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
      >
        @FTF-Coding
      </p>
      <div className="flex gap-[3.2rem]">
        <Link href="/">
          <p
            className={`text-[1.6rem] font-normal ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            Privacy Policy
          </p>
        </Link>
        <Link href="/">
          <p
            className={`text-[1.6rem] font-normal ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            FAQ
          </p>
        </Link>
      </div>
      <div className="flex gap-[1.4rem] sm:mt-[6.8rem] sm:pb-[9rem]">
        <Link href="https://mail.google.com/mail" target="_blank">
          <Image
            src={theme === 'normal' ? emailIcon : emailIconWhite}
            alt="이메일 아이콘"
            width={22}
            height={22}
          />
        </Link>
        <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <Image
            src={theme === 'normal' ? facebookIcon : facebookIconWhite}
            alt="페이스북 아이콘"
            width={22}
            height={22}
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            src={theme === 'normal' ? instagramIcon : instagramIconWhite}
            alt="인스타그램 아이콘"
            width={22}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
