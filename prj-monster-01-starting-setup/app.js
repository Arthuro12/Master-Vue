const app = Vue.createApp({
    data: function() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    methods: {
        attackMonster: function() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer: function() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackMonster();
        }
    },
    computed: {
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
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