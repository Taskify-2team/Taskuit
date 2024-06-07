import { LandingPageLayout } from '@/components'
import Image from 'next/image'
import { ReactNode } from 'react'
import mainSectionImage1 from '@/public/images/mainSectionImage1.png'
import mainSectionImage2 from '@/public/images/mainSectionImage2.png'
import mainImage from '@/public/images/mainImage.jpg'
import Link from 'next/link'

function MainSmallCard({
  children,
  title,
  image,
}: {
  children: ReactNode
  title: string
  image: string
}) {
  return (
    <div className="h-full w-[37.8rem] overflow-hidden rounded-[0.8rem]">
      <div className="flex h-[26rem] w-full items-center justify-center bg-var-black1">
        <div className="relative h-[23rem] w-[30rem]">
          <Image src={image} alt="카드 이미지" fill objectFit="contain" />
        </div>
      </div>
      <div className="flex h-[12.4rem] w-full flex-col gap-[1rem] bg-var-black3 p-[3rem]">
        <p className="text-[1.8rem] font-bold text-var-white">{title}</p>
        <p className="text-[1.6rem] text-var-white">{children}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <LandingPageLayout>
      <div className="flex h-full w-full flex-col items-center gap-[5rem] py-[9rem]">
        <div className="relative h-[42.3rem] w-[72.2rem]">
          <Image src={mainImage} alt="메인 이미지" fill />
        </div>
        <h1 className="text-[7.6rem] font-bold tracking-[-0.2rem]">
          새로운 일정 관리
          <span className="text-[8rem] font-bold text-primary-violet">Taskifty</span>
        </h1>
        <p className="text-center text-[1.8rem]">
          다양한 일정을 다양한 사람들과
          <br /> 체계적으로 관리해보세요!
        </p>
        <Link href="/login">
          <span className="inline-block w-[28rem] cursor-pointer rounded-[0.8rem] bg-primary-violet py-[1.4rem] text-center text-[1.8rem] leading-tight text-var-white">
            로그인하기
          </span>
        </Link>
        <div className="flex flex-col gap-[9rem]">
          <div className="flex h-[60rem] w-[120rem] justify-center gap-[13rem] rounded-[0.8rem] bg-var-black3 p-[5rem]">
            <div className="flex h-[50rem] w-[33rem] flex-col justify-center gap-[5rem]">
              <p className="text-[3rem] text-var-gray4">Point 1</p>
              <p className="text-[5rem] font-bold text-var-white">
                일의 우선순위를
                <br />
                관리하세요
              </p>
              <p className="text-[1.6rem] text-var-gray4">
                대시보드를 생성해 우선순위를 나누고
                <br /> 업무를 관리해보세요
              </p>
            </div>
            <div className="relative h-[49.7rem] w-[59.4rem] overflow-hidden rounded-[0.8rem]">
              <Image src={mainSectionImage1} alt="대시보드 이미지" fill />
            </div>
          </div>
          <div className="flex h-[60rem] w-[120rem] flex-row-reverse justify-center gap-[13rem] rounded-[0.8rem] bg-var-black3 p-[5rem]">
            <div className="flex h-[49.7rem] w-[33rem] flex-col justify-center gap-[5rem]">
              <p className="text-[3rem] text-var-gray4">Point 2</p>
              <p className="text-[5rem] font-bold text-var-white">
                해야할 일을
                <br /> 등록하세요
              </p>
              <p className="text-[1.6rem] text-var-gray4">
                처리할 업무를 직접 등록해
                <br />
                팀원과 공유해보세요
              </p>
            </div>
            <div className="relative h-[49.7rem] w-[59.4rem] overflow-hidden rounded-[0.8rem]">
              <Image src={mainSectionImage2} alt="할일 생성 이미지" fill objectFit="cover" />
            </div>
          </div>
          <div>
            <p className="text-[2.8rem] font-bold">생산성을 높이는 다양한 설정 ⚡️</p>
            <div className="mt-[3.6rem] flex h-full w-[120rem] gap-[3.3rem]">
              <MainSmallCard title="대시보드 설정" image="/images/cardImage1.png">
                대시보드 사진과 이름을 변경할 수 있어요.
              </MainSmallCard>
              <MainSmallCard title="초대" image="/images/cardImage2.png">
                새로운 팀원을 초대할 수 있어요.
              </MainSmallCard>
              <MainSmallCard title="구성원" image="/images/cardImage3.png">
                구성원을 초대하고 내보낼 수 있어요.
              </MainSmallCard>
            </div>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  )
}
