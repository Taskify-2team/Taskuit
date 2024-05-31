import UserProfile from '../userProfile/UserProfile'
import HeaderButton from './buttons/HeaderButton'
import inviteicon from './inviteicon.svg'
import settingicon from './settingicon.svg'
import testpic from './testimg.jpg'

export default function DashBoardHeader() {
  return (
    <div className="flex items-center pl-[34rem]">
      <p>내 대시보드</p>
      <div className="flex gap-[1.6rem]">
        <HeaderButton buttonIcon={inviteicon} buttonName="관리" />
        <HeaderButton buttonIcon={settingicon} buttonName="초대하기" />
      </div>
      <UserProfile profileImgSource={testpic} UserName="테스트" />
    </div>
  )
}
