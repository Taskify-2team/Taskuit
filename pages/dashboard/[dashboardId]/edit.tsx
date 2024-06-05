import { AppLayout } from '@/components'
import ColorSelector from '@/components/ColorSelector/ColorSelector'
import { getDashBoardInfo } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Edit() {
  const [dashBoardInfo, setDashBoardInfo] = useState('')
  const [editBoardBody, setEditBoardBody] = useState({
    title: '',
    color: '#7ac555',
  })
  const router = useRouter()
  const { dashboardId } = router.query

  const handleColor = (colorName: string) => {
    setEditBoardBody({
      ...editBoardBody,
      color: colorName,
    })
  }

  useEffect(() => {
    const handleLoadDashBoard = async () => {
      const { title } = await getDashBoardInfo(Number(dashboardId))
      setDashBoardInfo(title)
    }
    handleLoadDashBoard()
  }, [dashboardId])

  return (
    <AppLayout>
      <div className="w-[62rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
        <div className="items-between flex">
          <p className="text-[2rem] font-bold">{dashBoardInfo}</p>
          <ColorSelector boardColor={editBoardBody.color} handleClick={handleColor} />
        </div>
      </div>
    </AppLayout>
  )
}
