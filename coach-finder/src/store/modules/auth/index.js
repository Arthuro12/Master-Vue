import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
  sate() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      didLogout: false
    }
  },
  actions,
  getters,
  mutations
}
