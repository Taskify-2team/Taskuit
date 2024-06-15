import ShortButton from '@/components/Buttons/ShortButton'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { deleteColumn } from '@/service/columns'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { deleteColumnItem } from '@/store/reducers/columnReducer'
import { closeModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'

export interface WarningModalProps {
  variant: string
  columnId: number
}

export default function WarningModal({ variant, columnId }: WarningModalProps) {
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(deleteColumn)
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const variantList = new Map([
    [
      'deleteColumn',
      {
        text: `${language === 'ko' ? '컬럼의 모든 카드가 삭제됩니다.' : 'All your cards will be deleted.'}`,
      },
    ],
  ])

  const foundVariant = variantList.get(variant)

  const submitDeleteColumn = async () => {
    if (columnId) {
      await requestFunction(columnId)
    }
    dispatch(closeModal())
    dispatch(deleteColumnItem({ columnId }))
    dispatch(openToast('successDeleteColumn'))
  }

  return (
    <div className={`modal-layout ${theme === 'dark' && 'bg-var-black2'}`}>
      <div className="flex flex-grow items-center self-center">
        <p className={`text-[1.8rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}>
          {foundVariant?.text}
        </p>
      </div>
      <div className="absolute bottom-[2.8rem] right-[2.8rem] flex gap-[1rem]">
        <ShortButton
          color="white"
          text={language === 'ko' ? '취소' : 'Cancel'}
          onClick={() => dispatch(closeModal())}
        />
        <ShortButton
          color="purple"
          text={language === 'ko' ? '삭제' : 'Delete'}
          onClick={submitDeleteColumn}
        />
      </div>
    </div>
  )
}
