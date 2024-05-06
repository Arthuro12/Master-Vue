<template>
    <h3>{{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['normalizedCounter']),
        // counter() {
        //     // return this.$store.state.counter;
        //     return this.$store.getters.normalizedCounter;
        // }
    }
};
</script>