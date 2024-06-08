import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { deleteColumn, updateColumn } from '@/service/columns'
import { closeModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { Column } from '@/types/dashboard'
import { ChangeEvent, useState } from 'react'

interface EditColumnProps {
  columnId: number
  columnTitle: string
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>
}

export default function EditColumn({ columnId, columnTitle, setColumns }: EditColumnProps) {
  const [newColumnName, setNewColumnName] = useState({
    columnId,
    title: columnTitle,
  })
  const dispatch = useAppDispatch()
  const { requestFunction: updateColumnFunction } = useAsync(updateColumn)
  const { requestFunction: deleteColumnFunction } = useAsync(deleteColumn)

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewColumnName({
      ...newColumnName,
      title: e.target.value,
    })
  }

  const handleDelete = async () => {
    await deleteColumnFunction(columnId)
    setColumns((prevColumns) => prevColumns.filter((prevColumn) => prevColumn.id !== columnId))

    dispatch(closeModal())
    dispatch(openToast('successDeleteColumn'))
  }

  const handleSubmit = async () => {
    await updateColumnFunction(newColumnName)

    dispatch(closeModal())
    /** 토스트 */
  }

  return (
    <form onSubmit={handleSubmit} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">칼럼 관리</h3>
      <TextInput id="name" label="이름" value={newColumnName.title} onChange={handelChange} />
      <div className="flex items-end justify-between">
        <button
          type="button"
          className="cursor-pointer text-[1.4rem] text-var-gray4 underline"
          onClick={handleDelete}
        >
          삭제하기
        </button>
        <div className="flex gap-[1rem]">
          <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
          <ShortButton type="submit" color="purple" text="변경" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  )
}
