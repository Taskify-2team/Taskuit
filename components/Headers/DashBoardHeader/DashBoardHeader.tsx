import { ProfileList, HeaderButton, UserInfo } from '@/components'
import inviteIcon from '@/public/icons/inviteIcon.svg'
import settingIcon from '@/public/icons/settingIcon.svg'
import Link from 'next/link'

const MockData = {
  members: [
    {
      id: 0,
      userId: 0,
      email: 'test@test.com',
      nickname: 'tester',
      profileImageUrl: '',
      createdAt: '2024-06-04T07:28:02.951Z',
      updatedAt: '2024-06-04T07:28:02.951Z',
      isOwner: true,
    },
  ],
  totalCount: 0,
}

export default function DashBoardHeader() {
  const MockDataMembers = MockData.members
  const MockDataCount = MockData.totalCount
  return (
    <div className="fixed z-50 flex w-[100vw] items-center justify-between bg-var-white pl-[34rem] shadow">
      <p className="text-[2rem] font-bold">출력문구 예시</p>
      <div className="flex">
        <div className="my-[1.6rem] flex gap-[1.6rem] border-r-2 border-solid border-[#d9d9d9] pr-[4rem]">
          <Link href="/mypage" className="flex">
            <HeaderButton buttonIcon={settingIcon} buttonName="관리" />
          </Link>
          <HeaderButton buttonIcon={inviteIcon} buttonName="초대하기" />
          <ProfileList members={MockDataMembers} totalCount={MockDataCount} />
        </div>
        <div className="flex items-center">
          <UserInfo
            profileImageUrl={MockDataMembers[0].profileImageUrl}
            nickname={MockDataMembers[0].nickname}
          />
        </div>
      </div>
    </div>
  )
}
