const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: "",
        };
    },

    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

//Don't forget, you can use v-for to iterate over an object

app.mount("#app");