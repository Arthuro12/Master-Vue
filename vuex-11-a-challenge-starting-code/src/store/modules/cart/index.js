import cartActions from './actions.js';
import cartGetters from './getters.js';
import cartMutations from './mutations.js';

export default {
    namespaced: true,
    state() {
        return {
            items: [], 
            total: 0, 
            qty: 0 ,
        };
    },
    actions: cartActions,
    getters: cartGetters,
    mutations: cartMutations
};