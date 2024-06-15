/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ChangeEvent, useEffect, useState } from 'react'
import { TextInput, ShortButton } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import ColorSelector from '@/components/ColorSelector/ColorSelector'
import useAsync from '@/hooks/useAsync'
import { postDashboard } from '@/service/dashboards'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useRouter } from 'next/router'
import TextCounter from '@/components/TextCounter/TextCounter'
import { useLoadLanguage } from '@/store/context/LanguageContext'

export default function AddDashBoard() {
  const dispatch = useAppDispatch()
  const [isDisabled, setDisabled] = useState(true)
  const { requestFunction } = useAsync(postDashboard)
  const [dashBoardBody, setDashBoardBody] = useState({
    title: '',
    color: '#7ac555',
  })
  const router = useRouter()
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const handleColor = (colorName: string) => {
    setDashBoardBody({
      ...dashBoardBody,
      color: colorName,
    })
  }

  const submitAddDashBoard = async () => {
    const result = await requestFunction(dashBoardBody)
    if (!result) return
    dispatch(closeModal())
    dispatch(openMyToast({ text: '대시보드를 생성했습니다', warn: false }))
    router.push(`/dashboard/${result.data.id}`)
  }

  useEffect(() => {
    setDisabled(!dashBoardBody.title)
  }, [dashBoardBody])

  return (
    <form
      onSubmit={submitAddDashBoard}
      className={`modal-layout overflow-visible ${theme === 'dark' && 'bg-var-black2'}`}
    >
      <h3 className={`text-[2.4rem] font-bold ${theme === 'dark' && 'text-var-white'}`}>
        {language === 'ko' ? '새로운 대시보드' : 'Create dashboard'}
      </h3>
      <div className="relative flex w-full flex-col gap-[1.8rem]">
        <TextInput
          id="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (dashBoardBody.title.length <= 20) {
              setDashBoardBody({ ...dashBoardBody, title: e.target.value })
            }
          }}
          label={language === 'ko' ? '대시보드 이름' : 'Dashboard name'}
          placeholder={language === 'ko' ? '대시보드 이름' : 'Dashboard name'}
        />
        <TextCounter text={dashBoardBody.title} length={20} />
      </div>
      <ColorSelector boardColor={dashBoardBody.color} handleClick={handleColor} />
      <div className="flex gap-[1.2rem] self-end">
        <ShortButton
          color="white"
          text={language === 'ko' ? '취소' : 'Cancel'}
          onClick={() => dispatch(closeModal())}
        />
        <ShortButton
          color="purple"
          text={language === 'ko' ? '생성' : 'Create'}
          type="submit"
          isDisabled={isDisabled}
        />
      </div>
    </form>
  )
}
