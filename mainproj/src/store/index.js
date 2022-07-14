import { createStore } from 'vuex';

import CoachesModule from './modules/coaches/index.js';
import RequestsModule from './modules/requests/index.js';
import AuthModule from './modules/auth/index';

const store = createStore({
    modules: {
        coaches: CoachesModule,
        requests: RequestsModule,
        auth: AuthModule,
    },
    state() {},
});

export default store;