import { useState } from 'react'
import UserInfo from '@/components/UserInfo/UserInfo'
import UserProfile from '../../../UserInfo/UserProfile'

interface Member {
  id: number
  userId: number
  email: string
  nickname: string
  profileImageUrl: string
  createdAt: string
  updatedAt: string
  isOwner: boolean
}

interface ProfileListProps {
  members?: Member[]
  totalCount: number
  LogInId: number
}

export default function ProfileList({ members, totalCount, LogInId }: ProfileListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      {members && (
        <div>
          <div
            className="ml-[2rem] flex w-[rem] items-center justify-center sm:ml-[1rem]"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            {members
              .slice(0, 3)
              .filter((member) => member.userId !== LogInId)
              .map((member) => (
                <div key={member.id} className="ml-[-1.5rem]">
                  <UserProfile
                    nickname={member.nickname}
                    profileImageUrl={member.profileImageUrl}
                  />
                </div>
              ))}
            {totalCount > 3 && (
              <div className="ml-[-1.5rem] flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border-2 border-white bg-gray-400 text-[1.6rem] text-var-white">
                +{totalCount - 3}
              </div>
            )}
          </div>
          {isDropdownOpen && (
            <div className="h-100% absolute mt-2 animate-slideDown rounded-md border border-gray-300 bg-white shadow-lg">
              {members.map((member) => (
                <div key={member.id} className="px-4 py-2">
                  <UserInfo nickname={member.nickname} profileImageUrl={member.profileImageUrl} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
