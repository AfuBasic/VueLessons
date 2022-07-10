import mutations from './mutations.js';
import actions from '../requests/actions.js';
import getters from './getters.js';

export default {
    state() {
        return {
            userId: 'c3',
        };
    },
    actions,
    getters,
    mutations,
};