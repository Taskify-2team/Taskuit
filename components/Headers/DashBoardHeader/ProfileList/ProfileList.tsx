import { UserProfile } from '../../UserInfo/UserProfile'

export default function ProfileList({ data }) {
  const memberData = data?.members
  return (
    <div>
      {memberData ? (
        <div>
          <div className="flex items-center mr-[3.2rem]">
            {memberData.members.slice(0, 3).map((member) => (
              <UserProfile
                key={member.Id}
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
              />
            ))}
            {memberData.totalCount > 3 && (
              <div className="w-[3.8rem] h-[3.8rem] rounded-full border-2 border-white">
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
