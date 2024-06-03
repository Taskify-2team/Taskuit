import { DropDownInputMenu, DropDownMenu, ProfileImageInput } from '@/components'

export default function Develop() {
  const mock = ['In Progress', 'To Do', 'Success']
  const mockUser = [
    {
      id: 3,
      userId: 3,
      email: 'd',
      nickname: '이진욱',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 1,
      userId: 1,
      email: 'd',
      nickname: '홍길동',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 2,
      userId: 2,
      email: 'd',
      nickname: '이순재',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
  ]
  return (
    <>
      <div className="flex gap-[20rem]">
        <div className="w-[20rem]">
          <DropDownMenu menuList={mock} />
        </div>
        <div className="w-[20rem]">
          <DropDownInputMenu initMenuList={mockUser} />
        </div>
      </div>
      <div>
        <ProfileImageInput />
      </div>
    </>
  )
}
