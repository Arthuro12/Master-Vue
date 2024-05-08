import { createStore } from 'vuex';

import cartModule from './modules/cart/index.js';
import productsModule from './modules/product/index.js';

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    }
});

export default store;