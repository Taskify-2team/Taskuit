export type ToastTypeList = 'wrongCurrentPassword' | 'successDeleteColumn' | null

export const toastList: Map<ToastTypeList, { text: string; warn: boolean }> = new Map<
  ToastTypeList,
  { text: string; warn: boolean }
>([
  ['wrongCurrentPassword', { text: '현재 비밀번호가 틀렸습니다.', warn: true }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['successDeleteCard', { text: '카드가 삭제되었습니다.', warn: false }],
])
