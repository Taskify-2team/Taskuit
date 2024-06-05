import {
  DropDownInputMenu,
  DropDownMenu,
  DateInput,
  ProfileImageInput,
  TagInput,
  TextInput,
  Textarea,
} from '@/components'

export default function EditToDo({ todo }) {
  return (
    <form className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">할 일 수정</h3>
      <div className="flex gap-[1rem]">
        <div className="flex-1">
          <DropDownMenu id="progress" label="상태" menuList={[]} />
        </div>
        <div className="flex-1">
          <DropDownInputMenu id="manager" label="담당자" />
        </div>
      </div>
      <TextInput
        id="title"
        label="제목"
        value={todo?.title}
        placeholder="제목을 입력해 주세요."
        isRequired
      />
      <Textarea
        id="description"
        label="설명"
        value={todo?.description}
        placeholder="설명을 입력해 주세요."
        isRequired
      />
      <DateInput id="dueDate" label="마감일" value={todo?.dueDate} />
      <TagInput id="tag" label="태그" value={todo?.tags} />
      <ProfileImageInput id="image" label="이미지" value={todo?.imageUrl} size="s" />
    </form>
  )
}
