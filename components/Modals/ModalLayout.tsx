import { useAppDispatch, useAppSelector } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import { useEffect } from 'react'
import modalList from './ModalTypeList'

export default function ModalLayout() {
  const { modalName, modalProps } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const findModal = modalList.get(modalName)
  const renderModal = findModal ? findModal({ ...modalProps }) : ''

  useEffect(() => {
    if (modalName) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') dispatch(closeModal())
      })
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') dispatch(closeModal())
      })
    }
  }, [modalName])

  if (!modalName) return null

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className="fixed top-0 z-50 flex h-screen w-full animate-fadeIn items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div onClick={(e) => e.stopPropagation()}>{renderModal}</div>
    </div>
  )
}
