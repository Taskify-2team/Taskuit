import { UserProfile } from '@/components'

export default function ProfileList({ data }) {
  const memberData = data?.members
  return (
    <div>
      {memberData ? (
        <div>
          <div className="mr-[3.2rem] flex items-center">
            {memberData.members.slice(0, 3).map((member) => (
              <UserProfile
                key={member.Id}
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
              />
            ))}
            {memberData.totalCount > 3 && (
              <div className="h-[3.8rem] w-[3.8rem] rounded-full border-2 border-white">
                +{members.totalCount - 3}
              </div>
            )}
          </div>
          {memberData.count > 0 && <div></div>}
        </div>
      ) : null}
    </div>
  )
}
