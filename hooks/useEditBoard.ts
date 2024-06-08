import { getDashBoardInfo } from '@/service/dashboards'
import { useEffect, useState } from 'react'

const useEditBoard = (dashboardId: number) => {
  const [dashboardBody, setDashBoardBody] = useState({
    title: '',
    color: '',
  })

  useEffect(() => {
    const handleLoadDashBoard = async () => {
      if (dashboardId) {
        const { title, color } = await getDashBoardInfo(Number(dashboardId))
        setDashBoardBody({ title, color })
      }
    }
    handleLoadDashBoard()
  }, [dashboardId])

  return { dashboardBody }
}

export default useEditBoard
