import { AppLayout, MyDashBoardList, InviteList } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { closeModal } from '@/store/reducers/modalReducer'
import { useEffect } from 'react'

export default function MyDashBoard() {
  const { theme } = useLoadTheme()
  const dispatch = useAppDispatch()
  const { language } = useLoadLanguage()

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  return (
    <AppLayout>
      <div className="flex w-[102.2rem] max-w-[calc(100vw-30rem)] flex-col p-[2rem] sm:max-w-[calc(100vw-6.7rem)] md:max-w-[calc(100vw-16rem)]">
        <MyDashBoardList />
        <div
          className={`mt-[3rem] flex w-full flex-col gap-[2rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} px-[2.8rem] py-[3rem]`}
        >
          <p
            className={`text-[2.4rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            {language === 'ko' ? '초대받은 대시보드' : 'Invited List'}
          </p>
          <InviteList />
        </div>
      </div>
    </AppLayout>
  )
}
