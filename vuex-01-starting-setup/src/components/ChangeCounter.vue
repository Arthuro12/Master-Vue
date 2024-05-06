<template>
    <div>
        <button @click="increase({ value: 10 })">Add 10</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['increase']),
        // add() {
        //     // this.$store.commit('increase', { value: 10 });
        //     this.$store.dispatch(
        //         {
        //             type: 'increase',
        //             value: 10
        //         }
        //     );
        // }
    }
}
</script>