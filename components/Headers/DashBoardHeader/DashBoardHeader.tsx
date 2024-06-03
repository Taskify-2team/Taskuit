import { ProfileList, HeaderButton, UserInfo } from '@/components'
import inviteicon from '@/public/icons/inviteicon.svg'
import settingicon from '@/public/icons/settingicon.svg'

const mockData = {
  "members": [
    {
      "id": 1,
      "userId": 1,
      "email": "",
      "nickname": "정지성",
      "profileImageUrl": "",
      "createdAt": "2024-06-03T06:35:44.219Z",
      "updatedAt": "2024-06-03T06:35:44.219Z",
      "isOwner": true
    },
    {
      "id": 2,
      "userId": 2,
      "email": "",
      "nickname": "오다은",
      "profileImageUrl": "",
      "createdAt": "2024-06-03T06:35:44.219Z",
      "updatedAt": "2024-06-03T06:35:44.219Z",
      "isOwner": true
    },
    {
      "id": 3,
      "userId": 3,
      "email": "",
      "nickname": "이진욱",
      "profileImageUrl": "",
      "createdAt": "2024-06-03T06:35:44.219Z",
      "updatedAt": "2024-06-03T06:35:44.219Z",
      "isOwner": true
    },
    {
      "id": 4,
      "userId": 4,
      "email": "",
      "nickname": "박상준",
      "profileImageUrl": "",
      "createdAt": "2024-06-03T06:35:44.219Z",
      "updatedAt": "2024-06-03T06:35:44.219Z",
      "isOwner": true
    },
    {
      "id": 5,
      "userId": 5,
      "email": "",
      "nickname": "박희진",
      "profileImageUrl": "",
      "createdAt": "2024-06-03T06:35:44.219Z",
      "updatedAt": "2024-06-03T06:35:44.219Z",
      "isOwner": true
    }
  ],
  "totalCount": 5
}

interface DashBoardMemberProps {
  title: string
  profileImageUrl: string;
}

export default function DashBoardHeader({ title, profileImageUrl }: DashBoardMemberProps) {
  return (
    <div className="sticky z-50 flex items-center justify-between pl-[34rem] shadow text-nowrap">
      <p className="text-[2rem] font-bold">{title}</p>
      <div className="flex">
        <div className="my-[1.6rem] flex gap-[1.6rem] border-r-2 border-solid border-[#d9d9d9] pr-[4rem]">
          <HeaderButton buttonIcon={settingicon} buttonName="관리" />
          <HeaderButton buttonIcon={inviteicon} buttonName="초대하기" />
          <ProfileList data={mockData} />
        </div>
        <UserInfo profileImageUrl={profileImageUrl} nickname="test" />
        
      </div>
    </div>
  )
}
