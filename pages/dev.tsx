import { ShortButton } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'

export default function Dev() {
  const dispatch = useAppDispatch()

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-[5rem]">
      <div>
        <ShortButton
          color="purple"
          text="잘했어요"
          onClick={() => dispatch(openToast('successDeleteColumn'))}
        />
      </div>
      <div>
        <ShortButton
          color="purple"
          text="못했어요"
          onClick={() => dispatch(openToast('wrongCurrentPassword'))}
        />
      </div>
    </div>
  )
}
