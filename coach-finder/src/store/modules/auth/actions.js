const API_KEY = 'AIzaSyDCDZpOC7X5Od2yyuAOkxq1a0BIukyTLQA'
let timer = null

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

      const expiresIn = +responseData.expiresIn * 1000
      const expirationDate = new Date().getTime() + expiresIn

      localStorage.setItem('token', responseData.idToken)
      localStorage.setItem('userId', responseData.localId)
      localStorage.setItem('tokenExpiration', expirationDate)

      timer = setTimeout(() => {
        context.dispatch('autoLogout')
      }, expiresIn)

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId
      })
    } catch (error) {
      throw error
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId
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
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null
    })
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('didLogout')
  }
}
