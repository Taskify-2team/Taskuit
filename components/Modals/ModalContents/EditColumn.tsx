import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { deleteColumn, updateColumn } from '@/service/columns'
import { addColumnItem } from '@/store/reducers/columnReducer'
import { closeModal, openModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { ChangeEvent, FormEvent, useState } from 'react'

export interface EditColumnProps {
  columnId: number
  columnTitle: string
}

export default function EditColumn({ columnId, columnTitle }: EditColumnProps) {
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
    dispatch(
      openModal({
        modalName: 'WarningModal',
        modalProps: { variant: 'deleteColumn', columnId },
      }),
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await updateColumnFunction(newColumnName)
    dispatch(addColumnItem({ newColumnName }))
    dispatch(closeModal())
    dispatch(openToast('successEditColumn'))
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
