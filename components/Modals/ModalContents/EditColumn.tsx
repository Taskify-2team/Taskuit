import { ShortButton, TextInput } from '@/components'
import TextCounter from '@/components/TextCounter/TextCounter'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { deleteColumn, updateColumn } from '@/service/columns'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { useLoadTheme } from '@/store/context/ThemeContext'
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
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

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
    <form onSubmit={handleSubmit} className={`modal-layout ${theme === 'dark' && 'bg-var-black2'}`}>
      <h3 className={`text-[2.4rem] font-bold ${theme === 'dark' && 'text-var-white'}`}>
        {language === 'ko' ? '칼럼 관리' : 'Edit Column'}
      </h3>
      <div className="relative">
        <TextInput
          id="name"
          label={language === 'ko' ? '이름' : 'Name'}
          value={newColumnName.title}
          onChange={handelChange}
        />
        <TextCounter text={newColumnName.title} length={20} />
      </div>
      <div className="flex items-end justify-between">
        <button
          type="button"
          className="cursor-pointer text-[1.4rem] text-var-gray4 underline"
          onClick={handleDelete}
        >
          {language === 'ko' ? '삭제하기' : 'Delete'}
        </button>
        <div className="flex gap-[1rem]">
          <ShortButton
            color="white"
            text={language === 'ko' ? '취소' : 'Cancel'}
            onClick={() => dispatch(closeModal())}
          />
          <ShortButton
            type="submit"
            color="purple"
            text={language === 'ko' ? '변경' : 'Change'}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </form>
  )
}
