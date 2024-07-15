export default {
  userId(state) {
    return state.userId
  },
  token(state) {
    return state.token
  },
  isAuthenticated(state) {
    return !!state.userId
  },
  didLogout(state) {
    return state.didLogout
  }
}
