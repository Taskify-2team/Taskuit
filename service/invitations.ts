import axios from './instance'

export const getInvitationList = async (cursorId?: number | null) => {
  let query = ''
  if (cursorId) {
    query = `&cursorId=${cursorId}`
  }
  const response = await axios.get(`/invitations?size=6${query}`)
  return response.data
}

export const postInvitation = async (invitationId: number) => {
  const response = await axios.get(`/invitations/${invitationId}`)
  return response
}
