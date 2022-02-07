const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the Course",
            courseGoalB: "Master vue and be successful",
            vueLink: "https://vuejs.org",
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random() * 10;
            return randomNumber < 5 ? this.courseGoal : this.courseGoalB;
        },
    },
});

app.mount("#user-goal");