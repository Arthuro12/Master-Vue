<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <error-alert v-if="isValidInput">
                <h2>Input is invaid!</h2>
                <p>Please enter at least a few character...</p>
                <button type="button" @click="confirmError">Okay</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            isValidInput: false
        };
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.isValidInput = !this.isValidInput;
            }
        },
        confirmError() {
            this.isValidInput = !this.isValidInput;
        }
    }
};
</script>