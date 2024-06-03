import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'

interface BasicModalProps {
  text: string
}

export default function BasicModal({ text }: BasicModalProps) {
  const dispatch = useAppDispatch()
  return (
    <div>
      <div>{text}</div>
      <div onClick={() => dispatch(closeModal())}>
        <PurpleButton text="확인" />
      </div>
    </div>
  )
}
