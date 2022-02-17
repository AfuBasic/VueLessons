const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: "",
            hideList: "Hide",
            listShown: true,
        };
    },

    computed: {
        buttonCaption() {
            return this.listShown ? "Hide" : "Show";
        },
    },

    methods: {
        addTask() {
            if (this.enteredTask.length > 0) this.tasks.push(this.enteredTask);
            this.enteredTask = "";
        },

        toggleList() {
            if (this.tasks.length > 0) {
                this.listShown = !this.listShown;
            }
        },
    },
});
app.mount("#app");