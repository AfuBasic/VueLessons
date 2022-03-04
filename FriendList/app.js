const app = Vue.createApp({
    data() {
        return {
            friends: [{
                    id: "tunde",
                    name: "Afuwape Tunde",
                    phone: "08078767676",
                    email: "email@owner.com",
                },
                {
                    id: "biodun",
                    name: "Afuwape Biodun",
                    phone: "08079767676",
                    email: "email@biodun.com",
                },
            ],
        };
    },
});

app.mount("#app");