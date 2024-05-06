<template>
    <div>
        <button @click="add">Add 10</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            // this.$store.commit('increase', { value: 10 });
            this.$store.dispatch(
                {
                    type: 'increase',
                    value: 10
                }
            );
        }
    }
}
</script>