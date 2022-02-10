const app = Vue.createApp({
    data() {
        return {
            num: 0,
        };
    },
    methods: {
        add(value) {
            this.num = this.num + value;
        },
    },

    computed: {
        result() {
            if (this.num < 37) {
                return "Not There Yet";
            } else if (this.num === 37) {
                return this.num;
            } else {
                return "Too Much";
            }
        },
    },

    watch: {
        result(value) {
            const obj = this;
            setTimeout(() => {
                obj.num = 0;
            }, 5000);
        },
    },
});

app.mount("#reactivity");