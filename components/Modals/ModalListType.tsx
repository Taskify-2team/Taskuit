import { ReactNode } from 'react'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo from './ModalContents/AddToDo'
import AddColumn from './ModalContents/AddColumn'
import AddMember from './ModalContents/AddMember'
import EditToDo from './ModalContents/EditToDo'

export type ModalListType =
  | 'addDashBoard'
  | 'addToDo'
  | 'addColumn'
  | 'addMember'
  | 'editToDo'
  | null

export const modalList: Map<ModalListType, (props?: any) => ReactNode> = new Map<
  ModalListType,
  (props?: any) => ReactNode
>([
  ['addDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['addToDo', (props) => <AddToDo key="addToDo" {...props} />],
  ['addColumn', (props) => <AddColumn key="addColumn" {...props} />],
  ['addMember', (props) => <AddMember key="addMember" {...props} />],
  ['editToDo', (props) => <EditToDo key="editToDo" {...props} />],
])
