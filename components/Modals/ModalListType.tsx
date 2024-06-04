import { ReactNode } from 'react'
import BasicModal from './ModalContents/BasicModal'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo from './ModalContents/AddToDo'

export type ModalListType = 'basicModal' | 'addDashBoard' | 'addToDo'

export const modalList: Map<ModalListType, (props?: any) => ReactNode> = new Map<
  ModalListType,
  (props?: any) => ReactNode
>([
  ['basicModal', (props) => <BasicModal key="basic" {...props} />],
  ['addDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['addToDo', (props) => <AddToDo key="addToDo" {...props} />],
])
