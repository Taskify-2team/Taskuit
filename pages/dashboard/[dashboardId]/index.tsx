import { AppLayout, DashboardLayout } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { getColumnList } from '@/service/columns'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

export default function Dashboard() {
  const [isDrag, setIsDrag] = useState(false)
  const [totalX, setTotalX] = useState(0)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { dashboardId } = router.query
  const scrollRef = useRef<HTMLDivElement>(null)

  const preventUnexpectedEffects = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  const getColumnsData = useCallback(async () => {
    if (typeof dashboardId === 'string') {
      await dispatch(getColumnList(dashboardId))
    }
  }, [dashboardId, dispatch])

  const onAxisDragStart = (e: MouseEvent) => {
    preventUnexpectedEffects(e)
    setIsDrag(true)
    const xAxis = e.clientX
    if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
      setTotalX(xAxis + scrollRef.current.scrollLeft)
    }
  }

  const onAxisDragMove = (e: MouseEvent) => {
    preventUnexpectedEffects(e)
    if (!isDrag) {
      return
    }
    const scrollLeft = totalX - e.clientX
    if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft
    }
  }

  const onAxisDragEnd = () => {
    if (!isDrag) return
    if (!scrollRef.current) return
    setIsDrag(false)
  }

  useEffect(() => {
    if (dashboardId) {
      getColumnsData()
    }
  }, [dashboardId, getColumnsData])

  return (
    <AppLayout>
      <div
        className="flex h-full w-full overflow-auto"
        ref={scrollRef}
        onMouseDown={onAxisDragStart}
        onMouseMove={onAxisDragMove}
        onMouseUp={onAxisDragEnd}
        onMouseLeave={onAxisDragEnd}
      >
        <DashboardLayout dashboardId={Number(dashboardId)} setIsDrag={setIsDrag} />
      </div>
    </AppLayout>
  )
}
