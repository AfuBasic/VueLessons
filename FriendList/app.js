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

app.component("friend-contact", {
    template: `
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="friendVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
	`,

    data() {
        return {
            friendVisible: false,
            friend: {
                id: "tunde",
                name: "Afuwape Tunde",
                phone: "08078767676",
                email: "email@owner.com",
            },
        };
    },

    methods: {
        toggleDetails() {
            this.friendVisible = !this.friendVisible;
        },
    },
});

app.mount("#app");