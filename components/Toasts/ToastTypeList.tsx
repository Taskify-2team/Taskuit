const toastList: Map<string, { text: string; warn: boolean }> = new Map([
  ['successEditBoard', { text: '대시보드가 변경되었습니다.', warn: false }],
  ['successEditColumn', { text: '컬럼 이름이 변경되었습니다.', warn: false }],
  ['successDeleteColumn', { text: '컬럼이 삭제되었습니다.', warn: false }],
  ['successDeleteCard', { text: '카드가 삭제되었습니다.', warn: false }],
  ['successDeleteMember', { text: '삭제되었습니다.', warn: false }],
  ['successUpdateProfile', { text: '프로필이 수정되었습니다.', warn: false }],
  ['successUpdateCard', { text: '카드가 수정되었습니다.', warn: false }],
  ['successAddCard', { text: '카드가 추가되었습니다.', warn: false }],
  ['successAddColumn', { text: '컬럼이 추가되었습니다.', warn: false }],
  ['successUpdatePassword', { text: '비밀번호가 변경되었습니다.', warn: false }],
  ['acceptInvite', { text: '초대를 수락했습니다.', warn: false }],
  ['refuseInvite', { text: '초대를 거절했습니다.', warn: false }],
  ['cancelInvite', { text: '초대 요청이 취소되었습니다.', warn: false }],
  ['emailInUse', { text: '이미 사용중인 이메일입니다.', warn: true }],
  ['wrongEditBoardValue', { text: '변경된 내용이 없습니다.', warn: true }],
  ['wrongCurrentPassword', { text: '비밀번호가 일치하지 않습니다.', warn: true }],
  ['successSignUp', { text: '가입이 완료되었습니다.', warn: false }],
  ['failedToLoadData', { text: '데이터를 가져오는 중 오류가 발생했습니다.', warn: true }],
  ['fileTooLarge', { text: '이미지 파일의 용량은 4메가를 넘지 않아야 합니다.', warn: true }],
])

export default toastList
