import BoardButton from '@/components/Buttons/BoardButton'
import CreateBoardButton from '@/components/Buttons/CreateBoardButton'
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'

export default function Home() {
  const mock = ['On Progress', 'To Do', 'Success']
  return (
    <div className="w-[21.7rem]">
      <DropDownMenu menuList={mock} />
      <CreateBoardButton />
      <BoardButton />
    </div>
  )
}
