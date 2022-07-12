import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';

import Requests from './pages/requests/RequestsReceived.vue';
import RegisterCoach from './pages/coaches/CoachRegister.vue';
import UserAuth from './pages/auth/UserAuth.vue';

import store from './store/';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [{ path: 'contact', component: ContactCoach }],
        },
        {
            path: '/register',
            component: RegisterCoach,
            meta: { requiresAuth: true },
        },
        { path: '/requests', component: Requests, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

export default router;