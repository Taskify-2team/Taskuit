import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useState } from 'react'
import { postColumn } from '@/service/columns'

interface AddColumnProps {
  dashboardId: number
}

export default function AddColumn({ dashboardId }: AddColumnProps) {
  const [columnName, setColumnName] = useState('')
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(postColumn)

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value)
  }

  const submitAddColumn = async () => {
    const result = await requestFunction({ dashboardId, title: columnName })
    if (!result) return

    dispatch(closeModal())
    /** 요청 성공 시 토스트나 모달 띄워주는 코드 */
  }

  return (
    <form onSubmit={submitAddColumn} className="modal-layout">
      <h3 className="text-[2.4rem] font-bold">새 컬럼 생성</h3>
      <TextInput
        id="columnName"
        label="이름"
        name="columnName"
        value={columnName}
        onChange={handleInputValue}
        placeholder="새로운 프로젝트"
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="생성" onClick={submitAddColumn} />
      </div>
    </form>
  )
}
