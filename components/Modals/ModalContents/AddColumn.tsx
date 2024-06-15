import { ShortButton, TextInput } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { closeModal } from '@/store/reducers/modalReducer'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getColumnList, postColumn } from '@/service/columns'
import { openToast } from '@/store/reducers/toastReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'

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
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

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
    <form onSubmit={handleSubmit} className={`modal-layout ${theme === 'dark' && 'bg-var-black2'}`}>
      <h3 className={`text-[2.4rem] font-bold ${theme === 'dark' && 'text-var-white'}`}>
        {language === 'ko' ? '새 컬럼 생성' : 'Create new column'}
      </h3>
      <TextInput
        id="columnName"
        label={language === 'ko' ? '이름' : 'Name'}
        name="columnName"
        value={columnBody.title}
        onChange={handleInputValue}
        placeholder={language === 'ko' ? '새로운 프로젝트' : 'New project'}
      />
      <div className="flex gap-[1rem] self-end">
        <ShortButton
          color="white"
          text={language === 'ko' ? '취소' : 'Cancel'}
          onClick={() => dispatch(closeModal())}
        />
        <ShortButton color="purple" text={language === 'ko' ? '생성' : 'Create'} type="submit" />
      </div>
    </form>
  )
}
