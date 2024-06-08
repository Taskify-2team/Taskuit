import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { putDashBoard } from '@/service/dashboards'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import useEditBoard from '@/hooks/useEditBoard'
import { ShortButton } from '..'
import ColorSelector from '../ColorSelector/ColorSelector'

export default function EditName() {
  const [editBoardBody, setEditBoardBody] = useState({
    title: '',
    color: '',
  })
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()
  const { dashboardBody } = useEditBoard(Number(dashboardId))

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
    setEditBoardBody({
      ...editBoardBody,
      title: '',
    })
  }

  useEffect(() => {
    setEditBoardBody({ ...dashboardBody })
  }, [dashboardBody])

  return (
    <div className="flex w-[62rem] flex-col gap-[3.4rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <div className="flex justify-between">
        <p className="text-[2rem] font-bold">{dashboardBody.title}</p>
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
        <label htmlFor="name" className="flex flex-col gap-[1rem] text-[1.8rem]">
          대시보드 이름
          <input
            placeholder={dashboardBody.title}
            id="name"
            className="rounded-[0.6rem] border border-var-gray3 p-[1.5rem] text-[1.6rem]"
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
  )
}
