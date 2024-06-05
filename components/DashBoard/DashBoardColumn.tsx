import { CreateTodoButton, DashBoardCard } from '@/components'
import CircleChip from '../Chips/CircleChip'

interface DashBoardColumnProps {
  columnTitle: string
}

export default function DashBoardColumn({ columnTitle }: DashBoardColumnProps) {
  return (
    <section className="flex flex-col">
      <div>
        <CircleChip color="#d04040" />
        {columnTitle}
      </div>
      <CreateTodoButton />
      <DashBoardCard
        card={{
          id: 2,
          title: 'title',
          description: 'dd',
          tags: ['d', 'dd'],
          dueDate: '33',
          assignee: { profileImageUrl: 'dd', nickname: 'dd', id: 2 },
          teamId: 'dd',
          columnId: 2,
          createdAt: 'dd',
          updatedAt: 'dd',
        }}
      />
    </section>
  )
}
