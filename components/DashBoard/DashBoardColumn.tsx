import { CreateTodoButton, DashBoardCard } from '@/components'

export default function DashBoardColumn() {
  return (
    <section>
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
