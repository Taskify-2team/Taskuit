import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { putDashBoard } from '@/service/dashboards'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import useEditBoard from '@/hooks/useEditBoard'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { ModalPortal } from '@/Portal'
import { ShortButton } from '..'
import ColorSelector from '../ColorSelector/ColorSelector'
import CircleChip from '../Chips/CircleChip'
import Loading from '../Loading/Loading'

export default function EditName() {
  const [editBoardBody, setEditBoardBody] = useState({
    title: '',
    color: '',
  })
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()
  const { dashboardBody, setDashBoardBody, pending } = useEditBoard(Number(dashboardId))
  const { theme } = useLoadTheme()

  const handleColor = (colorName: string) => {
    setEditBoardBody({
      ...editBoardBody,
      color: colorName,
    })
  }

  const handleEditBoard = async () => {
    if (
      editBoardBody.color === dashboardBody.color &&
      editBoardBody.title === dashboardBody.title
    ) {
      dispatch(openToast('wrongEditBoardValue'))
      return
    }
    dispatch(openToast('successEditBoard'))
    await putDashBoard(Number(dashboardId), editBoardBody)
    setDashBoardBody({ ...dashboardBody, ...editBoardBody })
    setEditBoardBody({
      ...editBoardBody,
      title: '',
    })
  }

  useEffect(() => {
    setEditBoardBody({ ...dashboardBody })
  }, [dashboardBody])

  return (
    <>
      {pending && (
        <ModalPortal>
          <Loading />
        </ModalPortal>
      )}
      <div
        className={`flex w-[62rem] flex-col gap-[3.4rem] rounded-[0.8rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} p-[2.8rem]`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-[1rem]">
            <CircleChip color={dashboardBody.color} />
            <p
              className={`text-[2rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
            >
              {dashboardBody.title}
            </p>
          </div>
          <ColorSelector
            boardColor={editBoardBody.color || dashboardBody.color}
            handleClick={handleColor}
          />
        </div>
        <form
          className="flex flex-col gap-[2.4rem]"
          onSubmit={(e) => {
            e.preventDefault()
            handleEditBoard()
          }}
        >
          <label
            htmlFor="name"
            className={`flex flex-col gap-[1rem] text-[1.8rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
          >
            대시보드 이름
            <input
              placeholder={dashboardBody.title}
              id="name"
              className={`rounded-[0.6rem] border p-[1.5rem] text-[1.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1'}`}
              onChange={(e) =>
                setEditBoardBody({
                  ...editBoardBody,
                  title: e.target.value,
                })
              }
            />
          </label>
          <div className="flex flex-row-reverse">
            <ShortButton color="purple" text="변경" onClick={handleEditBoard} />
          </div>
        </form>
      </div>
    </>
  )
}
