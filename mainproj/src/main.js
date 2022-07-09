import { createApp } from 'vue';

import router from './router.js';
import store from './store';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

import App from './App.vue';

const app = createApp(App);

//All Packages usages stay in this section
app.use(router);
app.use(store);

//gloabl Components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

//Render App
app.mount('#app');