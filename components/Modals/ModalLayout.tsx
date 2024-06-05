import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { modalList } from './ModalListType'

export default function ModalLayout() {
  const { modalName, modalProps, modalState } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const findModal = modalList.get(modalName)
  const renderModal = findModal ? findModal({ ...modalProps }) : ''

  if (!modalState || !renderModal) return null

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className="fixed top-0 z-50 flex h-screen w-full animate-fadeIn items-center justify-center bg-black/50"
    >
      <div onClick={(e) => e.stopPropagation()}>{renderModal}</div>
    </div>
  )
}
