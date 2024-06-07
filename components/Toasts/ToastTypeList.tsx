const toastList: Map<string, { text: string; warn: boolean }> = new Map([
  ['wrongCurrentPassword', { text: '비밀번호가 일치하지 않습니다.', warn: true }],
  ['wrongEditBoardValue', { text: '변경된 내용이 없습니다.', warn: true }],
  ['emailInUse', { text: '이미 사용중인 이메일입니다.', warn: true }],
  ['profileUpdateSuccess', { text: '프로필이 변경되었습니다.', warn: false }],
  ['columnDeleteSuccess', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['acceptInvite', { text: '초대를 수락했습니다.', warn: false }],
  ['refuseInvite', { text: '초대를 거절했습니다.', warn: false }],
  ['boardUpdateSuccess', { text: '대시보드가 변경되었습니다.', warn: false }],
  ['cancelInvite', { text: '초대 요청이 취소되었습니다.', warn: false }],
  ['cardAdditionSuccess', { text: '할일 추가가 완료되었습니다.', warn: false }],
  ['successDeleteMember', { text: '삭제되었습니다', warn: false }],
])

export default toastList
