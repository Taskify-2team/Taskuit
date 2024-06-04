type Inviter = {
  nickname: string
  email: string
  id: number
}

type Dashboard = {
  title: string
  id: number
}

type Invitee = {
  nickname: string
  email: string
  id: number
}

export interface Invitation {
  id: number
  inviter: Inviter
  teamId: string
  dashboard: Dashboard
  invitee: Invitee
  inviteAccepted: boolean
  createdAt: string
  updatedAt: string
}
