import { UserInfoProps } from '@/types/header'
import { useLoadTheme } from '@/store/context/ThemeContext'
import UserProfile from './UserProfile'

export default function UserInfo({ profileImageUrl, nickname, size = 'l' }: UserInfoProps) {
  const { theme } = useLoadTheme()

  const SIZE = {
    m: {
      gap: { gap: '0.8rem' },
      fontSize: { fontSize: '1.4rem' },
    },
    l: {
      gap: { gap: '1.4rem' },
      fontSize: { fontSize: '1.6rem' },
    },
  }

  return (
    <div className="flex items-center" style={SIZE[size].gap}>
      <UserProfile profileImageUrl={profileImageUrl} nickname={nickname} size={size} />
      <p
        style={SIZE[size].fontSize}
        className={`${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
      >
        {nickname}
      </p>
    </div>
  )
}
