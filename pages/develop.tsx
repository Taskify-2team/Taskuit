import { DashBoardCard, DropDownInputMenu, DropDownMenu, ProfileImageInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'

export default function Develop() {
  const dispatch = useAppDispatch()
  const mock = ['In Progress', 'To Do', 'Success']
  const mockUser = [
    {
      id: 3,
      userId: 3,
      email: 'd',
      nickname: '이진욱',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 1,
      userId: 1,
      email: 'd',
      nickname: '홍길동',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 2,
      userId: 2,
      email: 'd',
      nickname: '이순재',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/126263?s=70&v=4',
      createdAt: '',
      updatedAt: '',
    },
  ]
  const cardListMock = {
    cursorId: 1,
    totalCount: 1,
    cards: [
      {
        id: 1,
        title: '새로운 일정 관리 Taskify',
        description: '',
        tags: ['백엔드', '프로젝트'],
        dueDate: '',
        assignee: {
          profileImageUrl: '',
          nickname: '',
          id: 11,
        },
        imageUrl: 'https://avatars.githubusercontent.com/u/4121?s=70&v=4',
        teamId: '',
        columnId: 101,
        updatedAt: '',
        createdAt: '2024-06-04T01:56:16.625Z',
      },
      {
        id: 2,
        title: '새로운 일정 관리 Taskify',
        description: '',
        tags: ['일반', '프로젝트'],
        dueDate: '',
        assignee: {
          profileImageUrl: '',
          nickname: '',
          id: 11,
        },
        imageUrl: '',
        teamId: '',
        columnId: 101,
        updatedAt: '',
        createdAt: '2024-06-04T01:56:16.625Z',
      },
    ],
  }
  return (
    <>
      <div>
        <button
          className="size-[20rem] bg-var-red"
          type="button"
          onClick={() =>
            dispatch(openModal({ modalName: 'addToDo', modalProps: { menuList: mockUser } }))
          }
        >
          새로운 대시보드
        </button>
      </div>
      {/* <div className="flex gap-[20rem]">
        <div className="w-[20rem]">
          <DropDownMenu menuList={mock} />
        </div>
        <div className="w-[20rem]">
          <DropDownInputMenu initMenuList={mockUser} />
        </div>
      </div>
      <div>
        <ProfileImageInput />
      </div>
      <div>
        {cardListMock.cards.map((card, i) => (
          <DashBoardCard key={i} card={card} />
        ))}
      </div> */}
    </>
  )
}
