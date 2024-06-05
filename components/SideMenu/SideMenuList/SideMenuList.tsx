import React from 'react'
import SideMenuListItem from './SideMenuListItem'

interface DashBoardProps {
  id?: string
  color: string
  title: string
  createdByMe: boolean
}

export interface SideMenuListProps {
  // eslint-disable-next-line react/require-default-props
  data?: {
    dashboards?: DashBoardProps[]
  }
}

export default function SideMenuList({ data }: SideMenuListProps) {
  const DashBoards = data?.dashboards || []

  return (
    <div>
      {DashBoards.length === 0
        ? null
        : DashBoards.map((DashBoard) => (
            <SideMenuListItem
              key={DashBoard.id}
              color={DashBoard.color}
              title={DashBoard.title}
              createdByMe={DashBoard.createdByMe}
            />
          ))}
    </div>
  )
}
