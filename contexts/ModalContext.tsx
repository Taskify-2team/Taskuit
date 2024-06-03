import { ReactNode, createContext, useContext, useMemo, useReducer } from 'react'

export type ModalState = {
  [x: string]: boolean
}

export interface ContextValue {
  modalState: ModalState
  openModal: (modalName: string) => void
  closeModal: (modalName: string) => void
}

interface ModalAction {
  type: string
  modalName: string
}

const ModalContext = createContext<ContextValue>({
  modalState: {},
  openModal: () => {},
  closeModal: () => {},
})

const modalReducer = (state: ModalState, action: ModalAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, [action.modalName]: true }
    case 'CLOSE_MODAL':
      return { ...state, [action.modalName]: false }
    default:
      throw new Error(`unhandled action type: ${action.type}`)
  }
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, dispatch] = useReducer(modalReducer, {})

  const openModal = (modalName: string) => {
    dispatch({ type: 'OPEN_MODAL', modalName })
  }

  const closeModal = (modalName: string) => {
    dispatch({ type: 'CLOSE_MODAL', modalName })
  }

  const modalHandler = useMemo(() => ({ modalState, openModal, closeModal }), [modalState])

  return <ModalContext.Provider value={modalHandler}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const { modalState, openModal, closeModal } = useContext(ModalContext)

  return { modalState, openModal, closeModal }
}
