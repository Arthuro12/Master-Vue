<template>
  <base-container title="Vuex" v-if="isUserAuthenticated">
    <div>
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 1</button>
      <change-counter></change-counter>
    </div>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter,
    UserAuth
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('counter/increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>