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

import { ChangeEvent, useState } from 'react'

export default function AddToDo({ assigneeUserId, dashboardId, columnId, managerList }) {
  const [toDoBody, setToDoBody] = useState({
    assigneeUserId,
    dashboardId,
    columnId,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: {},
  })
  const dispatch = useAppDispatch()

  const handleInputValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setToDoBody({
      ...toDoBody,
      [e.target['name']]: e.target.value,
    })
  }

  const handleFileInputValue = (file: File) => {
    setToDoBody({
      ...toDoBody,
      imageUrl: file,
    })
  }

  const submitAddToDo = () => {
    /** 할일 추가 요청 보내기 */
  }

  return (
    <form onSubmit={submitAddToDo} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">할 일 생성</h3>
      <DropDownInputMenu id="manager" label="담당자" managerList={managerList} />
      <TextInput
        label="제목"
        isRequired
        name="title"
        id="title"
        value={toDoBody.title}
        placeholder="제목을 입력해 주세요."
        onChange={handleInputValue}
      />
      <Textarea
        label="설명"
        isRequired
        name="description"
        id="description"
        value={toDoBody.description}
        placeholder="설명을 입력해 주세요."
        onChange={handleInputValue}
      />
      <DateInput label="마감일" id="dueDate" value={toDoBody.dueDate} onChange={handleInputValue} />
      <TagInput id="tag" label="태그" />
      <ProfileImageInput id="image" label="이미지" size="s" onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="확인" onClick={submitAddToDo} />
      </div>
    </form>
  )
}
