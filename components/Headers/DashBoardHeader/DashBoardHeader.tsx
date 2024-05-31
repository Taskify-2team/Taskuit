import UserProfile from '../UserInfo/UserInfo'
import ProfileList from './ProfileList/ProfileList'
import HeaderButton from './buttons/HeaderButton'
import inviteicon from './inviteicon.svg'
import settingicon from './settingicon.svg'
import testpic from './testimg.jpg'

export default function DashBoardHeader({ title }: string) {
  return (
    <div className="flex items-center justify-between pl-[34rem] shadow">
      <p className="text-[2rem] font-bold">출력문구 예시 {title}</p>
      <div className="flex">
        <div className="flex gap-[1.6rem]  pr-[4rem] border-r-2 border-solid border-[#d9d9d9] my-[1.6rem]">
          <HeaderButton buttonIcon={settingicon} buttonName="관리" />
          <HeaderButton buttonIcon={inviteicon} buttonName="초대하기" />
          {/* <ProfileList /> */}
        </div>
        <UserProfile profileImageUrl={testpic} nickname="test" />
      </div>
    </div>
  )
}
