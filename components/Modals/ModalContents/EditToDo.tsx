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
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useState } from 'react'

export default function EditToDo({ todo, managerList, menuList }) {
  const [toDoBody, setToDoBody] = useState({
    title: todo?.title,
    description: todo?.description,
    dueDate: todo?.dueDate,
    tags: todo?.tags,
    imageUrl: todo?.imageUrl,
  })
  const dispatch = useAppDispatch()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const submitEditToDo = () => {
    /** 할일 수정 요청하기 */
  }

  return (
    <form className="modal-layout" onSubmit={submitEditToDo}>
      <h3 className="text-[2.4rem] font-bold">할 일 수정</h3>
      <div className="flex gap-[1rem]">
        <div className="flex-1">
          <DropDownMenu id="progress" label="상태" menuList={menuList} />
        </div>
        <div className="flex-1">
          <DropDownInputMenu id="manager" label="담당자" managerList={managerList} />
        </div>
      </div>
      <TextInput
        id="title"
        label="제목"
        name="title"
        value={toDoBody?.title}
        onChange={handleInputValue}
        placeholder="제목을 입력해 주세요."
        isRequired
      />
      <Textarea
        id="description"
        label="설명"
        name="description"
        value={toDoBody?.description}
        onChange={handleInputValue}
        placeholder="설명을 입력해 주세요."
        isRequired
      />
      <DateInput id="dueDate" label="마감일" value={toDoBody?.dueDate} />
      <TagInput
        id="tag"
        label="태그"
        value={toDoBody?.tags}
        name="tag"
        onChange={handleInputValue}
      />
      <ProfileImageInput id="image" label="이미지" size="s" onChange={handleFileInputValue} />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="수정" onClick={submitEditToDo} />
      </div>
    </form>
  )
}
