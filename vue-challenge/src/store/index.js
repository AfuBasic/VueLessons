import { createStore } from 'vuex';

import productStore from './modules/products';
import cartStore from './modules/cart';

const store = createStore({
    modules: {
        product: productStore,
        cart: cartStore,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },

    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },

    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },

    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    },
});

export default store;