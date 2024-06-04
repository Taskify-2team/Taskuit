import axios from './instance'

export const getInvitationList = async (cursorId?: number | null) => {
  let query = ''
  if (cursorId) {
    query = `&cursorId=${cursorId}`
  }
  const response = await axios.get(`/invitations?size=6${query}`)
  return response.data
}

export const postInvitation = async (invitationId: number, isAccepted: boolean) => {
  const response = await axios.put(`/invitations/${invitationId}`, {
    inviteAccepted: isAccepted,
  })
  return response
}
