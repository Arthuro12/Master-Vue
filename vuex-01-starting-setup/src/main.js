import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    actions: {
        increment(context) {
            setTimeout(function() {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            setTimeout(function() {
                context.commit('increase', payload);
            }, 2000);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
           const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    state() {
        return {
            counter: 0
        };
    },
};

const store = createStore({
    modules: {
        counter: counterModule
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuthenticated: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuthenticated: false });
        }
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    getters: {
        isUserAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuthenticated;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
