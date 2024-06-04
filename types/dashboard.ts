export interface DashBoard {
  id: number
  title: string
  color: string
  createdAt: string
  updatedAt: string
  createdByMe: boolean
  userId: number
}

export interface PostToDo {
  assigneeUserId: 0
  dashboardId: 0
  columnId: 0
  title: string
  description: string
  dueDate: string
  tags: string[]
  imageUrl: string
}

export interface CardList {
  cursorId: number
  totalCount: number
  cards: Card[]
}

export interface Card {
  id: number
  title: string
  description: string
  tags: string[]
  dueDate: string
  assignee: {
    profileImageUrl: string
    nickname: string
    id: number
  }
  imageUrl: string
  teamId: string
  columnId: number
  createdAt: string
  updatedAt: string
}
