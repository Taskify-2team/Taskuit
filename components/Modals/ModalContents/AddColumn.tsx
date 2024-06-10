import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getColumnList, postColumn } from '@/service/columns'
import { openToast } from '@/store/reducers/toastReducer'

export interface AddColumnProps {
  dashboardId: number
}

export default function AddColumn({ dashboardId }: AddColumnProps) {
  const [columnBody, setColumnBody] = useState({
    title: '',
    dashboardId,
  })
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(postColumn)

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setColumnBody({
      ...columnBody,
      title: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const result = await requestFunction(columnBody)
    if (!result) return

    dispatch(closeModal())

    dispatch(openToast('successAddColumn'))
    await dispatch(getColumnList(String(dashboardId)))
  }

  return (
    <form onSubmit={handleSubmit} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">새 컬럼 생성</h3>
      <TextInput
        id="columnName"
        label="이름"
        name="columnName"
        value={columnBody.title}
        onChange={handleInputValue}
        placeholder="새로운 프로젝트"
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" type="submit" text="생성" onClick={handleSubmit} />
      </div>
    </form>
  )
}
