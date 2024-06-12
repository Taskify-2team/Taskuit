import Image from 'next/image'
import loadingImage from '@/public/images/loadingImage.png'

export default function Loading() {
  return (
    <div className="fixed top-0 z-[100] flex h-screen w-screen items-center justify-center bg-var-black1/50">
      <Image src={loadingImage} width={100} alt="로딩이미지" className="animate-spin" />
    </div>
  )
}
