const app = Vue.createApp({
    data() {
        return {
            output: "",
            completeText: "",
            num: 0,
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

        showText() {
            console.log("Runnnin");
            return this.completeText;
        },

        increaseNumber() {
            this.num += 5;
        },

        decreaseNumber() {
            this.num -= 5;
        },
    },

    computed: {
        showCompleteText() {
            return this.completeText;
        },
    },
});

app.mount("#events");