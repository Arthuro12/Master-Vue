import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
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
        }
    },
    state() {
        return {
            counter: 0
        };
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
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
