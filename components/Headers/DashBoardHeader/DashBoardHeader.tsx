import { UserProfile, ProfileList, HeaderButton } from '@/components'
import inviteicon from '@/public/icons/inviteicon.svg'
import settingicon from '@/public/icons/settingicon.svg'
import testpic from '@/public/images/testimg.jpg'

export default function DashBoardHeader({ title }: string) {
  return (
    <div className="sticky z-50 flex items-center justify-between pl-[34rem] shadow">
      <p className="text-[2rem] font-bold">출력문구 예시 {title}</p>
      <div className="flex">
        <div className="my-[1.6rem] flex gap-[1.6rem] border-r-2 border-solid border-[#d9d9d9] pr-[4rem]">
          <HeaderButton buttonIcon={settingicon} buttonName="관리" />
          <HeaderButton buttonIcon={inviteicon} buttonName="초대하기" />
          <ProfileList />
        </div>
        <UserProfile profileImageUrl={testpic} nickname="test" />
      </div>
    </div>
  )
}
