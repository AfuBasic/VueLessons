const getRamdonValue = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
    data() {
        return {
            health: {
                player: 100,
                monster: 100,
            },
            currentRound: 0,
        };
    },

    computed: {
        playerBar() {
            return { width: this.health.player + "%" };
        },

        monsterBar() {
            return { width: this.health.monster + "%" };
        },

        specialAttackAvailable() {
            if (this.currentRound === 0) return true;
            return this.currentRound % 3 !== 0;
        },
    },

    watch: {
        "health.player" (value) {
            if (value <= 0 && this.health.monster <= 0) {
                //Draw
            } else if (value <= 0) {
                //Player Lost
            }
        },

        "health.monster" (value) {},
    },

    methods: {
        attackMonster() {
            const attackValue = getRamdonValue(5, 15);
            this.health.monster -= attackValue;
            this.currentRound++;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRamdonValue(8, 20);
            this.health.player -= attackValue;
        },

        specialAttack() {
            this.currentRound++;
            const attackValue = getRamdonValue(10, 25);
            this.health.monster -= attackValue;
            this.attackPlayer();
        },

        healPlayer() {
            const healValue = getRamdonValue(8, 20);
            if (this.health.player + healValue > 100) {
                this.health.player = 100;
            } else {
                this.health.player += healValue;
            }

            this.attackPlayer();
        },
    },
});

app.mount("#game");