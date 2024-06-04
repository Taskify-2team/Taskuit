import { ReactNode } from 'react'
import BasicModal from './ModalContents/BasicModal'
import AddDashBoard from './ModalContents/AddDashBoard'

export type ModalListType = 'basicModal' | 'addDashBoard'

export const modalList: Map<ModalListType, (props?: any) => ReactNode> = new Map<
  ModalListType,
  (props?: any) => ReactNode
>([
  ['basicModal', (props) => <BasicModal key="basic" {...props} />],
  ['addDashBoard', (props) => <AddDashBoard key="addDash" {...props} />],
])
