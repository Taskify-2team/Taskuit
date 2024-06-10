/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo, { AddToDoProps } from './ModalContents/AddToDo'
import AddColumn, { AddColumnProps } from './ModalContents/AddColumn'
import AddMember, { AddMemberProps } from './ModalContents/AddMember'
import EditToDo, { EditToDoProps } from './ModalContents/EditToDo'
import EditColumn, { EditColumnProps } from './ModalContents/EditColumn'
import WarningModal, { WarningModalProps } from './ModalContents/WarningModal'
import ToDoDetail, { ToDoDetailProps } from './ModalContents/DetailToDo'

const modalList: Map<string, (props: any) => ReactNode> = new Map<
  string,
  (props: any) => ReactNode
>([
  ['AddDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['AddToDo', (props: AddToDoProps) => <AddToDo key="addToDo" {...props} />],
  ['AddColumn', (props: AddColumnProps) => <AddColumn key="addColumn" {...props} />],
  ['AddMember', (props: AddMemberProps) => <AddMember key="addMember" {...props} />],
  ['EditToDo', (props: EditToDoProps) => <EditToDo key="editToDo" {...props} />],
  ['EditColumn', (props: EditColumnProps) => <EditColumn key="editColumn" {...props} />],
  ['WarningModal', (props: WarningModalProps) => <WarningModal key="warning" {...props} />],
  ['DetailToDo', (props: ToDoDetailProps) => <ToDoDetail key="detailToDo" {...props} />],
])

export default modalList

// tagged union
// type narrowing
