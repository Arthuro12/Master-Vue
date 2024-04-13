<template>
    <header title="The Learning Resource App"></header>
    <ul>
        <stored-resources :resources="storedResources"></stored-resources>
    </ul>
</template>

<script>
import Header from './components/layouts/Header.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';

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