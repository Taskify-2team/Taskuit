export type ToastTypeList =
  | 'wrongCurrentPassword'
  | 'successDeleteColumn'
  | 'acceptInvite'
  | 'refuseInvite'
  | 'wrongEditBoardValue'
  | 'successEditBoard'
  | null

export const toastList: Map<ToastTypeList, { text: string; warn: boolean }> = new Map<
  ToastTypeList,
  { text: string; warn: boolean }
>([
  ['wrongCurrentPassword', { text: '현재 비밀번호가 틀렸습니다.', warn: true }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['acceptInvite', { text: '초대를 수락했습니다.', warn: false }],
  ['refuseInvite', { text: '초대를 거절했습니다.', warn: false }],
  ['wrongEditBoardValue', { text: '변경된 내용이 없습니다.', warn: true }],
  ['successEditBoard', { text: '대시보드가 변경되었습니다.', warn: false }],
])
