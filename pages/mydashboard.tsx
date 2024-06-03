import { AppLayout } from '@/components'
import InviteList from '@/components/InviteList/InviteList'
import MyDashBoardList from '@/components/MyDashBoardList/MyDashBoardList'
import Image from 'next/image'

export default function MyDashBoard() {
  const mockInvite = '1'

  return (
    <AppLayout>
      <div className="mx-auto my-0 flex w-[102.2rem] flex-col">
        <MyDashBoardList />
        <div className="mt-[3rem] flex w-full flex-col gap-[2rem] rounded-[0.8rem] bg-[--white-white_FFFFFF] px-[2.8rem] py-[3rem]">
          <p className="text-[2.4rem] font-bold">초대받은 대시보드</p>
          {mockInvite ? (
            <InviteList />
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-[2.4rem] py-[6rem]">
              <Image
                src="emptyDashBoard.svg"
                alt="비어있는 대시보드 아이콘"
                width={100}
                height={100}
              />
              <p className="text-[1.8rem] text-[--gray-gray_9FA6B2]">
                아직 초대받은 대시보드가 없어요!
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
