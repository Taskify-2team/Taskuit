import { AppLayout, ShortButton } from '@/components'
import ColorSelector from '@/components/ColorSelector/ColorSelector'
import { getDashBoardInfo, putDashBoard } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'

export default function Edit() {
  const [dashboardBody, setDashBoardBody] = useState('')
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

  const handleEditBoard = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await putDashBoard(Number(dashboardId), editBoardBody)
    alert('변경되었습니다!')
  }

  useEffect(() => {
    const handleLoadDashBoard = async () => {
      const { title, color } = await getDashBoardInfo(Number(dashboardId))
      setDashBoardBody(title)
      setEditBoardBody({ ...editBoardBody, color })
    }
    if (dashboardId) {
      handleLoadDashBoard()
    }
  }, [dashboardId])

  return (
    <AppLayout>
      <div className="flex w-[62rem] flex-col gap-[3.4rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
        <div className="flex justify-between">
          <p className="text-[2rem] font-bold">{dashboardBody}</p>
          <ColorSelector boardColor={editBoardBody.color} handleClick={handleColor} />
        </div>
        <form className="flex flex-col gap-[2.4rem]" onSubmit={handleEditBoard}>
          <label htmlFor="name" className="flex flex-col gap-[1rem] text-[1.8rem]">
            대시보드 이름
            <input
              placeholder={dashboardBody}
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
    </AppLayout>
  )
}
