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
import TextCounter from '@/components/TextCounter/TextCounter'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { getCardList, updateCard } from '@/service/cards'
import { postCardImage } from '@/service/columns'
import { getMemberList } from '@/service/members'
import { Tag, updateTags } from '@/service/tag'
import { useDbId } from '@/store/context/DbIdContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { deleteCardItem, orderingCardList } from '@/store/reducers/cardReducer'
import { closeModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { Card, UpdateCard } from '@/types/dashboard'
import { Member } from '@/types/header'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'

export interface EditToDoProps {
  card: Card
  columnTitle: string
  tags: Tag[]
}

export default function EditToDo({ columnTitle, card, tags }: EditToDoProps) {
  const router = useRouter()
  const cursorId = useAppSelector((state) => state.card.cursorId[card.columnId])
  const dispatch = useAppDispatch()
  const { requestFunction: updateCardImage } = useAsync(postCardImage)
  const { requestFunction: getMembers } = useAsync(getMemberList)
  const { requestFunction: updateTagsRequest } = useAsync(updateTags)
  const { theme } = useLoadTheme()
  const { dbId } = useDbId()
  const [members, setMembers] = useState<Member[]>([])
  const [imageFile, setImageFile] = useState<File | null>()
  const [assigneeUserId, setAssigneeUserId] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dueDate, setDueDate] = useState('')
  const [newCardBody, setNewCardBody] = useState<UpdateCard>({
    columnId: card.columnId,
    assigneeUserId: card.assignee.id || 0,
    title: card.title,
    description: card.description,
    dueDate: card.dueDate,
    tags: [], // 안쓸수도 쓸수도
    imageUrl: card.imageUrl || null,
  })
  const [myTagBody, setMyTagBody] = useState<Tag[]>(tags)
  const [page, setPage] = useState(1)
  const [totalMember, setTotalMember] = useState(0)
  const { dashboardId } = router.query
  const { language } = useLoadLanguage()

  const getMembersRequest = useCallback(async () => {
    const result = await getMembers(page, Number(dashboardId))
    setMembers((prev) => [...prev, ...result.members])
    setTotalMember(result.totalCount)
  }, [dashboardId, getMembers, page])

  const handleInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewCardBody({
      ...newCardBody,
      [e.target['name']]: e.target.value,
    })
  }

  const handleFileInputValue = (file: File | null) => {
    if (file === null) {
      setNewCardBody((prev) => ({
        ...prev,
        imageUrl: null,
      }))
    }
    setImageFile(file)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (imageFile && newCardBody.columnId) {
      const imageResult = await updateCardImage({ columnId: newCardBody?.columnId, imageFile })
      await dispatch(
        updateCard({
          newCardBody: { ...newCardBody, imageUrl: imageResult.imageUrl },
          cardId: card.id,
        }),
      )
    } else {
      await dispatch(updateCard({ newCardBody, cardId: card.id }))
    }
    if (card.columnId !== newCardBody.columnId) {
      dispatch(deleteCardItem({ cardId: card.id, columnId: card.columnId }))
    }
    if (newCardBody.columnId) {
      await updateTagsRequest({
        userId: dbId,
        columnId: newCardBody.columnId,
        cardId: card.id,
        tags: myTagBody,
      })
    }
    await dispatch(getCardList({ cursorId: Number(cursorId), columnId: card.columnId }))
    dispatch(orderingCardList({ columnId: newCardBody.columnId }))
    dispatch(openToast('successUpdateCard'))
    dispatch(closeModal())
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
  }, [getMembersRequest, page])

  return (
    <form
      className={`modal-layout ${theme === 'dark' ? 'bg-var-black2' : ''}`}
      onSubmit={handleSubmit}
    >
      <h3
        className={`text-[2.4rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
      >
        {language === 'ko' ? '할 일 수정' : 'Edit to do'}
      </h3>
      <div className="flex gap-[1rem] sm:flex-col sm:gap-[2.4rem]">
        <div className="flex-1">
          <DropDownMenu
            id="progress"
            label={language === 'ko' ? '상태' : 'Status'}
            onChange={setNewCardBody}
            columnTitle={columnTitle}
            isRequired
          />
        </div>
        <div className="flex-1">
          <DropDownInputMenu
            id="manager"
            label={language === 'ko' ? '담당자' : 'Manager'}
            currentManager={card.assignee}
            memberList={members}
            setManager={setAssigneeUserId}
            setPage={setPage}
            totalMember={totalMember}
            isRequired
          />
        </div>
      </div>
      <div className="relative">
        <TextInput
          id="title"
          label={language === 'ko' ? '제목' : 'Title'}
          name="title"
          value={newCardBody?.title}
          onChange={handleInputValue}
          placeholder={language === 'ko' ? '제목을 입력해 주세요.' : 'Please enter a title.'}
          isRequired
        />
        <TextCounter text={String(newCardBody.title)} length={20} />
      </div>
      <Textarea
        id="description"
        label={language === 'ko' ? '설명' : 'Description'}
        name="description"
        value={newCardBody?.description}
        onChange={handleInputValue}
        placeholder={language === 'ko' ? '설명을 입력해 주세요.' : 'Please enter a description.'}
        isRequired
      />
      <DateInput
        id="dueDate"
        label={language === 'ko' ? '마감일' : 'Due date'}
        name="dueDate"
        value={newCardBody?.dueDate}
        onChange={setDueDate}
        isRequired
      />
      <TagInput
        id="tag"
        label={language === 'ko' ? '태그' : 'Tag'}
        myTagBody={myTagBody}
        setMyTagBody={setMyTagBody}
      />
      <div className="flex">
        <ImageInput
          id="image"
          label={language === 'ko' ? '이미지' : 'Image'}
          size="s"
          currentImage={card.imageUrl}
          onChange={handleFileInputValue}
        />
      </div>
      <div className="flex gap-[1rem] self-end">
        <ShortButton
          color="white"
          text={language === 'ko' ? '취소' : 'Cancel'}
          onClick={() => dispatch(closeModal())}
        />
        <ShortButton
          color="purple"
          text={language === 'ko' ? '수정' : 'Edit'}
          type="submit"
          isDisabled={isDisabled}
        />
      </div>
    </form>
  )
}
