<template>
  <base-container title="Vuex">
    <div>
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 1</button>
      <change-counter></change-counter>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
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