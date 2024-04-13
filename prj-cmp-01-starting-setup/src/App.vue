<template>
    <ul>
        <ResourceItem v-for="resource in storedResources" :key="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        />
    </ul>
</template>

<script>
import ResourceItem from './components/learning-resources/ResourceItem.vue';

export default {
    components: {
        ResourceItem
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
                    title: 'google', 
                    description: 'Learn to google.',
                    link: 'https://googgle.org'
                }
            ]
        };
    }
};
</script>