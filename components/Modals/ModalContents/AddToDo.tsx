/* eslint-disable @typescript-eslint/dot-notation */
import {
  DropDownInputMenu,
  DateInput,
  ProfileImageInput,
  TagInput,
  TextInput,
  Textarea,
  ShortButton,
} from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useEffect, useState } from 'react'
import { postDashBoardCard } from '@/service/cards'
import useAsync from '@/hooks/useAsync'
import { Member } from '@/types/member'
import { PostCard } from '@/types/dashboard'
import { postCardImage } from '@/service/columns'
import { openToast } from '@/store/reducers/toastReducer'

interface AddToDoProps {
  dashboardId: number
  columnId: number
  managerList: Member[]
}

export default function AddToDo({ dashboardId, columnId, managerList }: AddToDoProps) {
  const [cardBody, setCardBody] = useState<PostCard>({
    dashboardId,
    columnId,
    assigneeUserId: 0,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
  })
  const [imageFile, setImageFile] = useState<File>()
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { requestFunction: postToDo } = useAsync(postDashBoardCard)
  const { requestFunction: postImage } = useAsync(postCardImage)

  const handleInputValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCardBody({
      ...cardBody,
      [e.target['name']]: e.target.value,
    })
  }

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  const submitAddToDo = async () => {
    let imageUrl

    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      imageUrl = await postImage({ columnId, imageFile })
    }

    const result = await postToDo({ cardBody, imageUrl })
    if (!result) return

    dispatch(closeModal())
    dispatch(openToast('successAddCard'))
  }

  useEffect(() => {
    if (cardBody.columnId && cardBody.dashboardId && cardBody.description && cardBody.title) {
      setIsDisabled(false)
    }
  }, [cardBody])

  return (
    <form onSubmit={submitAddToDo} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">할 일 생성</h3>
      <DropDownInputMenu
        id="manager"
        label="담당자"
        managerList={managerList}
        cardBody={cardBody}
        setCardBody={setCardBody}
      />
      <TextInput
        label="제목"
        isRequired
        name="title"
        id="title"
        value={cardBody.title}
        placeholder="제목을 입력해 주세요."
        onChange={handleInputValue}
      />
      <Textarea
        label="설명"
        isRequired
        name="description"
        id="description"
        value={cardBody.description}
        placeholder="설명을 입력해 주세요."
        onChange={handleInputValue}
      />
      <DateInput label="마감일" id="dueDate" value={cardBody.dueDate} onChange={handleInputValue} />
      <TagInput id="tag" label="태그" />
      <ProfileImageInput id="image" label="이미지" size="s" onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton
          color="purple"
          text="확인"
          type="submit"
          isDisabled={isDisabled}
          onClick={submitAddToDo}
        />
      </div>
    </form>
  )
}
