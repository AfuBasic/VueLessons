import { createApp } from "vue";
import App from "./App.vue";
import FriendList from "./components/FriendContact.vue";
const app = createApp(App);

app.component("friend-list", FriendList);
app.mount("#app");