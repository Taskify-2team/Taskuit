import Image from 'next/image'

export interface UserProfileProps {
  profileImageUrl: string
  nickname: string
  size?: 's' | 'm' | 'l'
}

export default function UserProfile({ profileImageUrl, nickname, size = 'l' }: UserProfileProps) {
  const initial = nickname.charAt(0).toUpperCase()

  const SIZE = {
    s: {
      imageSize: 24,
      textStyle: { height: '2.6rem', width: '2.6rem', fontSize: '1.2rem' },
    },
    m: {
      imageSize: 34,
      textStyle: { height: '3rem', width: '3rem', fontSize: '1.6rem' },
    },
    l: {
      imageSize: 38,
      textStyle: { height: '3.8rem', width: '3.8rem', fontSize: '1.6rem' },
    },
  }

  return profileImageUrl ? (
    <Image
      src={profileImageUrl}
      alt={`${nickname}님의 프로필 사진`}
      width={SIZE[size].imageSize}
      height={SIZE[size].imageSize}
      className="rounded-full border-2 border-white"
    />
  ) : (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white bg-gray-500 font-bold text-white"
      style={SIZE[size].textStyle}
    >
      {initial}
    </div>
  )
}
