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
    imageUrl: '',
  })
  const [imageFile, setImageFile] = useState<File | string>('')
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(postDashBoardCard)
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

  const submitImageFile = async () => {
    if (imageFile) {
      const formData = new FormData()
      formData.append('image', imageFile)
      const result = await postImage({ columnId, imageFile })
      setCardBody({
        ...cardBody,
        imageUrl: result?.data.imageUrl,
      })
    }
  }

  const submitAddToDo = async () => {
    await submitImageFile()
    /** 추후 이미지 프롭스 잘 불러오는지 확인 필요 */
    const result = await requestFunction(cardBody)
    if (!result) return

    dispatch(closeModal())
    /** 요청 완료시 띄울 토스트나 모달 코드 */
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
