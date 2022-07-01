import { createApp } from 'vue';

import router from './router.js';

import App from './App.vue';

const app = createApp(App);

//All Packages usages stay in this section
app.use(router);

//Render App
app.mount('#app');