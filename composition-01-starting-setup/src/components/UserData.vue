<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button type="button" @click="fireUpdateNameEvent">Update Name</button>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName'],
  emits: ['refresh-name'],
  setup(props, context) {
    const userName = computed(() => props.firstName + ' ' + props.lastName);
    const age = inject('age');

    function fireUpdateNameEvent() {
      context.emit('refresh-name');
    }

    return {
      userName,
      age,
      fireUpdateNameEvent,
    };
  },
};
</script>
