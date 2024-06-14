/* eslint-disable @typescript-eslint/dot-notation */
import {
  DropDownInputMenu,
  DateInput,
  ImageInput,
  TagInput,
  TextInput,
  Textarea,
  ShortButton,
} from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { getCardList, postDashBoardCard } from '@/service/cards'
import useAsync from '@/hooks/useAsync'
import { PostCard } from '@/types/dashboard'
import { postCardImage } from '@/service/columns'
import { openToast } from '@/store/reducers/toastReducer'
import { useRouter } from 'next/router'
import { getMemberList } from '@/service/members'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useDbId } from '@/store/context/DbIdContext'
import { Tag, postTag } from '@/service/tag'
import TextCounter from '@/components/TextCounter/TextCounter'

export interface AddToDoProps {
  columnId: number
}

export default function AddToDo({ columnId }: AddToDoProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()
  const { dbId } = useDbId()
  const cursorId = useAppSelector((state) => state.card.cursorId[columnId])
  const { requestFunction: postToDo } = useAsync(postDashBoardCard)
  const { requestFunction: postImage } = useAsync(postCardImage)
  const { requestFunction: getMembers } = useAsync(getMemberList)
  const { requestFunction: postTagRequest } = useAsync(postTag)
  const { dashboardId } = router.query
  const [members, setMembers] = useState([])
  const [isDisabled, setIsDisabled] = useState(true)
  const [assigneeUserId, setAssigneeUserId] = useState(0)
  const [dueDate, setDueDate] = useState('')
  const [imageFile, setImageFile] = useState<File>()
  const [cardBody, setCardBody] = useState<PostCard>({
    dashboardId: Number(dashboardId),
    columnId,
    assigneeUserId: 0,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
  })
  const [myTagBody, setMyTagBody] = useState<Tag[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setCardBody({
      ...cardBody,
      [e.target['name']]: e.target.value,
    })
  }

  const getMembersRequest = useCallback(async () => {
    const result = await getMembers(0, Number(dashboardId))
    setMembers(result.members)
  }, [dashboardId, getMembers])

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  const refreshCardList = async () => {
    await dispatch(getCardList({ cursorId: Number(cursorId), columnId }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    let imageResult
    let postResult
    if (imageFile) {
      imageResult = await postImage({ columnId, imageFile })
      const { imageUrl } = imageResult
      postResult = await postToDo({ ...cardBody, imageUrl })
    } else {
      postResult = await postToDo(cardBody)
    }
    if (!postResult) return

    const { id } = postResult.data
    await postTagRequest({ userId: dbId, columnId, cardId: id, tags: myTagBody })
    dispatch(closeModal())
    refreshCardList()
    dispatch(openToast('successAddCard'))
  }

  useEffect(() => {
    if (cardBody.columnId && cardBody.dashboardId && cardBody.description && cardBody.title) {
      setIsDisabled(false)
    }
  }, [cardBody])

  useEffect(() => {
    setCardBody((prevCardBody) => ({
      ...prevCardBody,
      assigneeUserId,
      dueDate,
    }))
  }, [assigneeUserId, dueDate, setCardBody])

  useEffect(() => {
    if (dashboardId) {
      getMembersRequest()
    }
  }, [dashboardId, getMembersRequest])

  return (
    <form onSubmit={handleSubmit} className={`modal-layout ${theme === 'dark' && 'bg-var-black2'}`}>
      <h3 className={`text-[2.4rem] font-bold ${theme === 'dark' && 'text-var-white'}`}>
        할 일 생성
      </h3>
      <DropDownInputMenu
        id="manager"
        label="담당자"
        memberList={members}
        setManager={setAssigneeUserId}
      />
      <div className="relative">
        <TextInput
          label="제목"
          isRequired
          name="title"
          id="title"
          value={cardBody.title}
          placeholder="제목을 입력해 주세요."
          onChange={handleChange}
        />
        <TextCounter text={cardBody.title} length={20} />
      </div>
      <Textarea
        label="설명"
        isRequired
        name="description"
        id="description"
        value={cardBody.description}
        placeholder="설명을 입력해 주세요."
        onChange={handleChange}
      />
      <DateInput
        label="마감일"
        id="dueDate"
        name="dueDate"
        value={cardBody.dueDate}
        onChange={setDueDate}
      />
      <TagInput id="tag" label="태그" myTagBody={myTagBody} setMyTagBody={setMyTagBody} />
      <ImageInput id="image" label="이미지" size="s" onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="확인" type="submit" isDisabled={isDisabled} />
      </div>
    </form>
  )
}
