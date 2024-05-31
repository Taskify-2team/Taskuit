import DropDownInputMenu from '@/components/DropDownInputMenu/DropDownInputMenu'

export default function Home() {
  const mockUser = [
    { nickname: '정지성', profileImageUrl: '' },
    { nickname: '박상준', profileImageUrl: '' },
    { nickname: '오다은', profileImageUrl: '' },
    { nickname: '박희진', profileImageUrl: '' },
    { nickname: '이진욱', profileImageUrl: '' },
  ]
  return (
    <div className="w-[21.7rem]">
      <DropDownInputMenu
        menuList={mockUser.map((v) => v.nickname)}
        menuListIcon={mockUser.map((v) => v.profileImageUrl)}
      />
    </div>
  )
}
