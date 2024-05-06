import { createStore } from 'vuex';

import counterModule from './counter/index.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import rootMutations from './mutations.js';

const store = createStore({
    modules: {
        counter: counterModule
    },
    actions: rootActions,
    state() {
        return {
            isLoggedIn: false
        };
    },
    getters: rootGetters,
    mutations: rootMutations
});

export default store;