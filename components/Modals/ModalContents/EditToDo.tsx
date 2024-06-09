/* eslint-disable @typescript-eslint/dot-notation */
import {
  DropDownInputMenu,
  DropDownMenu,
  DateInput,
  ProfileImageInput,
  TagInput,
  TextInput,
  Textarea,
  ShortButton,
} from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { updateDashBoardCard } from '@/service/cards'
import { postCardImage } from '@/service/columns'
import { closeModal } from '@/store/reducers/modalReducer'
import { Card, UpdateCard } from '@/types/dashboard'
import { Member } from '@/types/member'
import { ChangeEvent, useEffect, useState } from 'react'

interface EditToDoProps {
  columnId: number
  card: Card
  managerList: Member[]
  progressList: string[]
}

export default function EditToDo({ columnId, card, managerList, progressList }: EditToDoProps) {
  const [newCardBody, setNewCardBody] = useState<UpdateCard>({
    title: card?.title,
    description: card?.description,
    dueDate: card?.dueDate,
    tags: card?.tags,
    imageUrl: card?.imageUrl || '',
    columnId,
    assigneeUserId: card?.assignee?.id || 0,
  })
  const [imageFile, setImageFile] = useState<File | string>('')
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(updateDashBoardCard)
  const { requestFunction: updateCardImage } = useAsync(postCardImage)

  const handleInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewCardBody({
      ...newCardBody,
      [e.target['name']]: e.target.value,
    })
  }

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  const submitImageFile = async () => {
    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      const result = await updateCardImage({ columnId, imageFile })
      setNewCardBody({
        ...newCardBody,
        imageUrl: result?.data.imageUrl,
      })
    }
  }

  const submitEditToDo = async () => {
    await submitImageFile()
    /** 추후 이미지 프롭스 잘 불러오는지 확인 필요 */
    const result = await requestFunction({ newCardBody, cardId: card.id })
    if (!result) return

    dispatch(closeModal())
    /** 토스트 */
  }

  useEffect(() => {
    if (newCardBody.columnId && newCardBody.description && newCardBody.title) {
      setIsDisabled(false)
    }
  }, [newCardBody])

  return (
    <form className="modal-layout" onSubmit={submitEditToDo}>
      <h3 className="text-[2.4rem] font-bold">할 일 수정</h3>
      <div className="flex gap-[1rem]">
        <div className="flex-1">
          <DropDownMenu id="progress" label="상태" progressList={progressList} />
        </div>
        <div className="flex-1">
          <DropDownInputMenu
            id="manager"
            label="담당자"
            setCardBody={setNewCardBody}
            managerList={managerList}
          />
        </div>
      </div>
      <TextInput
        id="title"
        label="제목"
        name="title"
        value={newCardBody?.title}
        onChange={handleInputValue}
        placeholder="제목을 입력해 주세요."
        isRequired
      />
      <Textarea
        id="description"
        label="설명"
        name="description"
        value={newCardBody?.description}
        onChange={handleInputValue}
        placeholder="설명을 입력해 주세요."
        isRequired
      />
      <DateInput id="dueDate" label="마감일" value={newCardBody?.dueDate} />
      <TagInput
        id="tag"
        label="태그"
        value={newCardBody?.tags}
        name="tag"
        onChange={handleInputValue}
      />
      <ProfileImageInput id="image" label="이미지" size="s" onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton
          color="purple"
          text="수정"
          type="submit"
          isDisabled={isDisabled}
          onClick={submitEditToDo}
        />
      </div>
    </form>
  )
}
