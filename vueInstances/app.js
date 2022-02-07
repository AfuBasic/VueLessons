const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the Course",
            vueLink: "https://vuejs.org",
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random() * 10;
            return randomNumber < 5 ? "Learn Vue" : "Master Vue";
        },
    },
});

app.mount("#user-goal");