const API_KEY = 'AIzaSyDCDZpOC7X5Od2yyuAOkxq1a0BIukyTLQA'

export default {
  async login(context, payload) {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        }
      )

      if (!response.ok) {
        const error = new Error(
          response.statusText || 'Failed to authenticate. Check your login data.'
        )
        throw error
      }

      const responseData = await response.json()
      console.log(responseData)
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      })
    } catch (error) {
      throw error
    }
  },
  async signup(context, payload) {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        }
      )

      if (!response.ok) {
        const error = new Error(
          response.statusText || 'Failed to authenticate. Check your login data.'
        )
        throw error
      }

      const responseData = await response.json()
      console.log(responseData)
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      })
    } catch (error) {
      throw error
    }
  }
}
