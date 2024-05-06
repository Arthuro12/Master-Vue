export default {
    login(context) {
        context.commit('setAuth', { isAuthenticated: true });
    },
    logout(context) {
        context.commit('setAuth', { isAuthenticated: false });
    }
};