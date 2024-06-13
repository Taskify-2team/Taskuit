import React from 'react'
import { SideMenuListProps } from '@/types/sidemenu'
import SideMenuListItem from './SideMenuListItem'

export default function SideMenuList({ data }: SideMenuListProps) {
  const dashBoards = data || []
  const currentPath = window.location.pathname

  return (
    <div>
      {dashBoards.length === 0 ? (
        <p className="mt-[3rem] text-[1.6rem]">참여중인 대시보드가 없습니다.</p>
      ) : (
        dashBoards.map((dashBoard) => (
          <SideMenuListItem
            key={dashBoard.id}
            id={dashBoard.id}
            color={dashBoard.color}
            title={dashBoard.title}
            createdByMe={dashBoard.createdByMe}
            isFocused={currentPath === `/dashboard/${dashBoard.id}`}
          />
        ))
      )}
    </div>
  )
}
