import UserProfile from './UserProfile'

export interface UserInfoProps {
  profileImageUrl: string
  nickname: string
  size?: 'm' | 'l'
}

export default function UserInfo({ profileImageUrl, nickname, size = 'l' }: UserInfoProps) {
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
      <p style={SIZE[size].fontSize}>{nickname}</p>
    </div>
  )
}
