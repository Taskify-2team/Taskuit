import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'

export default function Home() {
  const mock = ['On Progress', 'To Do', 'Success']
  return (
    <div className="h-screen w-full">
      <DropDownMenu menuList={mock} />
    </div>
  )
}
