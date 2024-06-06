export type ToastTypeList = 'wrongCurrentPassword' | 'successDeleteColumn' | null

export const toastList: Map<ToastTypeList, { text: string; warn: boolean }> = new Map<
  ToastTypeList,
  { text: string; warn: boolean }
>([
  ['wrongCurrentPassword', { text: '비밀번호가 일치하지 않습니다.', warn: true }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['emailInUse', { text: '이미 사용중인 이메일입니다.', warn: true }],
])
