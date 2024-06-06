export type ToastTypeList =
  | 'wrongCurrentPassword'
  | 'successDeleteColumn'
  | 'acceptInvite'
  | 'refuseInvite'
  | null

export const toastList: Map<ToastTypeList, { text: string; warn: boolean }> = new Map<
  ToastTypeList,
  { text: string; warn: boolean }
>([
  ['wrongCurrentPassword', { text: '현재 비밀번호가 틀렸습니다.', warn: true }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['acceptInvite', { text: '초대를 수락했습니디.', warn: false }],
  ['refuseInvite', { text: '초대를 거절했습니디.', warn: false }],
])
