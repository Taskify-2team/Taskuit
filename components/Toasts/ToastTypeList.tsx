const toastList: Map<string, { text: string; warn: boolean }> = new Map([
  ['successEditBoard', { text: '대시보드가 변경되었습니다.', warn: false }],
  ['successEditColumn', { text: '컬럼 이름이 변경되었습니다.', warn: false }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['successDeleteCard', { text: '카드가 삭제되었습니다.', warn: false }],
  ['successDeleteMember', { text: '삭제되었습니다', warn: false }],
  ['emailInUse', { text: '이미 사용중인 이메일입니다.', warn: true }],
  ['acceptInvite', { text: '초대를 수락했습니다.', warn: false }],
  ['refuseInvite', { text: '초대를 거절했습니다.', warn: false }],
  ['cancelInvite', { text: '초대 요청이 취소되었습니다.', warn: false }],
  ['wrongEditBoardValue', { text: '변경된 내용이 없습니다.', warn: true }],
  ['cancelInvite', { text: '초대 요청이 취소되었습니다.', warn: false }],
  ['wrongCurrentPassword', { text: '비밀번호가 일치하지 않습니다.', warn: true }],
])

export default toastList
