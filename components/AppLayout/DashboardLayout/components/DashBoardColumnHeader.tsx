import { CircleChip } from '@/components'
import { openModal } from '@/store/reducers/modalReducer'
import Image from 'next/image'
import settingIcon from '@/public/icons/settingIcon.svg'
import { useAppDispatch } from '@/hooks/useApp'
import { Card } from '@/types/dashboard'
import { useRouter } from 'next/router'
import useAsync from '@/hooks/useAsync'
import { getDashBoardInfo } from '@/service/dashboards'
import { useCallback, useEffect, useState } from 'react'

interface DashBoardColumnHeaderProps {
  columnTitle: string
  columnId: number
  cardList: Card[]
}

export default function DashBoardColumnHeader({
  columnTitle,
  columnId,
  cardList,
}: DashBoardColumnHeaderProps) {
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()
  const { requestFunction } = useAsync(getDashBoardInfo)
  const [isMyDashBoard, setIsMyDashBoard] = useState(false)

  const handleLoadDashBoard = useCallback(async () => {
    const result = await requestFunction(Number(dashboardId))
    setIsMyDashBoard(result.createdByMe)
  }, [dashboardId, requestFunction])

  useEffect(() => {
    handleLoadDashBoard()
  }, [handleLoadDashBoard])

  return (
    <div className="mb-[0.9rem] flex items-center justify-between">
      <div className="flex items-center gap-[0.8rem]">
        <CircleChip color="#5534DA" />
        <h3 className="mr-[0.4rem] text-[1.8rem] font-[700]">{columnTitle}</h3>
        {cardList && (
          <div className="rounded-[0.4rem] bg-var-gray2 px-[0.6rem] py-[0.3rem] text-[1.2rem] text-var-gray5">
            {cardList.length}
          </div>
        )}
      </div>

      {isMyDashBoard && (
        <button
          type="button"
          onClick={() =>
            dispatch(
              openModal({
                modalName: 'EditColumn',
                modalProps: { columnId, columnTitle },
              }),
            )
          }
        >
          <Image src={settingIcon} alt="설정" width="24" height="24" />
        </button>
      )}
    </div>
  )
}
