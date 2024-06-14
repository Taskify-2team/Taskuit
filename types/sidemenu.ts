export interface SideMenuListItemProps {
  id: number
  color: string
  title: string
  createdByMe: boolean
  isFocused: boolean
}

export interface DashBoardProps {
  id: number
  color: string
  title: string
  createdByMe: boolean
}

export interface SideMenuListProps {
  // eslint-disable-next-line react/require-default-props
  data: DashBoardProps[] | undefined
}
