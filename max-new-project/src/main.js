import { createApp } from "vue";
import App from "./App.vue";
import FriendList from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend";
const app = createApp(App);

app.component("friend-list", FriendList);
app.component("new-friend", NewFriend);
app.mount("#app");