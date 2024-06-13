import Image from 'next/image'
import Link from 'next/link'
import kakaoIcon from '@/public/icons/kakao.svg'
import kakaoIconWhite from '@/public/icons/KakaoWhite.svg'
import facebookIcon from '@/public/icons/facebookIconDark.svg'
import facebookIconWhite from '@/public/icons/facebookIcon.svg'
import githubIcon from '@/public/icons/githubIcon.svg'
import githubIconWhite from '@/public/icons/githubIconWhite.svg'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function Footer() {
  const { theme } = useLoadTheme()

  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY)
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Taskuit',
          description: '다양한 사람들과 일정을 공유해 보세요!',
          imageUrl: '',
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
        },
        buttons: [
          {
            title: '일정 공유하러 가기',
            link: {
              mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            },
          },
        ],
      })
    }
  }

  const shareFacebook = () => {
    const title = '페이스북 공유하기'
    window.open(
      `https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
      title,
      'toolbar=0,status=0,width=655,height=520',
    )
  }

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
        <Image
          src={theme === 'normal' ? kakaoIcon : kakaoIconWhite}
          alt="카카오톡 아이콘"
          width={22}
          height={22}
          onClick={shareKakao}
        />
        <Image
          src={theme === 'normal' ? facebookIcon : facebookIconWhite}
          alt="페이스북 아이콘"
          width={22}
          height={22}
          onClick={shareFacebook}
        />
        <Link href="https://github.com/Taskify-2team/Taskify" target="_blank">
          <Image
            src={theme === 'normal' ? githubIcon : githubIconWhite}
            alt="깃허브 아이콘"
            width={22}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
