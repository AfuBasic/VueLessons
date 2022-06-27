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
});

export default store;