import Image from 'next/image'
import logoicon from './sidemenulogo.svg'
import adddashboardicon from './adddashboardicon.svg'
import DashBoardList, { DashBoard } from './DashBoardList/DashBoradList'

export default function SideMenu({ title, color, createdByMe }: DashBoard) {
  return (
    <div className="flex flex-col h-[50rem] pt-[2rem] pr-[2.4rem] pl-[2.4rem] w-[30rem] gap-[5.7rem] border-r-2">
      <div>
        <Image src={logoicon} alt="Taskify 로고 아이콘" />
      </div>
      <div className="flex justify-between mb-[1.8rem]">
        <p className="text-[1.2rem] font-bold text-[#787486]">Dash Boards</p>
        <button type="button">
          <Image src={adddashboardicon} alt="대시보드 추가 아이콘" />
        </button>
      </div>
      <DashBoardList color={color} title={title} createdByMe={createdByMe} />
    </div>
  )
}
