import Image from 'next/image'
import logoicon from '@/public/icons/sidemenulogo.svg'
import adddashboardicon from '@/public/icons/adddashboardicon.svg'
import DashBoardList from './DashBoardList/DashBoradList'


export default function SideMenu() {

/* API 에서 데이터 가져오기 
const res = 
프롭으로 res.color res.title res . createdByMe
*/


  return (
    <div className="bg-var-white flex h-[50rem] w-[30rem] flex-col gap-[5.7rem] border-r-2 pl-[2.4rem] pr-[2.4rem] pt-[2rem] h-screen">
      <div>
        <Image src={logoicon} alt="Taskify 로고 아이콘" />
      </div>
      <div className="mb-[1.8rem] flex justify-between">
        <p className="text-[1.2rem] font-bold text-[#787486]">Dash Boards</p>
        <button type="button">
          <Image src={adddashboardicon} alt="대시보드 추가 아이콘" />
        </button>
      </div>
      {/* <DashBoardList color={color} title={title} createdByMe={createdByMe} /> */}
      <DashBoardList />
    </div>
  )
}
