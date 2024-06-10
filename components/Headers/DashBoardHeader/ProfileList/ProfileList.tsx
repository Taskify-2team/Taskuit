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
          <div className="ml-[4rem] mr-[3.2rem] flex items-center">
            {members.slice(0, 3).map((member) => (
              <UserProfile
                key={member.id}
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
              />
            ))}
            {totalCount > 3 && (
              <div className="h-[3.8rem] w-[3.8rem] rounded-full border-2 border-white">
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
