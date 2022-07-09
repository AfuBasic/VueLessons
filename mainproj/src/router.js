import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';

import Requests from './pages/requests/RequestsReceived.vue';
import RegisterCoach from './pages/coaches/CoachRegister.vue';

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
        { path: '/register', component: RegisterCoach },
        { path: '/requests', component: Requests },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;