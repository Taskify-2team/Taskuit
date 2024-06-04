import { ReactNode } from 'react'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo from './ModalContents/AddToDo'
import AddColumn from './ModalContents/AddColumn'

export type ModalListType = 'addDashBoard' | 'addToDo' | 'addColumn' | null

export const modalList: Map<ModalListType, (props?: any) => ReactNode> = new Map<
  ModalListType,
  (props?: any) => ReactNode
>([
  ['addDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['addToDo', (props) => <AddToDo key="addToDo" {...props} />],
  ['addColumn', (props) => <AddColumn key="addColumn" {...props} />],
])
