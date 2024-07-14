const API_KEY = 'AIzaSyDCDZpOC7X5Od2yyuAOkxq1a0BIukyTLQA'

export default {
  login() {},
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
        console.log(response.json())
        const error = new Error(response.statusText || 'Failed to authenticate.')
        throw error
      }

      const responseData = await response.json()
      console.log(responseData)
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      })
    } catch (error) {}
  }
}
