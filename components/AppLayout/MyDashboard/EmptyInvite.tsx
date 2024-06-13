import Image from 'next/image'
import emptyIcon from '@/public/icons/emptyDashBoard.svg'

export default function EmptyInvite({ children }: { children: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[2.4rem] py-[6rem]">
      <Image src={emptyIcon} alt="비어있는 대시보드 아이콘" width={100} height={100} />
      <p className="text-[1.8rem] text-var-gray4">{children}</p>
    </div>
  )
}
