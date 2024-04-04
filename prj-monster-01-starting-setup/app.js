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
            this.playerHealth -= attackValue;
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        }
    }
});

app.mount("#game");

/**
 * Statics functions
 */

function getRandomValue(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}