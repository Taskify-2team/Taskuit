import { useEffect, useRef, useState } from 'react'
import { ProfileListProps } from '@/types/header'
import UserInfo from '@/components/UserInfo/UserInfo'
import UserProfile from '../../../UserInfo/UserProfile'

export default function ProfileList({ members, totalCount, LogInId }: ProfileListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }
  return (
    <div>
      {members && (
        <div>
          <div
            className="ml-[2rem] flex w-[rem] items-center justify-center sm:ml-[1rem]"
            onClick={toggleDropdown}
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
            <div
              className="h-100% absolute mt-2 animate-slideDown rounded-md border border-gray-300 bg-white shadow-lg"
              ref={dropdownRef}
              onClick={closeDropdown}
            >
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
