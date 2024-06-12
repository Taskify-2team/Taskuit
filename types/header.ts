import { StaticImageData } from 'next/image'

export interface UserInfoData {
  profileImageUrl: string
  nickname: string
  id: number
}

export interface HeaderButtonItems {
  buttonIcon: StaticImageData
  buttonName: string
  handleOnClick?: () => void
}

export interface Member {
  id: number
  userId: number
  email: string
  nickname: string
  profileImageUrl: string
  createdAt: string
  updatedAt: string
  isOwner: boolean
}

export interface ProfileListProps {
  members?: Member[]
  totalCount: number
  LogInId: number
  theme: string
}

export interface UserInfoProps {
  profileImageUrl: string
  nickname: string
  size?: 'm' | 'l'
}

export interface UserProfileProps {
  profileImageUrl: string
  nickname: string
  size?: 's' | 'm' | 'l'
}
