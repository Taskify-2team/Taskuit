import { useLoadTheme } from '@/store/context/ThemeContext'
import { UserProfileProps } from '@/types/header'
import Image from 'next/image'

export default function UserProfile({ profileImageUrl, nickname, size = 'l' }: UserProfileProps) {
  const initial = nickname.charAt(0).toUpperCase()
  const { theme } = useLoadTheme()

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
      className={`rounded-full border shadow-md ${theme === 'normal' ? 'border-gray-300' : 'border-var-black2'}`}
      style={{ width: SIZE[size].imageSize, height: SIZE[size].imageSize, objectFit: 'cover' }}
    />
  ) : (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white bg-gray-500 font-bold text-white shadow-md"
      style={SIZE[size].textStyle}
    >
      {initial}
    </div>
  )
}
