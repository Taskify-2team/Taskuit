import React from 'react'
import DashBoardListItem from './DashBoardListItem'

interface DashBoardProps {
  id?: string
  color: string
  title: string
  createdByMe: boolean
}

export interface DashBoardListProps {
  data?: {
    dashboards?: DashBoardProps[]
  }
}

export default function DashBoardList({ data }: DashBoardListProps) {
  const DashBoards = data?.dashboards || []

  return (
    <div>
      {DashBoards.length === 0
        ? null
        : DashBoards.map((DashBoard) => (
            <DashBoardListItem
              key={DashBoard.id}
              color={DashBoard.color}
              title={DashBoard.title}
              createdByMe={DashBoard.createdByMe}
            />
          ))}
    </div>
  )
}

DashBoardList.defaultProps = {
  data: undefined,
}
