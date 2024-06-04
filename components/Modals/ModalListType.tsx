import { ReactNode } from 'react'
import BasicModal from './ModalContents/BasicModal'

export type ModalListType = 'basicModal' | 'anotherModal'

export const modalList: Map<ModalListType, (props?: any) => ReactNode> = new Map<
  ModalListType,
  (props?: any) => ReactNode
>([
  ['basicModal', (props) => <BasicModal key="basic" {...props} />],
  // ['anotherModal', (props) => <AnotherModal key="another" {...props} />],
])
