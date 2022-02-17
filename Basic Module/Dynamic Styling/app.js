const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            if (box === "A") this.boxASelected = !this.boxASelected;
            if (box === "B") this.boxBSelected = !this.boxBSelected;
            if (box === "C") this.boxCSelected = !this.boxCSelected;
        },
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        },
        boxBClasses() {
            return { active: this.boxBSelected };
        },
        boxCClasses() {
            return { active: this.boxCSelected };
        },
    },
});

app.mount("#styling");