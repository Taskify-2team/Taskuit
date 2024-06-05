import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { Column } from '@/types/column'
import { ChangeEvent, useState } from 'react'

interface EditColumnProps {
  column: Column
}

export default function EditColumn({ column }: EditColumnProps) {
  const [newColumnName, setNewColumnName] = useState(column?.title)
  const dispatch = useAppDispatch()

  const handelInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewColumnName(e.target.value)
  }

  const handleDeleteColumn = () => {
    /** 칼럼 삭제 요청하기 */
  }

  const submitEditColumn = () => {
    /** 칼럼 이름 수정 요청하기 */
  }

  return (
    <form onSubmit={submitEditColumn} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">칼럼 관리</h3>
      <TextInput id="name" label="이름" value={newColumnName} onChange={handelInputValue} />
      <div className="flex items-end justify-between">
        <span
          className="cursor-pointer text-[1.4rem] text-var-gray4 underline"
          onClick={handleDeleteColumn}
        >
          삭제하기
        </span>
        <div className="flex gap-[1rem]">
          <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
          <ShortButton color="purple" text="변경" onClick={submitEditColumn} />
        </div>
      </div>
    </form>
  )
}
