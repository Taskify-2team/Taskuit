import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { modalList } from './ModalTypeList'

export default function ModalLayout() {
  const { modalName, modalProps, modalState } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const findModal = modalList.get(modalName)
  const renderModal = findModal ? findModal({ ...modalProps }) : ''

  if (!modalState) return null

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className="animate-fadeIn fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black/50"
    >
      <div onClick={(e) => e.stopPropagation()}>{renderModal}</div>
    </div>
  )
}
