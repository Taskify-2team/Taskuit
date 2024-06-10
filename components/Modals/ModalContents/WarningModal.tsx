import ShortButton from '@/components/Buttons/ShortButton'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { deleteColumn } from '@/service/columns'
import { closeModal } from '@/store/reducers/modalReducer'
import { Column } from '@/types/dashboard'

interface WarningModalProps {
  variant: string
  columnId?: number
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>
}

export default function WarningModal({ setColumns, variant, columnId }: WarningModalProps) {
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(deleteColumn)

  const variantList = new Map([['deleteColumn', { text: '컬럼의 모든 카드가 삭제됩니다.' }]])

  const foundVariant = variantList.get(variant)

  const submitDeleteColumn = async () => {
    if (columnId) {
      await requestFunction(columnId)
    }
    dispatch(closeModal())
    setColumns((prevColumns) => prevColumns.filter((prevColumn) => prevColumn.id !== columnId))
    /** 콜럼 삭제 요청하기 */
  }

  return (
    <div className="modal-layout">
      <div className="flex flex-grow items-center self-center">
        <p className="text-[1.8rem]">{foundVariant?.text}</p>
      </div>
      <div className="absolute bottom-[2.8rem] right-[2.8rem] flex gap-[1rem]">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="삭제" onClick={submitDeleteColumn} />
      </div>
    </div>
  )
}
