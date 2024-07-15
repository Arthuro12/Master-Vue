const API_KEY = 'AIzaSyDCDZpOC7X5Od2yyuAOkxq1a0BIukyTLQA'

export default {
  async auth(context, payload) {
    const mode = payload.mode
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      })

      if (!response.ok) {
        const error = new Error(
          response.statusText || 'Failed to authenticate. Check your login data.'
        )
        throw error
      }

      const responseData = await response.json()

      localStorage.setItem('token', responseData.idToken)
      localStorage.setItem('userId', responseData.localId)

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      })
    } catch (error) {
      throw error
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      })
    }
  },
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    })
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}
