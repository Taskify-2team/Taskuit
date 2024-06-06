import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDashBoardInfo, putDashBoard } from '@/service/dashboards'
import ColorSelector from '../ColorSelector/ColorSelector'
import { ShortButton } from '..'

export default function EditName() {
  const [dashboardBody, setDashBoardBody] = useState({
    title: '',
    color: '',
  })
  const [editBoardBody, setEditBoardBody] = useState({
    title: '',
    color: '',
  })
  const router = useRouter()
  const { dashboardId } = router.query

  const handleColor = (colorName: string) => {
    setEditBoardBody({
      ...editBoardBody,
      color: colorName,
    })
  }

  const handleEditBoard = async () => {
    if (!editBoardBody.title && !editBoardBody.color) {
      alert('변경사항이 없습니다!')
      return
    }
    await putDashBoard(Number(dashboardId), editBoardBody)
    alert('변경되었습니다!')
  }

  useEffect(() => {
    const handleLoadDashBoard = async () => {
      if (dashboardId) {
        const { title, color } = await getDashBoardInfo(Number(dashboardId))
        setDashBoardBody({ title, color })
        setEditBoardBody({ ...editBoardBody, color })
      }
    }
    handleLoadDashBoard()
  }, [dashboardId])

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
