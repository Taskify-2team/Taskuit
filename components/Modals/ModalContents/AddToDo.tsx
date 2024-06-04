/* eslint-disable @typescript-eslint/dot-notation */
import {
  PurpleButton,
  WhiteButton,
  DropDownInputMenu,
  DateInput,
  ProfileImageInput,
  TagInput,
  TextInput,
  Textarea,
} from '@/components'
import { Size } from '@/components/Input/ProfileImageInput'

import { ChangeEvent, useState } from 'react'

export default function AddToDo({ assigneeUserId, dashboardId, columnId, menuList }) {
  const [toDoBody, setToDoBody] = useState({
    assigneeUserId,
    dashboardId,
    columnId,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: [],
  })
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
  return (
    <>
      <h3 className="text-[2.4rem] font-bold">할 일 생성</h3>
      <DropDownInputMenu id="manager" label="담당자" menuList={menuList} />
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
      <ProfileImageInput id="image" label="이미지" size={Size.s} onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <WhiteButton text="취소" />
        <PurpleButton text="확인" />
      </div>
    </>
  )
}
