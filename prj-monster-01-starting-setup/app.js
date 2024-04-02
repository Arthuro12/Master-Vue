const app = Vue.createApp({
    data: function() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        attackMonster: function() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer: function() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth += attackValue;
        }
    }
});

app.mount("#game");

/**
 * Statics functions
 */

function getRandomValue(minValue, maxValue) {
    const attackValue = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}