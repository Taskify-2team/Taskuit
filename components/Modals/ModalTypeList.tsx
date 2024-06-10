import { ReactNode } from 'react'
import AddDashBoard from './ModalContents/AddDashBoard'
import AddToDo from './ModalContents/AddToDo'
import AddColumn from './ModalContents/AddColumn'
import AddMember from './ModalContents/AddMember'
import EditToDo from './ModalContents/EditToDo'
import EditColumn from './ModalContents/EditColumn'
import WarningModal from './ModalContents/WarningModal'
import ToDoDetail from './ModalContents/DetailToDo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modalList: Map<string, (props?: any) => ReactNode> = new Map([
  ['AddDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
  ['AddToDo', (props) => <AddToDo key="addToDo" {...props} />],
  ['AddColumn', (props) => <AddColumn key="addColumn" {...props} />],
  ['AddMember', (props) => <AddMember key="addMember" {...props} />],
  ['EditToDo', (props) => <EditToDo key="editToDo" {...props} />],
  ['EditColumn', (props) => <EditColumn key="editColumn" {...props} />],
  ['WarningModal', (props) => <WarningModal key="warning" {...props} />],
  ['DetailToDo', (props) => <ToDoDetail key="detailToDo" {...props} />],
])

export default modalList
