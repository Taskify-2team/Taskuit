import Image from 'next/image'

export interface UserProfileProps {
  profileImageUrl: string
  nickname: string
  smallSize?: boolean
}

export default function UserProfile({
  profileImageUrl,
  nickname,
  smallSize = false,
}: UserProfileProps) {
  const initial = nickname.charAt(0).toUpperCase()

  return profileImageUrl ? (
    <Image
      src={profileImageUrl}
      alt={`${nickname}님의 프로필 사진`}
      width={smallSize ? 24 : 38}
      height={smallSize ? 24 : 38}
      className="rounded-full border-2 border-white"
    />
  ) : (
    <div
      className={`flex font-bold text-white ${smallSize ? 'h-[2.4rem] w-[2.4rem] text-[1.2rem]' : 'h-[3.8rem] w-[3.8rem] text-[1.6rem]'} items-center justify-center rounded-full border-2 border-white bg-gray-500`}
    >
      {initial}
    </div>
  )
}
