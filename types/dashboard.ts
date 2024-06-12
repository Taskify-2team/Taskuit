export interface DashBoard {
  id: number
  title: string
  color: string
  createdAt: string
  updatedAt: string
  createdByMe: boolean
  userId: number
}

export interface ColumnList {
  result: string
  data: Column[]
}
export interface Column {
  createdAt: string
  id: number
  teamId: string
  title: string
  updatedAt: string
}

export interface PostCard {
  columnId: number
  assigneeUserId?: number
  dashboardId: number
  title: string
  description: string
  dueDate?: string
  tags?: string[]
  imageUrl?: string
}

export interface UpdateCard {
  columnId?: number
  assigneeUserId?: number
  title?: string
  description?: string
  dueDate?: string
  tags?: string[]
  imageUrl?: string | null
}

export interface CardList {
  cursorId: number
  totalCount: number
  cards: Card[]
}

export interface Assignee {
  profileImageUrl: string
  nickname: string
  id: number
}
export interface Card {
  id: number
  title: string
  description: string
  tags: string[]
  dueDate: string
  assignee: Assignee
  imageUrl: string
  teamId: string
  columnId: number
  createdAt: string
  updatedAt: string
}

export interface PostComment {
  content: string
  cardId: number
  columnId: number
  dashboardId: number
}

export interface Comment {
  id: number
  content: string
  createdAt: string
  author: {
    updatedAt: string
    cardId: number
    profileImageUrl: string
    nickname: string
    id: number
  }
}

export interface UpdateComment {
  id: number
  content: string
}
