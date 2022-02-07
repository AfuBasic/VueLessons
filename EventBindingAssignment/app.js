const app = Vue.createApp({
    data() {
        return {
            output: "",
            completeText: "",
        };
    },

    methods: {
        showAlert() {
            alert("This is my event class");
        },
        updateInput(event) {
            this.output = event.target.value;
        },
        updateCompleteText(event) {
            this.completeText = event.target.value;
        },
    },
});

app.mount("#events");