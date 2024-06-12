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
}

export default function ProfileList({ members, totalCount }: ProfileListProps) {
  return (
    <div>
      {members ? (
        <div>
          <div className="ml-[2rem] flex w-[6.9rem] items-center sm:ml-[1rem]">
            {members.slice(1, 3).map((member) => (
              <div key={member.id} className="ml-[-1.5rem]">
                <UserProfile nickname={member.nickname} profileImageUrl={member.profileImageUrl} />
              </div>
            ))}
            {totalCount > 3 && (
              <div className="ml-[-1.5rem] flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border-2 border-white bg-gray-400 text-[1.6rem] text-var-white">
                +{totalCount - 3}
              </div>
            )}
          </div>
          {totalCount > 0 && <div />}
        </div>
      ) : null}
    </div>
  )
}
