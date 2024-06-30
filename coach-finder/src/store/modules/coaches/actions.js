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

    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData)
        }
      )

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      // const responseData = await response.json()

      context.commit('registerCoach', { ...coachData, id: userId })
    } catch (error) {
      throw error
    }
  },
  async loadCoaches(context) {
    try {
      const response = await fetch(
        `https://vue-http-demo-fe1bc-default-rtdb.firebaseio.com/coaches.json`
      )

      if (!response.ok) {
        throw new Error(response.statusText)
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
    } catch (error) {
      throw error
    }
  }
}
