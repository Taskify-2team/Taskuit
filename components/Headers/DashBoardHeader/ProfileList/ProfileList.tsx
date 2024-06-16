import { useEffect, useRef, useState } from 'react'
import { ProfileListProps } from '@/types/header'
import PaginationButton from '@/components/Buttons/PaginationButton'
import UserInfo from '@/components/UserInfo/UserInfo'
import UserProfile from '../../../UserInfo/UserProfile'

export default function ProfileList({ theme, members, totalCount, LogInId }: ProfileListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [memberListPage, setMemberListPage] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const pageSize = 5

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
        setCurrentPage(1)
      }
    }
    setMemberListPage(Math.ceil(totalCount / pageSize))
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [currentPage, totalCount])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
  }

  if (members && members.length > 1) {
    return (
      <div className="cursor-pointer sm:mt-[1.5rem]" ref={ref}>
        <div
          className="ml-[2rem] flex w-[rem] items-center justify-center sm:ml-0 sm:w-fit sm:flex-col"
          onClick={toggleDropdown}
        >
          {members
            .slice(0, 3)
            .filter((member) => member.userId !== LogInId)
            .map((member) => (
              <div key={member.id} className="ml-[-1.5rem] sm:ml-0 sm:mt-[-1.5rem]">
                <UserProfile nickname={member.nickname} profileImageUrl={member.profileImageUrl} />
              </div>
            ))}
          {totalCount > 3 && (
            <div className="ml-[-1.5rem] flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full bg-gray-400 text-[1.6rem] text-var-white sm:ml-0 sm:mt-[-1.5rem]">
              +{totalCount - 3}
            </div>
          )}
        </div>
        {isDropdownOpen && (
          <div
            className={`h-100% absolute mt-[0.8rem] animate-slideDown rounded-md border bg-white sm:bottom-[1rem] sm:left-[6rem] sm:mt-0 ${
              theme === 'normal' ? 'border-var-gray3' : 'border-var-black1 bg-var-black1 text-white'
            }shadow-lg`}
          >
            <div
              className={`h-[35rem] w-[15rem] ${
                theme === 'normal'
                  ? 'border-var-gray3'
                  : 'border-var-black1 bg-var-black1 text-white'
              }`}
            >
              {members.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((member) => (
                <div key={member.id} className="px-[2rem] py-[1rem] sm:px-[1rem]">
                  <UserInfo nickname={member.nickname} profileImageUrl={member.profileImageUrl} />
                </div>
              ))}
              <div className="absolute bottom-0 left-1/2 my-[0.5rem] -translate-x-1/2 transform">
                <PaginationButton
                  currentPage={currentPage}
                  totalPage={memberListPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
