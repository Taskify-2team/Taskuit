import axios from './instance'

export const getInvitationList = async (params) => {
  const query = `?size=${params.size}&cursorId=${params.cursorId}&title=${params.title}`
  const response = await axios.get(`/invitations${query}`, {
    headers: {
      'include-access-token': true,
    },
  })
  return response
}
