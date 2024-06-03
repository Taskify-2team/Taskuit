export interface Members {
  members: Member[]
  totalCount: number
}

export interface Member {
  id: number
  userId: number
  email?: string
  nickname: string
  profileImageUrl: string
  createdAt?: string
  updatedAt?: string
}
