import Image from 'next/image'

export interface UserProfileInfo {
  profileImageUrl: string
  nickname: string
}

export default function UserProfile({ profileImageUrl, nickname }: UserProfileInfo) {
  const initial = nickname.charAt(0).toUpperCase()

  return profileImageUrl ? (
    <Image
      src={profileImageUrl}
      alt={`${nickname}님의 프로필 사진`}
      className="h-[3.8rem] w-[3.8rem] rounded-full border-2 border-white"
    />
  ) : (
    <div className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border-2 border-white bg-gray-500">
      <span className="text-xl font-bold text-white">{initial}</span>
    </div>
  )
}
