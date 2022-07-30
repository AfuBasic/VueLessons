import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

//Instantiat the Vue app
const app = createApp(App);

//Use Vue Router
app.use(router);

app.mount("#app");