export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    }

    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest)
        }
      )

      if (!response.ok) {
        const error = new Error(response.statusText || 'Failed to send request.')
        throw error
      }

      const responseData = await response.json()
      newRequest.id = responseData.name
      newRequest.coachId = payload.coachId
      context.commit('addRequest', { ...newRequest })
    } catch (error) {
      throw error
    }
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId
    const token = context.rootGetters.token

    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
      )

      if (!response.ok) {
        const error = new Error(response.statusText || 'Failed to send request.')
        throw error
      }

      const responseData = await response.json()

      const requests = []
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message
        }

        requests.push(request)
      }

      context.commit('setRequests', requests)
    } catch (error) {
      throw error
    }
  }
}
