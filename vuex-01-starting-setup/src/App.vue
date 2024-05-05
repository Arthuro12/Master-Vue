<template>
  <base-container title="Vuex">
    <div>
      <h3>{{ $store.state.counter }}</h3>
      <button @click="increment">Add 1</button>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
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