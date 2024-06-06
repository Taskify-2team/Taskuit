import axios from './instance'

export const getInvitationList = async (cursorId?: number | null, title?: string) => {
  let idQuery = ''
  let titleQuery = ''
  if (cursorId) {
    idQuery = `&cursorId=${cursorId}`
  }
  if (title) {
    titleQuery = `&title=${title}`
  }
  const response = await axios.get(`/invitations?size=4${idQuery}${titleQuery}`)
  return response.data
}

export const postInvitation = async (invitationId: number, isAccepted: boolean) => {
  const response = await axios.put(`/invitations/${invitationId}`, {
    inviteAccepted: isAccepted,
  })
  return response
}
