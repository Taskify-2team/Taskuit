import { getDashBoardInfo } from '@/service/dashboards'
import { useEffect, useState } from 'react'

const useEditBoard = (dashboardId: number) => {
  const [pending, setPending] = useState(false)
  const [dashboardBody, setDashBoardBody] = useState({
    title: '',
    color: '',
  })

  useEffect(() => {
    const handleLoadDashBoard = async () => {
      setPending(true)
      if (dashboardId) {
        const { title, color } = await getDashBoardInfo(Number(dashboardId))
        setDashBoardBody({ title, color })
        setPending(false)
      }
    }
    handleLoadDashBoard()
  }, [dashboardId])

  return { dashboardBody, setDashBoardBody, pending }
}

export default useEditBoard
