import Image from 'next/image'
import logoIcon from '@/public/icons/sidemenulogo.svg'
import adddashboardicon from '@/public/icons/adddashboardicon.svg'
import SideMenuList, { SideMenuListProps } from './SideMenuList/SideMenuList'

export default function SideMenu({ data }: SideMenuListProps) {
  return (
    <div className="fixed z-40 flex h-[100vh] w-[30rem] flex-col gap-[5.7rem] border-r-2 bg-var-white pl-[2.4rem] pr-[2.4rem] pt-[2rem]">
      <div>
        <Image src={logoIcon} alt="Taskify 로고 아이콘" />
      </div>
      <div className="mb-[1.8rem] flex justify-between">
        <p className="text-[1.2rem] font-bold text-[#787486]">Dash Boards</p>
        <button type="button">
          <Image src={adddashboardicon} alt="대시보드 추가 아이콘" />
        </button>
      </div>
      <SideMenuList data={data} />
    </div>
  )
}
