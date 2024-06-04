import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, useState } from 'react'

export default function AddColumn() {
  const [columnName, setColumnName] = useState('')
  const dispatch = useAppDispatch()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value)
  }

  const submitAddColumn = () => {
    /** 컬럼 추가 요청 보내기 */
  }

  return (
    <>
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
    </>
  )
}
