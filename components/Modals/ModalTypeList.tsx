import { ReactNode } from 'react'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo from './ModalContents/AddToDo'
import AddColumn from './ModalContents/AddColumn'
import AddMember from './ModalContents/AddMember'
import EditToDo from './ModalContents/EditToDo'
import EditColumn from './ModalContents/EditColumn'
import WarningModal from './ModalContents/WarningModal'

export type ModalTypeList =
  | 'addDashBoard'
  | 'addToDo'
  | 'addColumn'
  | 'addMember'
  | 'editToDo'
  | 'editColumn'
  | 'warningModal'
  | null

export const modalList: Map<ModalTypeList, (props?: any) => ReactNode> = new Map<
  ModalTypeList,
  (props?: any) => ReactNode
>([
  ['addDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['addToDo', (props) => <AddToDo key="addToDo" {...props} />],
  ['addColumn', (props) => <AddColumn key="addColumn" {...props} />],
  ['addMember', (props) => <AddMember key="addMember" {...props} />],
  ['editToDo', (props) => <EditToDo key="editToDo" {...props} />],
  ['editColumn', (props) => <EditColumn key="editColumn" {...props} />],
  ['warningModal', (props) => <WarningModal key="warning" {...props} />],
])
