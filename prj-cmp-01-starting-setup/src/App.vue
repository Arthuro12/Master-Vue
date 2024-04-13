<template>
    <header title="The Learning Resource App"></header>
</template>

<script>
import Header from './components/layouts/Header.vue';

export default {
    components: {
        StoredResources,
        Header
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide', 
                    title: 'Official Guide', 
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', 
                    title: 'Google', 
                    description: 'Learn to google.',
                    link: 'https://googgle.org'
                }
            ]
        };
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