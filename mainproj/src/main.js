import { createApp } from 'vue';

import router from './router.js';
import store from './store';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

import App from './App.vue';

const app = createApp(App);

//All Packages usages stay in this section
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
//Render App
app.mount('#app');