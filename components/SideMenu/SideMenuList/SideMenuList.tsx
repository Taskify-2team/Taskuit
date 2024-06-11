import React from 'react'
import SideMenuListItem from './SideMenuListItem'

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

export default function SideMenuList({ data }: SideMenuListProps) {
  const dashBoards = data || [] // 데이터가 없을 경우를 대비하여 기본값으로 빈 배열을 설정

  return (
    <div>
      {dashBoards.length === 0 ? (
        <p className="mt-[3rem]">No dashboards available</p>
      ) : (
        dashBoards.map((dashBoard) => (
          <SideMenuListItem
            key={dashBoard.id}
            id={dashBoard.id}
            color={dashBoard.color}
            title={dashBoard.title}
            createdByMe={dashBoard.createdByMe}
          />
        ))
      )}
    </div>
  )
}
