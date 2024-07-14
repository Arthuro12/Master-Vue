export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    }

    const token = context.rootGetters.token

    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData)
        }
      )

      if (!response.ok) {
        const error = new Error(response.statusText || 'Failed to fetch')
        throw error
      }

      context.commit('registerCoach', { ...coachData, id: userId })
    } catch (error) {
      throw error
    }
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefres && !context.getters.shouldUpdate) {
      return
    }

    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/coaches.json`
      )
      if (!response.ok) {
        const error = new Error(response.statusText || 'Failed to fetch')
        throw error
      }

      const responseData = await response.json()

      const coaches = []

      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        }
        coaches.push(coach)
      }

      context.commit('setCoaches', coaches)
      context.commit('setFetchTimestamp')
    } catch (error) {
      throw error
    }
  }
}
