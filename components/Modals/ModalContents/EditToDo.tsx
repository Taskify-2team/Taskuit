/* eslint-disable @typescript-eslint/dot-notation */
import {
  DropDownInputMenu,
  DropDownMenu,
  DateInput,
  ImageInput,
  TagInput,
  TextInput,
  Textarea,
  ShortButton,
} from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { getCardList, updateDashBoardCard } from '@/service/cards'
import { postCardImage } from '@/service/columns'
import { getMemberList } from '@/service/members'
import { closeModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { Card, UpdateCard } from '@/types/dashboard'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'

export interface EditToDoProps {
  card: Card
  columnTitle: string
}

export default function EditToDo({ columnTitle, card }: EditToDoProps) {
  const router = useRouter()
  const { dashboardId } = router.query
  const [members, setMembers] = useState([])
  const [newCardBody, setNewCardBody] = useState<UpdateCard>({
    columnId: card?.columnId,
    assigneeUserId: card?.assignee.id || 0,
    title: card?.title,
    description: card?.description,
    dueDate: card?.dueDate,
    tags: card?.tags,
    imageUrl: card?.imageUrl || null,
  })
  const [imageFile, setImageFile] = useState<File>()
  const [assigneeUserId, setAssigneeUserId] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dueDate, setDueDate] = useState('')
  const cursorId = useAppSelector((state) => state.card.cursorId[card.columnId])
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(updateDashBoardCard)
  const { requestFunction: updateCardImage } = useAsync(postCardImage)
  const { requestFunction: getMembers } = useAsync(getMemberList)

  const getMembersRequest = useCallback(async () => {
    const result = await getMembers(0, Number(dashboardId))
    setMembers(result.members)
  }, [dashboardId, getMembers])

  const handleInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewCardBody({
      ...newCardBody,
      [e.target['name']]: e.target.value,
    })
  }

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  const refreshCardList = async () => {
    await dispatch(getCardList({ cursorId: Number(cursorId), columnId: card.columnId }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (imageFile && newCardBody.columnId) {
      const imageResult = await updateCardImage({ columnId: newCardBody?.columnId, imageFile })
      await requestFunction({
        newCardBody: { ...newCardBody, imageUrl: imageResult.imageUrl },
        cardId: card.id,
      })
    } else {
      await requestFunction({
        newCardBody,
        cardId: card.id,
      })
    }
    dispatch(closeModal())
    refreshCardList()
    dispatch(openToast('successUpdateCard'))
  }

  useEffect(() => {
    if (newCardBody.columnId && newCardBody.description && newCardBody.title) {
      setIsDisabled(false)
    }
  }, [newCardBody])

  useEffect(() => {
    setAssigneeUserId(card.assignee.id)
    setDueDate(card.dueDate)
  }, [card])

  useEffect(() => {
    setNewCardBody((prevCardBody) => ({
      ...prevCardBody,
      assigneeUserId,
      dueDate,
    }))
  }, [assigneeUserId, dueDate, setNewCardBody])

  useEffect(() => {
    getMembersRequest()
  }, [getMembersRequest])

  return (
    <form className="modal-layout" onSubmit={handleSubmit}>
      <h3 className="text-[2.4rem] font-bold">할 일 수정</h3>
      <div className="flex gap-[1rem]">
        <div className="flex-1">
          <DropDownMenu
            id="progress"
            label="상태"
            onChange={setNewCardBody}
            columnTitle={columnTitle}
            isRequired
          />
        </div>
        <div className="flex-1">
          <DropDownInputMenu
            id="manager"
            label="담당자"
            currentManager={card.assignee}
            memberList={members}
            setManager={setAssigneeUserId}
            isRequired
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
      <DateInput
        id="dueDate"
        label="마감일"
        name="dueDate"
        value={newCardBody?.dueDate}
        onChange={setDueDate}
        isRequired
      />
      <TagInput
        id="tag"
        label="태그"
        value={newCardBody?.tags}
        name="tag"
        onChange={handleInputValue}
      />
      <ImageInput
        id="image"
        label="이미지"
        size="s"
        currentImage={card.imageUrl}
        onChange={handleFileInputValue}
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="수정" type="submit" isDisabled={isDisabled} />
      </div>
    </form>
  )
}
