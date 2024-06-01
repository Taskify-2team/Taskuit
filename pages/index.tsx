import DropDownInputMenu from '@/components/DropDownInputMenu/DropDownInputMenu'
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'

export default function Home() {
  const mock = ['On Progress', 'To Do', 'Success']
  const mockUser = [
    {
      id: 1,
      userId: 1,
      email: '',
      nickname: '이진욱',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/3624098?s=64&v=4',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 2,
      userId: 2,
      email: '',
      nickname: '박재범',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/810438?s=64&v=4',
      createdAt: '',
      updatedAt: '',
    },
  ]
  return (
    <div className="flex gap-[20rem]">
      <div className="w-[20rem]">
        <DropDownMenu menuList={mock} />
      </div>
      <div className="w-[20rem]">
        <DropDownInputMenu initMenuList={mockUser} />
      </div>
    </div>
  )
}
