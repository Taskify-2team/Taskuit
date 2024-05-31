import DashBoardListItem from './DashBoardListItem'

export interface DashBoard {
  id?: string
  color: string
  title: string
  createdByMe: boolean
}

export interface DashBoardListProps {
  data: {
    dashboards: DashBoard[]
  }
}
export default function DashBoardList({ data }: DashBoardListProps) {
  const DashBoards = data.dashboards
  return (
    <div>
      {DashBoards.map((DashBoard) => (
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
