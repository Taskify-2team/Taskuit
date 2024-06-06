import { CreateTodoButton, DashBoardCard } from '@/components'
import Image from 'next/image'
import settingIcon from '@/public/icons/settingicon.svg'
import CircleChip from '../Chips/CircleChip'

interface DashBoardColumnProps {
  columnTitle: string
}

export default function DashBoardColumn({ columnTitle }: DashBoardColumnProps) {
  const handleSettingButtonClick = () => {}

  return (
    <section className="flex flex-col gap-[1.6rem] pr-[2rem]">
      <div className="mb-[0.9rem] flex items-center justify-between">
        <div className="flex items-center gap-[0.8rem]">
          <CircleChip color="#d04040" />
          <h3 className="mr-[0.4rem] text-[1.8rem] font-[700]">{columnTitle}</h3>
          <div className="rounded-[0.4rem] bg-var-gray2 px-[0.6rem] py-[0.3rem] text-[1.2rem] text-var-gray5">
            3
          </div>
        </div>
        <button type="button" onClick={handleSettingButtonClick}>
          <Image src={settingIcon} alt="설정" width="24" height="24" />
        </button>
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
