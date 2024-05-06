<template>
  <base-container title="Vuex">
    <div>
      <the-counter></the-counter>
      <button @click="increment">Add 1</button>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
export default {
  components: {
    BaseContainer,
    TheCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increment() {
      this.$store.state.counter++;
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