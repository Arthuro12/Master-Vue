<template>
    <the-header title="The Learning Resource App"></the-header>
    <resources></resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import Resources from './components/learning-resources/Resources.vue';

export default {
    components: {
        TheHeader,
        Resources
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>