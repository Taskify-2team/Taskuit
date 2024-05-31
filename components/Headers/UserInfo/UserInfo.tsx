import UserProfile, { UserProfileInfo } from './UserProfile'

export default function UserInfo({ profileImageUrl, nickname }: UserProfileInfo) {
  return (
    <div className="flex items-center gap-5 pr-32 pl-12">
      <UserProfile profileImageUrl={profileImageUrl} nickname={nickname} />
      <p className="text-2xl">{nickname}</p>
    </div>
  )
}
