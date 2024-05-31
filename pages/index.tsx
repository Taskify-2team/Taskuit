import DropDownInputMenu from '@/components/DropDownInputMenu/DropDownInputMenu'
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu'

export default function Home() {
  const mockUser = [
    {
      nickname: '정지성',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/4323180?s=64&v=4',
    },
    {
      nickname: '박상준',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/882133?s=64&v=4',
    },
    {
      nickname: '오다은',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/589410?s=64&v=4',
    },
    {
      nickname: '박희진',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/2250252?s=64&v=4',
    },
    {
      nickname: '이진욱',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/2615508?s=64&v=4',
    },
  ]

  return (
    <div className="flex gap-4">
      <div className="w-[21.7rem]">
        <DropDownInputMenu
          menuList={mockUser.map((v) => v.nickname)}
          menuListIcon={mockUser.map((v) => v.profileImageUrl)}
        />
      </div>
      <div className="w-[21.7rem]">
        <DropDownMenu menuList={mockUser.map((v) => v.nickname)} />
      </div>
    </div>
  )
}
