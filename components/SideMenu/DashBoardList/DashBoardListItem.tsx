import Image from 'next/image'
import crownicon from './crownicon.svg'
import { DashBoard } from '../DashBoardList'

export default function DashBoardListItem({
  color = '컬러',
  title = '대시보드제목예시',
  createdByMe = true,
}: DashBoard) {
  return (
    <div className="flex items-center">
      <div className="mr-[1.6rem]">{color}</div>
      <div className="text-[1.8rem] text-[#787486]">{title}</div>
      <div className="ml-[0.6rem]">
        {createdByMe && <Image src={crownicon} alt="크라운 아이콘" />}
      </div>
    </div>
  )
}
