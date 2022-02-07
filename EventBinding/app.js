const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },

    methods: {
        add() {
            this.counter++;
        },
        deduct() {
            this.counter--;
        },
        updateName(e) {
            this.name = e.target.value;
        },
    },
});

app.mount("#events");