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
      className="w-[3.8rem] h-[3.8rem] rounded-full border-2 border-white"
    />
  ) : (
    <div className="w-[3.8rem] h-[3.8rem] bg-gray-500 rounded-full flex items-center justify-center border-2 border-white">
      <span className="text-white text-xl font-bold">{initial}</span>
    </div>
  )
}
