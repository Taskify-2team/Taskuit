import { LandingPageLayout } from '@/components'
import Image from 'next/image'
import { ReactNode, useEffect } from 'react'
import mainSectionImage1 from '@/public/images/mainSectionImage1.png'
import mainSectionImage2 from '@/public/images/mainSectionImage2.png'
import mainImage from '@/public/images/mainImage.png'
import Link from 'next/link'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useRouter } from 'next/router'
import { useLoadLanguage } from '@/store/context/LanguageContext'

const pointCard =
  'sm:h-[68.6rem] sm:w-[34.3rem] sm:flex-col sm:gap-[10rem] md:h-[97.2rem] md:w-[66.4rem] md:flex-col'
const pointCardContent = 'sm:h-[25rem]  sm:gap-[2rem] md:h-[35rem] md:gap-[3rem]'
const pointCardImage =
  'sm:top-[5rem] sm:h-[24.8rem] sm:w-[29.3rem] md:left-[9.4rem] md:top-[5rem] md:h-[43.5rem] md:w-[52rem]'
function MainSmallCard({
  children,
  title,
  image,
}: {
  children: ReactNode
  title: string
  image: string
}) {
  const { theme } = useLoadTheme()

  return (
    <div className="h-full w-[37.8rem] overflow-hidden rounded-[0.8rem] sm:w-[34.3rem]">
      <div
        className={`flex h-[26rem] w-full items-center justify-center sm:h-[23.6rem] ${theme === 'normal' ? 'bg-var-gray2' : 'bg-var-black1'}`}
      >
        <div className="relative h-[23rem] w-[30rem] sm:h-[20rem] sm:w-[26rem]">
          <Image src={image} alt="카드 이미지" fill objectFit="contain" />
        </div>
      </div>
      <div
        className={`sm:h[11.3rem] flex h-[12.4rem] w-full flex-col gap-[1rem] p-[3rem] ${theme === 'normal' ? 'bg-var-gray3' : 'bg-var-black3'}`}
      >
        <p
          className={`text-[1.8rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
        >
          {title}
        </p>
        <p
          className={`text-[1.8rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'} whitespace-nowrap`}
        >
          {children}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const { theme } = useLoadTheme()
  const router = useRouter()
  const { language } = useLoadLanguage()

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.replace('/mydashboard')
    }
  }, [router])

  return (
    <LandingPageLayout>
      <div
        className={`flex h-full w-full flex-col items-center gap-[5rem] py-[9rem] sm:gap-[1.5rem] sm:pt-[5rem] md:pb-[16rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} transition ease-linear`}
      >
        <div className="relative h-[42.3rem] w-[72.2rem] sm:h-[16.8rem] sm:w-[28.7rem] md:h-[31.5rem] md:w-[53.8rem]">
          <Image src={mainImage} alt="메인 이미지" fill />
        </div>
        <div className="flex items-center justify-center gap-[1rem] sm:flex-col sm:gap-0">
          <h1
            className={`text-center text-[7.6rem] font-bold tracking-[-0.2rem] sm:text-[4rem] md:text-[5.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            {language === 'ko' ? '쉬운 일정 관리' : 'Easy management'}
          </h1>
          <span className="font-[logo] text-[8rem] font-bold text-primary-violet sm:text-[4.2rem] md:text-[6rem]">
            Taskuit
          </span>
        </div>
        <div>
          <p
            className={`text-center text-[2.2rem] font-bold sm:text-[1.4rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            {language === 'ko' ? '다양한 일정을 다양한 사람들과' : 'Manage various schedules'}
          </p>
          <div className="flex items-center gap-[0.3rem] sm:flex-col sm:gap-0">
            <div>
              <span className="text-[3rem] font-bold text-primary-violet sm:text-[2.4rem]">
                {language === 'ko' ? '쉽고,' : 'Easily,'}
              </span>
              <span className="text-[3rem] font-bold text-primary-violet sm:text-[2.4rem]">
                {language === 'ko' ? ' 체계적' : 'Systematically'}
              </span>
            </div>
            <p
              className={`text-center text-[2.2rem] font-bold sm:text-[1.4rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
            >
              {language === 'ko' ? ' 으로 관리해보세요!' : 'with various people'}
            </p>
          </div>
        </div>
        <Link href="/login">
          <span className="inline-block w-[28rem] cursor-pointer rounded-[0.8rem] bg-primary-violet py-[1.4rem] text-center text-[1.8rem] leading-tight text-var-white sm:w-[23.5rem] sm:py-[1.2rem]">
            {language === 'ko' ? '로그인' : 'Login'}
          </span>
        </Link>
        <div className="flex w-full flex-col items-center gap-[9rem]">
          <div
            className={`flex h-[60rem] w-[120rem] justify-center gap-[13rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-gray2' : 'bg-var-black3'} items-center py-[5rem] ${pointCard}`}
          >
            <div
              className={`flex h-[50rem] flex-col justify-center gap-[5rem] ${pointCardContent}`}
            >
              <p
                className={`text-[3rem] font-bold sm:text-center ${theme === 'normal' ? 'text-primary-violet' : 'text-var-gray4'}`}
              >
                Point 1
              </p>
              <p
                className={`whitespace-nowrap text-[5rem] font-bold sm:text-center sm:text-[3.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
              >
                {language === 'ko' ? '일의 우선순위를' : 'Manage your work'}
                <br />
                {language === 'ko' ? '관리하세요' : 'priorities'}
              </p>
              <p
                className={`whitespace-nowrap text-[1.6rem] sm:text-center ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray4'}`}
              >
                {language === 'ko'
                  ? '대시보드를 생성해 우선순위를 나누고'
                  : 'Create a dashboard to divide priorities'}
                <br />
                {language === 'ko' ? '업무를 관리해보세요' : 'and manage your tasks'}
              </p>
            </div>
            <div
              className={`m, relative h-[49.7rem] w-[55.2rem] overflow-hidden rounded-[0.8rem] ${pointCardImage}`}
            >
              <Image src={mainSectionImage1} alt="대시보드 이미지" fill objectFit="cover" />
            </div>
          </div>
          <div
            className={`flex h-[60rem] w-[120rem] flex-row-reverse justify-center gap-[13rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-gray2' : 'bg-var-black3'} items-center py-[5rem] ${pointCard}`}
          >
            <div
              className={`flex h-[49.7rem] w-[33rem] flex-col justify-center gap-[5rem] ${pointCardContent}`}
            >
              <p
                className={`text-[3rem] font-bold sm:text-center ${theme === 'normal' ? 'text-primary-violet' : 'text-var-gray4'}`}
              >
                Point 2
              </p>
              <p
                className={`whitespace-nowrap text-[5rem] font-bold sm:text-center sm:text-[3.6rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
              >
                {language === 'ko' ? '해야할 일을' : 'Try registering'}
                <br />
                {language === 'ko' ? '등록하세요' : 'for work'}
              </p>
              <p
                className={`text-[1.6rem] sm:text-center ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray4'}`}
              >
                {language === 'ko' ? '처리할 업무를 직접 등록해' : 'Sign up for tasks'}
                <br />
                {language === 'ko'
                  ? '팀원과 공유해보세요'
                  : 'to be handled and share them with your team members'}
              </p>
            </div>
            <div
              className={`relative h-[49.7rem] w-[59.4rem] overflow-hidden rounded-[0.8rem] ${pointCardImage}`}
            >
              <Image src={mainSectionImage2} alt="할일 생성 이미지" fill objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-none">
            <p
              className={`text-center text-[2.8rem] font-bold sm:w-fit md:text-center ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
            >
              {language === 'ko' ? '생산성을 높이는 다양한 설정 ⚡️' : 'Different settings ⚡️'}
            </p>
            <div className="md: mt-[3.6rem] flex h-full w-[120rem] items-center gap-[3.3rem] sm:w-fit sm:flex-col md:w-fit md:flex-col">
              <MainSmallCard
                title={language === 'ko' ? '대시보드 설정' : 'Dashboard Settings'}
                image="/images/cardImage1.png"
              >
                {language === 'ko'
                  ? '대시보드 색상과 이름을 변경할 수 있어요'
                  : 'Can change the color, name'}
              </MainSmallCard>
              <MainSmallCard
                title={language === 'ko' ? '초대' : 'Invitation'}
                image="/images/cardImage2.png"
              >
                {language === 'ko'
                  ? '새로운 팀원을 초대할 수 있어요'
                  : 'Can invite a new team member'}
              </MainSmallCard>
              <MainSmallCard
                title={language === 'ko' ? '구성원' : 'Member'}
                image="/images/cardImage3.png"
              >
                {language === 'ko'
                  ? '구성원을 초대하고 내보낼 수 있어요'
                  : 'Can invite and export members'}
              </MainSmallCard>
            </div>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  )
}
