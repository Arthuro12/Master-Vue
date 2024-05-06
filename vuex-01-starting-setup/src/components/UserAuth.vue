<template>
    <button type="button" @click="login" v-if="!isUserAuthenticated">Login</button>
    <button type="button" @click="logout" v-else>Logout</button>
</template>

<script>
export default {
    methods: {
        login() {
            console.log("Login");
            this.$store.dispatch('login');
        },
        logout() {
            this.$store.dispatch('logout');
        },
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        }
    }
};
</script>