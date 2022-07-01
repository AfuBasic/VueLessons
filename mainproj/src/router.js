import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import Requests from './pages/requests/RequestsReceived.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: null,
            children: [{ path: 'contact ', component: null }],
        },
        { path: '/register', component: null },
        { path: '/requests', component: Requests },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;